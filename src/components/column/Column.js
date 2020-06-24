import React from "react";
import Card from "./card/Cards.js";

const Column = (props) => {
  return (
    <section className="col">
      <p>{props.index}</p>
      <div className="d-flex align-items-start">
        <button
          onClick={(event) => {
            props.onClickAddCard(event, props.index);
          }}
          className="btn btn-success mr-2"
        >
          +
        </button>
        <h2>{props.column.name}</h2>
      </div>
      {props.column.cartes.map((card, id) => (
        <Card key={(card, id)} card={card} />
      ))}
    </section>
  );
};

export default Column;
