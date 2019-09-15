import React, { useState } from "react";
import NavBar from "./components/navbar/NavBar";
import GlobalStyle from "./styles/Global";

const links = ["link1", "link2", "link3", "link4"];

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <NavBar open={open} handleOpen={handleOpen} links={links}></NavBar>
      <GlobalStyle></GlobalStyle>
    </div>
  );
}

export default App;
