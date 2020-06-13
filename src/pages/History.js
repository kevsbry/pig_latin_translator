import React from "react";
import WordCard from "../components/WordCard";

const History = () => {
  const history = JSON.parse(window.localStorage.getItem("history"));

  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginRight: "auto",
          color: "var(--history-color)",
          textTransform: "uppercase",
        }}
      >
        {history !== null ? (
          <h1>history</h1>
        ) : (
          <h1>current history is empty!</h1>
        )}
      </div>
      <div className="history-container">
        {history !== null &&
          history.map((h, i) => (
            <WordCard
              key={i}
              word={h.word}
              translatedWord={h.translatedWord}
              date={h.date}
            />
          ))}
      </div>
    </div>
  );
};

export default History;
