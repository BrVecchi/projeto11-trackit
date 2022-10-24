import styled from "styled-components";
import TextLogo from "../assets/images/textLogo.png"
import { useContext } from "react";
import MyContext from "./MyContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { dados } = useContext(MyContext)
  const navigate = useNavigate()

  function goHome(e) {
    e.preventDefault()
    navigate("/")
  }
  return (
    <Head>
      <Logo onClick={goHome}>
        <img src={TextLogo} alt="Logo text" />
      </Logo>
      <User data-identifier="avatar">
        <img src={dados.image} alt="User" />
      </User>
    </Head>
  );
}

const Head = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 18px 10px 18px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
    width: 97px;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
`

const User = styled.div`
    width: 51px;
    height: auto;
    img {
      width: 100%;
      height: auto;
      border-radius: 98.5px;
      width: 51px;
      height: 51px;
    }
`