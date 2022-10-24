import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { useContext, useState } from "react";
import MyContext from "./MyContext";

import { ThreeDots } from "react-loader-spinner";
export default function Habito({ dado, runEffect, setRunEffect }) {
  const [toggleLoading, setToggleLoading] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const { dados, DIAS } = useContext(MyContext);
  const days = dado.days;
  const token = dados.token;
  const id = dado.id;
  const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

  function changeIcon() {
    setToggleDelete(true);
  }

  function removeHabit() {
    setToggleLoading(true);
    const request = axios.delete(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    request.then(() => {
      setRunEffect(runEffect + 1);
      setToggleLoading(false);
      setToggleDelete(false)
    });
    request.catch(() => {
      alert("Problemas no servidor, tente novamente mais tarde!");
      setToggleLoading(false);
      setToggleDelete(false)
    });
  }
  return (
    <Container>
      <Top>
        <Nome>{dado.name}</Nome>
        <Icon>
          {toggleDelete === false ? (
            <BsTrash size={18} onClick={changeIcon} color="#666666" />
          ) : toggleLoading === false ? (
            <Botoes>
              <Cancelar>Cancelar</Cancelar>
              <Confirmar
                onClick={() => {
                  removeHabit();
                }}
              >
                Confirmar
              </Confirmar>
            </Botoes>
          ) : (
            <Botoes>
              <ThreeDots
                height="45"
                width="70"
                radius="9"
                color="#52b6ff"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            </Botoes>
          )}
        </Icon>
      </Top>
      <Dias>
        {DIAS.map((dia, i) =>
          days.includes(dia.day) ? (
            <DiaEscolhido key={i}> {dia.name} </DiaEscolhido>
          ) : (
            <DiaDisponivel key={i}> {dia.name} </DiaDisponivel>
          )
        )}
      </Dias>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 14px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const Nome = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;
  color: #666666;
  word-break: break-all;
`;
const Icon = styled.div`
  padding-left: 20px;
`;

const Dias = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
`;

const DiaDisponivel = styled.li`
  width: 30px;
  min-width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  color: #dbdbdb;
  background-color: #ffffff;
  font-size: 19.976px;
  line-height: normal;
  text-align: center;
`;

const DiaEscolhido = styled.li`
  width: 30px;
  min-width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  color: #ffffff;
  background-color: #dbdbdb;
  font-size: 19.976px;
  line-height: normal;
  text-align: center;
`;

const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  width: 100%;
  margin-right: 15px;
`;

const Cancelar = styled.button`
  width: 45%;
  height: 35px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  border-radius: 4.6px;
  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  text-align: center;
`;

const Confirmar = styled.button`
  width: 45%;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.6px;
  border: 1px solid #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  text-align: center;
  color: #ffffff;
`;
