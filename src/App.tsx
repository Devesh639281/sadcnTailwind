// import { useState } from "react"
// import { Button } from "@/components/ui/button"
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
// import AccordionEx from "./pages/AccordionEx";
import Calenderr from "./pages/Calenderr";
import Layout from "./pages/sidebarOfProject/Layout";

function App() {
  // const[show,setShow]=useState(true);
  //  const handleShow=()=>{
  // setShow(!show);
  //  }

  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-svh">
        <h1>{show?"Hi":"Hello"}</h1>
      <Button onClick={handleShow}>Click me</Button>
    </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calenderr />} />
      </Routes>
      {/* <AccordionEx />  */}
      <Layout />
    </>
  );
}

export default App;
