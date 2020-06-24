import React from "react";

const Error = (props) => {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <h2>Erreur</h2>
          <p>Sacrebleu big mistake !!</p>
          {props.location.state.error}
        </div>
      </div>
    </main>
  );
};

export default Error;
