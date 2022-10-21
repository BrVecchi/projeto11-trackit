import Header from "../../components/Header";
import Bottom from "../../components/Bottom";
import styled from "styled-components";

export default function Today() {
  return (
    <Container>
      <Header />
      <MyToday>
        <Top>
          <span>Meus ToDos de hoje</span>
        </Top>
        <p>Você não tem tarefas hoje, vá jogar ;p</p>
      </MyToday>
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

const MyToday = styled.div`
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
