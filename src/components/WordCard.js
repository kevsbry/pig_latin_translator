import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/components.module.css";

const WordCard = ({ word, translatedWord, date }) => {
  return (
    <div className={styles["word-card"]}>
      <div className={styles["word-container"]}>
        <span>{date}</span>
        <h2>{word}</h2>
      </div>
      <Icon className={styles["arrow-icon"]} icon={faArrowRight} />
      <div className={styles["translatedWord-container"]}>
        <h2>{translatedWord}</h2>
      </div>
    </div>
  );
};

export default WordCard;
