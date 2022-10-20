import styled from "styled-components";
import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import { useState } from "react";

export default function Habits() {
  const DIAS = [
    { name: "D", day: 1 },
    { name: "S", day: 2 },
    { name: "T", day: 3 },
    { name: "Q", day: 4 },
    { name: "Q", day: 5 },
    { name: "S", day: 6 },
    { name: "S", day: 7 },
  ];
  const [habits, setHabits] = useState([]);
  const [diasMarcados, setDiasMarcados] = useState([]);
  const [formState, setFormState] = useState("none");
  const [buttonSymbol, setButtonSymbol] = useState("+");
  const [buttonColor, setButtonColor] = useState("#52b6ff");
  console.log(diasMarcados);
  function marcarDia(dia) {
    let novoDiasMarcados = [...diasMarcados];
    if (diasMarcados.includes(dia.day)) {
      novoDiasMarcados = novoDiasMarcados.filter(
        (diaMarcado) => diaMarcado !== dia.day
      );
    } else {
      novoDiasMarcados.push(dia.day);
    }
    setDiasMarcados(novoDiasMarcados);
  }

  function abrirForm() {
    let novoFormState = formState;
    let novoButtonSymbol = buttonSymbol;
    let novoButtonColor = buttonColor;
    if (formState === "none") {
      novoFormState = "flex";
      novoButtonSymbol = "x";
      novoButtonColor = "#ff5252";
    } else {
      novoFormState = "none";
      novoButtonSymbol = "+";
      novoButtonColor = "#52b6ff";
    }
    setFormState(novoFormState);
    setButtonColor(novoButtonColor);
    setButtonSymbol(novoButtonSymbol);
    setDiasMarcados([])
  }

  return (
    <Container>
      <Header />
      <MyHabits>
        <Top>
          <span>Meus hábitos</span>
          <Add color={buttonColor} onClick={abrirForm}>
            {buttonSymbol}
          </Add>
        </Top>
        <Form display={formState}>
          <NomeHabito placeholder="nome do hábito" type="text" />
          <Dias>
            {DIAS.map((dia) =>
              diasMarcados.includes(dia.day) ? (
                <DiaEscolhido onClick={() => marcarDia(dia)}>
                  {" "}
                  {dia.name}{" "}
                </DiaEscolhido>
              ) : (
                <DiaDisponivel onClick={() => marcarDia(dia)}>
                  {" "}
                  {dia.name}{" "}
                </DiaDisponivel>
              )
            )}
          </Dias>
          <Botoes>
            <Cancelar>Cancelar</Cancelar>
            <Salvar>Salvar</Salvar>
          </Botoes>
        </Form>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </MyHabits>
      <Bottom />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  margin-top: 70px;
  background: #f2f2f2;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 28px;
`;

const MyHabits = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 28px;
  span {
    font-family: "Lexend Deca", sans-serif;
    line-height: 29px;
    color: #126ba5;
    font-size: 22.98px;
  }
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 17.976px;
    color: #666666;
    margin-top: 30px;
  }
`;

const Add = styled.div`
  font-family: "Lexend Deca", sans-serif;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  width: 40px;
  height: 35px;
  border-radius: 4.63636px;
  font-size: 26.976px;
  color: #ffffff;
  text-align: center;
  line-height: 28px;
`;

const Form = styled.form`
  display: ${(props) => props.display};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
`;

const Dias = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  margin-top: -18px;
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

const NomeHabito = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca", sans-serif;
  font-size: 19.976px;
  color: #666666;
  &::placeholder {
    color: #dbdbdb;
    font-family: "Lexend Deca", sans-serif;
    font-size: 19.976px;
  }
`;

const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  width: 100%;
`;

const Cancelar = styled.button`
  width: 84px;
  height: 35px;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  color: #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  text-align: center;
`;

const Salvar = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.6px;
  border: 1px solid #52b6ff;
  font-family: "Lexend Deca", sans-serif;
  font-size: 15.98px;
  text-align: center;
  color: #ffffff;
`;
