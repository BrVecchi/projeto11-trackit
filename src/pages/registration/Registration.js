import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/Logo.png";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  console.log(email)
  

  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    const request = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      {
        email: email,
        name: name,
        image: photo,
        password: password
      }
    )
    request.then(() => {
      alert("Conta registrada com sucesso!")
      navigate("/")})
    request.catch(() => {
      alert("Algo foi digitado incorretamente, tente novamente..")
      setEmail("")
      setName("")
      setPassword("")
      setPhoto("")
    })
  }
  return (
    <Container>
      <Image>
        <img src={Logo} alt="Logo TrackIt" />
      </Image>
      <Form onSubmit={signUp}>
        <input
          required
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder=" digite seu melhor email.."
          type="email"
        />
        <input
          required
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder=" crie uma senha.."
          type="password"
        />
        <input
          required
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder=" digite seu nome.."
          type="text"
        />
        <input
          required
          id="photo"
          name="photo"
          value={photo}
          onChange={(event) => setPhoto(event.target.value)}
          placeholder=" escolha sua foto de perfil.."
          type="url"
        />
        <button type="submit">Entrar</button>
      </Form>
      <Link color="#52B6FF" to="/">
        Já tem uma conta? Faça loggin!
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 180px;
  img {
    width: 100%;
  }
`;
