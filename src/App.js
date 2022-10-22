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
  return (
    <MyContext.Provider
      value={{ dados, setDados }}
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
