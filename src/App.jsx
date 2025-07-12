import React from "react";
import "./App.css";
import Navbar from "./componets/Navbar.jsx";
import Manager from "./componets/Manager.jsx";
import Footer from "./componets/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
        <div className="bg-[#FEFAE0] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

       <Manager/> 
        </div>

      <Footer />
    </>
  );
}

export default App;
