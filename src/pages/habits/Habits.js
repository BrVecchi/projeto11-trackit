import MyContext from "../../components/MyContext";
import styled from "styled-components";
import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Habito from "../../components/Habito";

export default function Habits() {
  const { dados } = useContext(MyContext);
  const [habits, setHabits] = useState([]);
  const DIAS = [
    { name: "D", day: 0 },
    { name: "S", day: 1 },
    { name: "T", day: 2 },
    { name: "Q", day: 3 },
    { name: "Q", day: 4 },
    { name: "S", day: 5 },
    { name: "S", day: 6 },
  ];
  const token = dados.token;
  const [diasMarcados, setDiasMarcados] = useState([]);
  const [formState, setFormState] = useState("none");
  const [buttonSymbol, setButtonSymbol] = useState("+");
  const [buttonColor, setButtonColor] = useState("#52b6ff");
  const [habitName, setHabitName] = useState("");
  const [runEffect, setRunEffect] = useState(0)

  useEffect(() => {
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    request.then((res) => {
      setHabits(res.data);
    });
  }, [runEffect]);

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
    setDiasMarcados([]);
  }

  function saveHabit(e) {
    e.preventDefault();
    const novoButtonSymbol = "+";
    const novoButtonColor = "#52b6ff";
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      {
        name: habitName,
        days: diasMarcados,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    request.then(() =>{
      setFormState("none")
      setRunEffect(runEffect+1)
      setButtonSymbol(novoButtonSymbol)
      setButtonColor(novoButtonColor);
    })
  }

  return (
    <Container>
      <Header />
      <MyHabits>
        <Top>
          <Title>Meus hábitos</Title>
          <Add color={buttonColor} onClick={abrirForm}>
            {buttonSymbol}
          </Add>
        </Top>
        <Form onSubmit={saveHabit} display={formState}>
          <NomeHabito
            required
            id="habit"
            name="habit"
            value={habitName}
            onChange={(event) => setHabitName(event.target.value)}
            type="text"
            placeholder="nome do hábito"
          />
          <Dias>
            {DIAS.map((dia, i) =>
              diasMarcados.includes(dia.day) ? (
                <DiaEscolhido key={i} onClick={() => marcarDia(dia)}>
                  {" "}
                  {dia.name}{" "}
                </DiaEscolhido>
              ) : (
                <DiaDisponivel key={i} onClick={() => marcarDia(dia)}>
                  {" "}
                  {dia.name}{" "}
                </DiaDisponivel>
              )
            )}
          </Dias>
          <Botoes>
            <Cancelar type="reset">Cancelar</Cancelar>
            <Salvar type="submit">Salvar</Salvar>
          </Botoes>
        </Form>
        {habits.length === 0 ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits.map((dado, i) => <Habito runEffect={runEffect} setRunEffect={setRunEffect} key={i} dado={dado} />)
        )}
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
  p {
    font-family: "Lexend Deca", sans-serif;
    font-size: 17.976px;
    color: #666666;
    margin-top: 30px;
  }
`;

const Title = styled.span`
  font-family: "Lexend Deca", sans-serif;
  line-height: 29px;
  color: #126ba5;
  font-size: 22.98px;
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
