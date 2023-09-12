import { useState } from "react";
import "./App.css";
import Chief from "./assets/masterchief.png";
import LinkedIn from "./assets/linkedin (3).svg"

function App() {
  return (
    <>
      <header>
        <img src={Chief} className="" height="200px" />
      </header>
      <main>
        <div className="PersonalInfo">
          <h2>Master Chief</h2>
          <h4>Savior of human kind</h4>
          <p>MasterChief@SaveTheWorld.com</p>
        </div>
        <div className="MainBtns">
          <button className="EmailBtn">✉ Email</button>
          <button className="LinkedInBtn">
            <img src={LinkedIn} width="20" height="20" />
            LinkedIn
          </button>
        </div>
        <div className="AboutInt">
          <h3>About</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            magnam accusamus veniam ut, nostrum excepturi error! Neque,
            similique quo.
          </p>
          <h3>Interests</h3>
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            perspiciatis unde exercitationem rerum voluptatem natus illum.
          </p>
        </div>
      </main>
      <footer>
        <img />
        <img />
        <img />
      </footer>
    </>
  );
}

export default App;
