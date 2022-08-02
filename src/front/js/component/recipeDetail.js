import React from "react";
import PropTypes from "prop-types";

const RecipeDetail = (props) => {
  return (
    <div className="row">
      <div className="col-6 d-flex justify-content-center align-items-center">
        <div className="card-detail">
          <div className="front">
            <img
              src={props.image}
              className="image-detail img-fluid mx-auto d-block"
              alt="..."
            />
          </div>
          <div className="back">
            <h3 className="text-light m-5 pt-2">The strawberry</h3>
            <p className="text-back m-5 pt-3">
              Strawberries are rich in colourful pigments which have a
              protective effect, these anthocyanidins are thought to have a
              number of potential health benefits, including prevention of
              inflammatory conditions and heart disease. Observational studies
              appear to link regular berry consumption with fewer heart-related
              deaths.
            </p>
          </div>
        </div>
      </div>

      <div className="description-detail col-6 p-2">
        <h2 className="title-detail">{props.name}</h2>
        <div className="star mt-3">
          <i className="fas fa-star"></i>
          <i className="fas fa-star ms-3"></i>
          <i className="fas fa-star ms-3"></i>
          <i className="fas fa-star ms-3"></i>
          <i className="fas fa-star ms-3"></i>
        </div>

        <div className="icons-description d-flex my-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4337/4337600.png"
            className="vegan"
          ></img>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3778/3778967.png"
            className="lactose-free ms-2"
          ></img>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4807/4807774.png"
            className="gluten-free ms-2"
          ></img>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1410/1410541.png"
            className="sugar-free ms-2"
          ></img>
        </div>
        <p className="card-text3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas
          vel sint commodi repudiandae consequuntur voluptatum laborum numquam
          blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.
          Veritatis obcaecati tenetur
          {props.description}
        </p>
      </div>
    </div>
  );
};

RecipeDetail.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  categories: PropTypes.string,
};
export default RecipeDetail;
