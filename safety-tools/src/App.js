import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Components/User/Login/Login";
import Register from "./pages/Components/User/Register/Register";
import Header from "./pages/SharedComponents/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
