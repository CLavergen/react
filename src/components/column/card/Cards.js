import React from "react";

const Cards = (props) => {
  return (
    <article className="card m-3 p-3 bg-secondary text-white shadow">
      <h3>{props.card.question}</h3>
      <h4>{props.card.answer}</h4>
    </article>
  );
};

export default Cards;
