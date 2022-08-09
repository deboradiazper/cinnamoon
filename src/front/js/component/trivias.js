import React from "react";

const Trivias = (props) => {
  return (
    <div>
      {props.trivias.map((trivia, index) => {
        return (
          <div key={index}>
            <div className="card-ingredient">
              <div class="row g-0">
                <div className="col-md-4">
                  <img src={trivia.image} className="card-img-top" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body ps-5">
                    <h5 className="name-trivia pt-2">
                      {props.ingredientName}:
                    </h5>
                    <p className="card-text pt-2">{trivia.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Trivias;
