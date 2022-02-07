import "./App.css";
import NavBar from "./NavBar";
import Home from "./Components/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Contect from "./Components/Contect";
import Projects from "./Components/Projects";
import { auth } from "./firebase";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route exect path="/" element={<Home />} />
        <Route exect path="/Contact" element={<Contect/>}/>  
        <Route exect path="/Projects" element={<Projects/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
