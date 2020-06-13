import React, { useContext, useRef } from "react";
import styles from "../styles/components.module.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../pages/Home";

const InputBox = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  const translateWord = () => {
    let word = inputRef.current.value;
    let translatedWord = "";
    const vowels = ["a", "e", "i", "o", "u"];

    if (word !== "") {
      let date = new Date();
      let currentDate = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;
      let currentTime = `@${date.getHours()}:${date.getMinutes()}`;

      //splitting words
      let tempWords = word.split(" ");
      let words = [];

      for (let i = 0; i < tempWords.length; i++) {
        words.push(tempWords[i]);
      }

      for (let j = 0; j < words.length; j++) {
        let isTranslated = false;
        for (let i = 0; i < vowels.length; i++) {
          if (words[j][0] === vowels[i]) {
            translatedWord += words[j] + "yay ";
            isTranslated = true;
          } else {
            if (i === vowels.length - 1 && isTranslated == false) {
              translatedWord +=
                words[j].substring(1, words[j].length) + words[j][0] + "ay ";
            }
          }
        }
      }

      context.setTranslatedWords((data) => {
        //store data on local storage
        window.localStorage.setItem(
          "history",
          JSON.stringify([
            {
              word: word,
              translatedWord: translatedWord,
              date: currentDate + " " + currentTime,
            },
            ...data,
          ])
        );

        //set state value
        return [
          {
            word: word,
            translatedWord: translatedWord,
            date: currentDate + " " + currentTime,
          },
          ...data,
        ];
      });

      inputRef.current.value = "";
    }
  };

  return (
    <div className={styles["input-box"]}>
      <input
        ref={inputRef}
        type="text"
        placeholder="translate words"
        onKeyDown={(e) => {
          if (e.keyCode === 13) translateWord();
        }}
      />
      <button onClick={translateWord}>
        <Icon className={styles["lang-icon"]} icon={faLanguage} />
      </button>
    </div>
  );
};

export default InputBox;
