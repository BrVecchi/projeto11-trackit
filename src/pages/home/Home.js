import axios from "axios";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";
import MyContext from "../../components/MyContext";

export default function Home() {
  const { setDados } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [toggleLoading, setToggleLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function signIn(event) {
    setToggleLoading(true);
    setDisabled(true);
    event.preventDefault();
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      {
        email: email,
        password: password,
      }
    );
    request.then((res) => {
      setDados(res.data);
      navigate("/habitos");
      setToggleLoading(false);
      setDisabled(false);
    });
    request.catch(() => {
      alert("Esses dados de loggin não são compatíveis, tente novamente..");
      setEmail("");
      setPassword("");
      setToggleLoading(false);
      setDisabled(false);
    });
  }

  return (
    <Container>
      <Image>
        <img src={Logo} alt="Logo TrackIt" />
      </Image>
      <Form onSubmit={signIn}>
        <input
          data-identifier="input-email"
          required
          disabled={disabled}
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder=" digite seu email.."
          type="email"
        />
        <input
          data-identifier="input-password"
          required
          disabled={disabled}
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder=" digite sua senha.."
          type="password"
        />
        {toggleLoading === false ? (
          <button data-identifier="login-btn" disabled={disabled} type="submit">
            Entrar
          </button>
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
      </Form>
      <Link data-identifier="sign-up-action" color="#52B6FF" to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  a {
    font-family: "Lexend Deca", sans-serif;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 25px;
    color: #52b6ff;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  input {
    width: 90%;
    height: 45px;
    margin-bottom: 6px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca", sans-serif;
    font-size: 19.976px;
    color: #666666;

    &::placeholder {
      color: #dbdbdb;
      font-family: "Lexend Deca", sans-serif;
      font-size: 19.976px;
      line-height: 25px;
    }
  }
  button {
    width: 90%;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.6px;
    color: white;
    border: 1px solid #52b6ff;
    font-family: "Lexend Deca", sans-serif;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
  }
`;

const Image = styled.div`
  width: 220px;
  img {
    width: 100%;
  }
`;
