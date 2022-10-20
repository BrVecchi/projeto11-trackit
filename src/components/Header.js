import styled from "styled-components";
import UserImg from "../assets/images/user.png"
import TextLogo from "../assets/images/textLogo.png"

export default function Header() {
  return (
    <Head>
      <Logo>
        <img src={TextLogo} alt="Logo text" />
      </Logo>
      <User>
        <img src={UserImg} alt="User image" />
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
    }
`