import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/HomeComponents/Home/Home";
import Header from "./pages/SharedComponents/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
