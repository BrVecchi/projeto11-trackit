import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useContext } from "react";
import MyContext from "./MyContext";
import { BsFileX } from "react-icons/bs";

export default function Bottom() {
  const { completePercentage } = useContext(MyContext);
  const navigate = useNavigate();
  function linkHabitos() {
    navigate("/habitos");
  }
  function linkHistorico() {
    navigate("/historico");
  }
  function linkHoje() {
    navigate("/hoje");
  }
  return (
    <Bot>
      <span onClick={linkHabitos}>Hábitos</span>
      <Borda onClick={linkHoje}>
        <CircularProgressbar
          value={completePercentage}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52b6ff",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </Borda>
      <span onClick={linkHistorico}>Histórico</span>
    </Bot>
  );
}

const Bot = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px 10px 30px;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  span {
    color: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
    font-size: 17.98px;
    text-align: center;
  }
`;

const Borda = styled.div`
  color: #ffffff;
  font-family: "Lexend Deca", sans-serif;
  width: 91px;
  margin-bottom: 60px;
  position: relative;
  text {
    font-size: 18px;
    position: absolute;
    transform: translate(-18%, 4%);
  }
`;
