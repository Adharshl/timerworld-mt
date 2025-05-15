import { Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import Home from "./pages/Home";

export function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}