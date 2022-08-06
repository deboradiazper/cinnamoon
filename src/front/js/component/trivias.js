import React from "react";

const Trivias = (props) => {
  return (
    <div>
      {props.trivias.map((trivia, index) => {
        return (
          <div key={index}>
            <div className="card">
              <img src={trivia.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.ingredientName}</h5>
                <p className="card-text">{trivia.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trivias;
