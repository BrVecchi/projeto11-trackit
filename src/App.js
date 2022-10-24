import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Habits from "./pages/habits/Habits";
import Registration from "./pages/registration/Registration";
import Historic from "./pages/historic/Historic";
import ResetCSS from "./assets/styles/ResetCSS";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Today from "./pages/hoje/Today";
import { useState } from "react";
import MyContext from "./components/MyContext";
import { ModalProvider } from "react-modal-hook";
function App() {
  const [dados, setDados] = useState({});
  const [habits, setHabits] = useState([]);
  const [toggleEffect, setToggleEffect] = useState([])
  const [todayHabits, setTodayHabits] = useState([])
  const [checkHabits, setCheckHabits] = useState([]);

  const completePercentage = parseInt(
    (checkHabits.length / todayHabits.length) * 100
  );
  const DIAS = [
    { name: "D", day: 0 },
    { name: "S", day: 1 },
    { name: "T", day: 2 },
    { name: "Q", day: 3 },
    { name: "Q", day: 4 },
    { name: "S", day: 5 },
    { name: "S", day: 6 },
  ];
  return (
    <MyContext.Provider
      value={{ dados, setDados, habits, setHabits, DIAS, toggleEffect, setToggleEffect, todayHabits, setTodayHabits, completePercentage, checkHabits, setCheckHabits }}
    >
      <ModalProvider>
      <BrowserRouter>
        <ResetCSS />
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Registration />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </BrowserRouter>
      </ModalProvider>
    </MyContext.Provider>
  );
}

export default App;
