import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import styled from "styled-components";

export default function Historic() {
  return (
    <Container>
      <Header />
      <MyHistoric>
        <Top>
          <span>Meu histórico</span>
        </Top>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </MyHistoric>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 28px;
`;

const MyHistoric = styled.div`
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
  p {    font-family: "Lexend Deca", sans-serif;
    font-size: 17.976px;
    color: #666666;
    margin-top: 30px;
  }
`;
