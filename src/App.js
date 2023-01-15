import React from "react";
import "./app.css";
import { Nav, Hero, About, Work, Footer } from "./componenets";
function App() {
  return (
    <>
      <div className="bg__gradient">
        <Nav />
        <Hero />
      </div>
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default App;
