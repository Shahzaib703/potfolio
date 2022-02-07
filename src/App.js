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
        <Route exect path="/potfolio/" element={<Home />} />
        <Route exect path="/potfolio/Contact" element={<Contect/>}/>  
        <Route exect path="/potfolio/Projects" element={<Projects/>}/>
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
