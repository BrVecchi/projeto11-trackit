import styled from "styled-components";
import { useContext } from "react";
import MyContext from "./MyContext";
import { BsCheckLg } from "react-icons/bs";
import axios from "axios";

export default function HabitoDiario({ habit }) {
  const { dados, toggleEffect, setToggleEffect } = useContext(MyContext);
  const name = habit.name;
  const token = dados.token;

  function check() {
    const toggle = habit.done === false ? "check" : "uncheck";
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${toggle}`;
    axios
      .post(
        URL,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        const newToggleEffect = !toggleEffect
        setToggleEffect(newToggleEffect);
      });
  }

  return (
    <Container data-identifier="today-infos">
      <Right>
        <Top>
          <Nome>{name}</Nome>
        </Top>
        <Text>
          <Sequence>
            Sequencia atual:{" "}
            {habit.done === true ? (
              <TextSequenceGreen>{habit.currentSequence}</TextSequenceGreen>
            ) : (
              <TextSequenceNormal>{habit.currentSequence}</TextSequenceNormal>
            )}
          </Sequence>
          <Record>
            Seu record: <span>{habit.highestSequence} dias</span>
          </Record>
        </Text>
      </Right>
      {habit.done === true ? (
        <Left background="#8FC549">
          <button onClick={check}>
            <BsCheckLg size="35px" color="#ffffff" />
          </button>
        </Left>
      ) : (
        <Left background="#EBEBEB">
          <button data-identifier="done-habit-btn" onClick={check}>
            <BsCheckLg size="35px" color="#ffffff" />
          </button>
        </Left>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Sequence = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 12.976px;
  color: #666666;
`;

const TextSequenceNormal = styled.span`
  color: #666666;
`;

const TextSequenceGreen = styled.span`
  color: #8fc549;
`;

const Record = styled.div`
  font-family: "Lexend Deca", sans-serif;
  font-size: 12.976px;
  color: #666666;
  span {
    color: #666666;
  }
`;

const Right = styled.div``;

const Left = styled.div`
  height: 69px;
  min-width: 69px;
  align-content: center;
  margin-left: 10px;
  button {
    height: 100%;
    width: 100%;
    background: ${(props) => props.background};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    align-content: center;
  }
`;
