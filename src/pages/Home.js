import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import InputBox from "../components/InputBox";
import TranslatedWords from "../components/TranslatedWords";

export const Context = React.createContext();
const Home = () => {
  const [translatedWords, setTranslatedWords] = useState(
    localStorage.getItem("history") === null
      ? []
      : JSON.parse(localStorage.getItem("history"))
  );

  const Logo = ({ text }) => {
    return (
      <div className="logo-container">
        <Icon className="icon" icon={faPiggyBank} />
        <h2>{text}</h2>
      </div>
    );
  };

  return (
    <div className="page">
      <Logo text="latin translator" />

      <Context.Provider value={{ translatedWords, setTranslatedWords }}>
        <InputBox />
        <TranslatedWords max={6} />
      </Context.Provider>
      <div className="link-container">
        <Link className="history-link" to="/history" target="_blank">
          history
        </Link>
      </div>
    </div>
  );
};

export default Home;
