import styled from "styled-components";
import Border from "../assets/images/Vector.png";
import Ball from "../assets/images/Ellipse 4.png";
import { useNavigate } from "react-router-dom";

export default function Bottom() {
  const navigate = useNavigate()
  function linkHabitos() {
    navigate("/habitos")
  }
  function linkHistorico() {
    navigate("/historico")
  }
  function linkHoje() {
    navigate("/hoje")
  }
  return (
    <Bot>
      <span onClick={linkHabitos}>Hábitos</span>
      <div onClick={linkHoje} >Hoje
      <Bord src={Border} alt="element border" />
      <BordBall1 src={Ball} alt="element border" />
      <BordBall2 src={Ball} alt="element border" />
      </div>
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
  div {
    color: #ffffff;
    background-color: #52b6ff;
    font-family: "Lexend Deca", sans-serif;
    font-size: 17.98px;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    text-align: center;
    line-height: 85px;
    margin-bottom: 60px;
    position: relative;
  }
`;

const Bord = styled.img`
    width: 80%;
    position: absolute;
    left: 15px;
    top: 4px
`

const BordBall1 = styled.img`
    position: absolute;
    left: 42px;
    top: 4px
`
const BordBall2 = styled.img`
    position: absolute;
    left: 14px;
    top: 66.7px
`