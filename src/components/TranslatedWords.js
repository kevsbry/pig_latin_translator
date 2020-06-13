import React, { useContext } from "react";
import styles from "../styles/components.module.css";
import { Context } from "../pages/Home";
import WordCard from "./WordCard";

const TranslatedWords = ({ max }) => {
  const context = useContext(Context);

  return (
    <div className={styles["translated-words"]}>
      {context.translatedWords &&
        context.translatedWords.map(
          (w, i) =>
            max !== null &&
            i < max && (
              <WordCard
                key={i}
                word={w.word}
                translatedWord={w.translatedWord}
                date={w.date}
              />
            )
        )}
    </div>
  );
};

export default TranslatedWords;
