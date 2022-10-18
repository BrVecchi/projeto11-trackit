import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Habits from "./pages/habits/Habits";
import Registration from "./pages/registration/Registration";
import Historic from "./pages/historic/Historic";
import ResetCSS from "./assets/styles/ResetCSS";
import GlobalStyle from "./assets/styles/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
    <ResetCSS/>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Registration/>} />
        <Route path="/habitos" element={<Habits/>} />
        <Route path="/historico" element={<Historic/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
