import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "axios";
import { useContext } from "react";
import MyContext from "./MyContext";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";

export default function Habito({ dado, runEffect, setRunEffect }) {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <ModalContainer>
        <Modal>
          <p>Excluir o hábito?</p>
          <Botoes>
            <Cancelar onClick={hideModal}>Cancelar</Cancelar>
            <Confirmar
              onClick={() => {
                removeHabit();
                hideModal();
              }}
            >
              Confirmar
            </Confirmar>
          </Botoes>
        </Modal>
      </ModalContainer>
    </ReactModal>
  ));
  const { dados } = useContext(MyContext);
  const days = dado.days;
  const token = dados.token;
  const id = dado.id;
  const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
  console.log(URL);
  const DIAS = [
    { name: "D", day: 0 },
    { name: "S", day: 1 },
    { name: "T", day: 2 },
    { name: "Q", day: 3 },
    { name: "Q", day: 4 },
    { name: "S", day: 5 },
    { name: "S", day: 6 },
  ];

  function removeHabit() {
    const request = axios.delete(URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    request.then(() => setRunEffect(runEffect + 1));
    request.catch(() =>
      alert("Problemas no servidor, tente novamente mais tarde!")
    );
  }
  return (
    <Container>
      <Top>
        <Nome>{dado.name}</Nome>
        <BsTrash onClick={showModal} color="#666666" />
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
  margin-bottom: 10px;
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

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  border-radius: 2%;
  flex-direction: column;
  justify-content: center;
  background-color: #dbdbdb;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 19.976px;
    color: #666666;
  }
`;

const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 180px;
`;

const Cancelar = styled.button`
  width: 40%;
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
  width: 40%;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.6px;
  border: 1px solid #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  text-align: center;
  color: #ffffff;
`;
