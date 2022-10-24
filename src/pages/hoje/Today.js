import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../components/MyContext";
import HabitoDiario from "../../components/HabitoDiario";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Today() {
  const {
    dados,
    toggleEffect,
    todayHabits,
    setTodayHabits,
    completePercentage,
    setCheckHabits,
  } = useContext(MyContext);
  const dayjs = require("dayjs");
  const data = dayjs().format("DD/MM");
  const weekDay = dayjs().day();
  const [toggleLoading, setToggleLoading] = useState(false);

  useEffect(() => {
    setToggleLoading(true);
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: { Authorization: `Bearer ${dados.token}` },
      }
    );
    request.then((res) => {
      setTodayHabits(res.data);
      setCheckHabits(res.data.filter((habit) => habit.done));
      setToggleLoading(false);
    });
  }, [toggleEffect]);

  let semana = "";
  if (weekDay === 0) {
    semana = "Domingo";
  } else if (weekDay === 1) {
    semana = "Segunda-feira";
  } else if (weekDay === 2) {
    semana = "Terça-feira";
  } else if (weekDay === 3) {
    semana = "Quarta-feira";
  } else if (weekDay === 4) {
    semana = "Quinta-feira";
  } else if (weekDay === 5) {
    semana = "Sexta-feira";
  } else if (weekDay === 6) {
    semana = "Sábado";
  }

  return (
    <Container>
      <Header />
      {toggleLoading === false ? (
        <MyToday>
          <Top>
            <Title data-identifier="today-infos">
              {semana}, {data}
            </Title>
            {completePercentage !== 0 ? (
              <Concluido data-identifier="today-infos">
                {completePercentage}% dos hábitos concluídos!
              </Concluido>
            ) : (
              <NenhumConcluido data-identifier="today-infos">Nenhum hábito concluído ainda</NenhumConcluido>
            )}
          </Top>
          {todayHabits.lenght === 0 ? (
            <p>Você não tem tarefas hoje, vá jogar ;p</p>
          ) : (
            todayHabits.map((habit, i) => (
              <HabitoDiario key={i} weekDay={weekDay} habit={habit} />
            ))
          )}
        </MyToday>
      ) : (
        <ThreeDots
          height="45"
          width="70"
          radius="9"
          color="#52b6ff"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
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
  margin-bottom: 70px;
  background: #f2f2f2;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 28px;
`;

const MyToday = styled.div`
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
const Concluido = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 17.976px;
  color: #8fc549;
`;

const NenhumConcluido = styled.span`
  font-family: "Lexend Deca", sans-serif;
  font-size: 17.976px;
  color: #bababa;
`;
