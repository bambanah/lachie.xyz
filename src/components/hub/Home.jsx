import React from "react";
import "../styles.scss";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

export default function Home(props) {
  return (
    <div className="home-container">
      <Header />
      <div className="hero">
        <h1>Fancy text here</h1>
      </div>
      <Footer />
    </div>
  );
}
