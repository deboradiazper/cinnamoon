import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RecipeList from "../component/recipeList.js";
import RecipeFavList from "../component/recipeFavList.js";
import { Link, useNavigate } from "react-router-dom";
import glutenfree from "../../img/glutenfree.png";
import lactosefree from "../../img/lactosefree.png";
import sugarfree from "../../img/sugarfree.png";
import vegana from "../../img/vegana.png";
import footerimg from "../../img/footerimg.png";
import footerimg2 from "../../img/footerimg2.png";
import firma from "../../img/firma.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.setSearch(search);
    navigate("/searchApp");
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="container-fluid p-0" style={{ minHeight: "200px" }}>
        <div className="row" style={{ height: '90%' }}>
          <div className="col-12" style={{ height: '90%' }}>
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={glutenfree} className="w-100" alt="..." />

                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">SIN GLUTEN</h2>
                    <p>
                      Crea tus platos preferidos con otros ingredientes,
                      consiguiendo resultados increibles.
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img className="w-100" src={vegana} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">VEGANAS</h2>
                    <p>Cocina con vegetales y crea sabores exquisitos.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className=" w-100" src={lactosefree} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">SIN LACTOSA</h2>
                    <p>
                      Descubre otras alternativas a la leche y conoce que
                      alimentos que son fuente de calcio.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className=" w-100" src={sugarfree} alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">SIN AZUCAR</h2>
                    <p>
                      Descubre como sustituir azúcar por otros productos
                      naturales y cocina postres y dulces saludables.
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="buttonsCategory container">
        <div className="col-12 my-5 d-flex flex-md-column flex-sm-column flex-lg-row justify-content-lg-center">
          {store.categories.map((category) => {
            return (
              <div className="align-self-md-center">
                <Link
                  to={`/recipeAll/${category.name}`}
                  className="ctaCategory pe-5"
                >
                  <span className="hover-underline-animation">
                    {category.name}
                  </span>
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(40)"
                  ></path>
                </Link>
              </div>
            );
          })}
        </div>
      </div>


      <div className="busca container-fluid p-0" style={{ minHeight: "250px", width: "100%" }}>
        <h3 className="px-lg-5 px-sm-5 pt-4 text-center">¿Qué ingredientes tienes a mano?</h3>
        <form onSubmit={handleSubmit} className="formBusca d-flex justify-content-center">
          <div className="input-group pb-2 mt-5 px-lg-5 px-sm-5 w-75">
            <input
              onChange={handleChange}
              type="text"
              className="searchIngredients form-control"
              placeholder="¿Qué ingredientes tienes a mano?"
            />
            <button className="botonreceta bg-white">
              <i className="fas fa-search text-muted"></i>
            </button>
          </div>
        </form>
      </div>

      <div className="container recetas">
        <div className="recipes d-flex justify-content-between">
          <h3>NUEVAS RECETAS</h3>
        </div>
        <RecipeList />
      </div>





      <div className="container-fluid">
        <div className="row mt-5">
          <div
            className="diverse col-12 col-md-4 mt-5 pt-2 px-0  d-flex justify-content-lg-around align-items-lg-center
 flex-lg-row flex-md-column flex-sm-column"
            style={{ minHeight: "400px", width: "100%" }}
          >
            <div
              className="textFooter mt-5"
              style={{ minHeight: "400px", width: "50%" }}
            >
              <h4 className="title-footer mb-5">
                ¿Sabes de dónde viene la canela?
              </h4>
              <p>
                Aporta un aroma y un sabor muy reconocibles a multitud de
                platos. Pero, ¿sabes de dónde viene exactamente la canela? Esta
                especia la encontramos en forma de rama o en polvo. Su origen
                está en China y procede de un árbol del que se aprovecha la
                corteza interna obtenida pelando y frotando las ramas. Se
                cultiva en muchas zonas de Asia y es una especia que se emplea
                en gran parte de cocinas del mundo, con reconocidos beneficios
                para la salud.
              </p>
              <p>
                En la composición de la canela destacan vitamina C, vitamina B1,
                hierro, potasio, calcio y fósforo y son conocidos desde tiempos
                inmemoriales sus beneficios saludables. Se le atribuyen las
                siguientes propiedades: ayuda a controlar la diabetes, puede
                reducir la presión arterial, mejora los trastornos digestivos y
                el ánimo, disminuye el cansancio, combate infecciones
                respiratorias, tiene efecto saciante, contribuye a reducir la
                acumulación de grasa y ayuda a controlar el colesterol. También
                habrás oido hablar de su poder afrodisiaco y esto es debido a
                que mejora la circulación de la sangre y contribuye a aumentar
                la sensibilidad.
              </p>
              {/* <ul className="text-footer">
                <li>
                  El <b>calcio que mejor se absorbes</b> no es el de los lácteo,
                  sino el de las algas.
                </li>
                <li>
                  <b>Eliminar el gluten</b>de tu dieta mejora tu salud
                  intestinal.
                </li>
                <li>
                  Es posible <b>endulzar tus platos</b> con alimentos que tienen
                  azúcar en su composición
                </li>
                <li>
                  Una alimentación <b>vegana</b> puede ser rica en proteínas de
                  origen vegetal.
                </li>
              </ul>
              <img
                src={firma.png}
                className="firma"
                width="50vw"
                height="auto"
              />
            </div>
            <div className="footerimg d-flex align-items-center">
              <img
                src={footerimg}
                className="img-footer"
                alt="img-footer"
                width="280 vw"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="recipes d-flex justify-content-between my-5">
          <h3 className="mt-5">RECETAS POPULARES</h3>
        </div>

        <RecipeFavList />
      </div>


      <div className="container-fluid p-0">
        <div className="row">
          {/* <div
            className="imgfooter2 col-md-6 p-0 position-relative"
            style={{ minHeight: "350px" }}
          > */}

          {/* </div> */}
          <div
            className="diverse2 col-12 col-md-4 mt-5 pt-2 px-0  d-flex justify-content-lg-around align-items-lg-center
            flex-lg-row flex-md-column flex-sm-column"
            style={{ minHeight: "400px", width: "100%" }}
          >
            <div className="footerimg2 d-flex align-items-center">
              <img
                src={footerimg2}
                className="img-footer"
                alt="img-footer"
                width="280 vw"
                height="auto"
              />
            </div>
            <div
              className="textFooter text-center flex-column d-flex align-items-center"
              style={{ minHeight: "400px", width: "50%" }}
            >
              <h4 className="pt-4">Okinawa, la isla de la longevidad</h4>
              <p className="py-2">
                <b>Okinawa</b> es una isla en el sur de Japón que se ha dado a
                conocer por tener la esperanza de vida más elevada del mundo. Su
                alimentación fundamentada en <b>productos de origen vegetal</b>y
                pobre en ácidos grasos parece ser la clave de su
                <b>longevidad</b>. Sus habitantes practican la alimentación
                consciente, utilizan plantas y hierbas de la medicina
                tradicional china como la cúrcuma o la artemisa, y le dan un
                papel protagonista a los alimentos de origen vegetal. Los
                ultraprocesados, azúcares refinados o grasas trans no tienen
                cabida en esta dieta, una de las más interesantes del mundo para
                prevenir enfermedades, según numerosos estudios.
              </p>
            </div>
          </div>
        </div>
        <div
          className="diverse3 text-center"
          id="diverse3"
          width="100%"
          height="350"
        >
          <div className="row d-flex justify-content-around">
            <div className="box">
              {/* <div className="slogan ">
                <img
                  src={slogan1}
                  className="slogan1"
                  alt="slogan1"
                  width="100"
                  height="100"
                />
              </div> */}
              <div class="box__body mt-">
                <h3>NUESTROS VALORES</h3>
              </div>
              <p className="text-3 text-center">
                En CINNAMOON contamos con recetas para todas aquellas personas
                que, por una cuestión personal o de salud, han renunciado a
                comer ciertos alimentos. Partimos de una base vegetal y contamos
                con un amplio banco de recetas sin gluten, sin lactosa y sin
                azúcar. Nuestra intención es que haya muchas más.
              </p>
            </div>
            <div className="textAboutus col-md-3 my-4 text-center p-3">
              <h5 className="px-2 mt-2">SOMOS LO QUE COMEMOS</h5>
              <p className="px-2 py-2">
                Tan importante es alimentarse bien como hacerlo de forma
                consciente. Es por eso que nos gusta aportar información acerca
                de los ingredientes que utilizamos para las recetas. Como
                cocinar nos apasiona, también nos apasiona la historia de los
                ingredientes.
              </p>
            </div>
            <div className="textAboutus col-md-3 my-4 text-center p-3">
              <h5 className="px-2 mt-2">CRECER EN COMUNIDAD</h5>
              <p className="px-2 py-2">
                No queremos ser únicamente una página web de recetas. Nuestro
                objetivo es crear una comunidad en la que cualquier persona afín
                a nuestros valores pueda aportar su granito de arena.
                Construimos CINNAMOON entre tod@s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
{/* <div className="container-fluid">
        <div className="row mt-5">
          <div
            className="diverse col-12 col-md-4 text-center pt-2 d-flex justify-content-around align-items-center"
            style={{ minHeight: "400px", width: "100%" }}
          >
            <div
              className="textFooter mt-5"
              style={{ minHeight: "400px", width: "50%" }}
            >
              <h4 className="title-footer mt-5">RECETAS PARA TODOS</h4>
              <ul className="text-footer">
                <li>
                  El <b>calcio que mejor se absorbes</b> no es el de los lácteo,
                  sino el de las algas.
                </li>
                <li>
                  <b>Eliminar el gluten</b>de tu dieta mejora tu salud
                  intestinal.
                </li>
                <li>
                  Es posible <b>endulzar tus platos</b> con alimentos que tienen
                  azúcar en su composición
                </li>
                <li>
                  Una alimentación <b>vegana</b> puede ser rica en proteínas de
                  origen vegetal.
                </li>
              </ul>
            </div>
            <div className="footerimg">
              <img
                src={footerimg}
                className="img-footer"
                alt="img-footer"
                width="280 vw"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div> */}
