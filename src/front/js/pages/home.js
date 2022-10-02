import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import RecipeList from "../component/recipeList.js";
import RecipeFavList from "../component/recipeFavList.js";
import { Link, useNavigate } from "react-router-dom";
import glutenfree from "../../img/glutenfree.png";
import lactosefree from "../../img/lactosefree.png";
import sugarfree from "../../img/sugarfree.png";
import vegana from "../../img/vegana.png";
import cinnamoon from "../../img/cinnamoon.png";
import okinawa from "../../img/okinawa.png";
import canela from "../../img/canela.png";
import verde from "../../img/verde.png";
import valores from "../../img/valores.png";
import comunidad from "../../img/comunidad.png";
import somosque from "../../img/somosque.png";

import Aos from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      {/* carrousel */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide  d-none d-sm-block"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
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

        {/* sugarfree */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sugarfree} class="d-block w-100" />
            <div className="carousel-caption d-none d-sm-block">
              <h5 className="carousel-titulos">Sin azúcar</h5>
              <p className="carousel-texto">
                Es posible endulzar tus platos con alimentos que contengan
                azúcar de manera natural en su composición. Prueba con manzana,
                plátano, melocotón, mango, pasas, orejones, dátiles, calabaza,
                zanahoria o edulcorantes naturales como la estevia, el xilitol o
                la miel.{" "}
              </p>
            </div>
          </div>
          {/* vegan */}
          <div className="carousel-item">
            <img src={vegana} class="d-block w-100" />
            <div className="carousel-caption d-none d-sm-block">
              <h5 className="carousel-titulos">Vegano</h5>
              <p className="carousel-texto">
                Para que una dieta vegana sea equilibrada es importante incluir
                proteinas de origen vegetal como las algas, las legumbres, los
                cereales, los hongos o setas, los frutos secos y las semillas.{" "}
              </p>
            </div>
          </div>
          {/* {glutenfree} */}
          <div className="carousel-item">
            <img src={glutenfree} class="d-block w-100" />
            <div className="carousel-caption d-none d-sm-block">
              <h5 className="carousel-titulos">Sin gluten</h5>
              <p className="carousel-texto">
                El arroz, el trigo sarraceno, el teff, el amaranto, el maiz o el
                mijo son cereales que no contienen gluten, una proteina
                potencialmente inflamaroria que se encuentra en el trigo, la
                cebada, el centeno y el triticale.{" "}
              </p>
            </div>
          </div>

          {/* {sin lactosa} */}
          <div className="carousel-item">
            <img src={lactosefree} class="d-block w-100" />
            <div className="carousel-caption d-none d-sm-block">
              <h5 className="carousel-titulos">Sin lactosa</h5>
              <p className="carousel-texto">
                No consumir leche animal no es sinónimo de una dieta pobre en
                calcio siempre y cuando tomes otros alimentos que contengan este
                nutriente. El brócoli, la coliflor, la col, el kale, los
                garbanzos, las alubias, las almendras, las semillas de sésamo,
                etc son buenso ejemplos de ello.{" "}
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
            className="carousel-control-prev-icon d-none d-sm-block"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next d-none d-sm-block"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon d-none d-sm-block"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* categorias */}
      <div data-aos="fade-down" className="container buttonsCategory">
        <div className="row pb-4">
          {store.categories.map((category) => {
            return (
              <div className="col-12 col-lg-3 col-md-3 col-sm-3 text-center">
                <Link
                  to={`/recipeAll/${category.name}`}
                  className="ctaCategory"
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
      {/* buscador */}
      <div
        data-aos="fade-down"
        className="busca container-fluid justify-content-center"
        style={{ minHeight: "100px", width: "100%" }}
      >
        <form
          onSubmit={handleSubmit}
          className="formBusca d-flex justify-content-center"
        >
          <div className="input-group w-75">
            <input
              onChange={handleChange}
              type="text"
              className="searchIngredients form-control"
              placeholder="  "
            />
          </div>
        </form>
      </div>

      {/* texto bienvenida */}
      <div data-aos="fade-left" className="container hola1 mb-5 text-center">
        <img src={cinnamoon} className="mb-4"></img>
        <h4 className="textocentral mx-4">
          queremos llevar la cocina, la alimentación y un estilo de vida
          consciente a la mayor cantidad de personas, para conseguir que sean
          más felices y que estén bien consigo mismas y con su entorno.
          Arrancamos con la visión de crear una nueva forma de construir
          bienestar, empezando por la comida y la preparación de los alimentos,
          nutriendo la vida sin culpas y con el balance como camino. Te damos la
          bienvenida a Cinnamoon, una nueva forma de estar bien. Damos prioridad
          a la alimentación saludable y alternativa.
        </h4>
        <h4 className="textocentral my-4 mx-4">
          También tenemos en cuenta aquellas personas que deben restringir su
          dieta, como celíacos o diabéticos.
        </h4>
      </div>

      {/* recipesgeneral */}
      <div
        data-aos="fade-right"
        className="container recetas align-items-center  ps-5"
      >
        <div className="recipes d-flex justify-content-between">
          <h3 className="nuevasrecetas ">NUEVAS RECETAS</h3>
        </div>
        <RecipeList />
      </div>

      {/* carrousel central con txto*/}
      <div
        id="carouselExampleCaptions"
        className="carousel slide my-5 d-none d-sm-block"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* okinawa */}
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={okinawa} class="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-lg-6 col-sm-none">
                  <h5 className="carousel-titulos2 align-content-center">
                    Okinawa, la isla de la longevidad
                  </h5>
                </div>
                <div className="col-lg-6 col-sm-none">
                  <p className="carousel-texto2 justify-content-center">
                    Okinawa es una isla en el sur de Japón que se ha dado a
                    conocer por tener la esperanza de vida más elevada del
                    mundo. Su alimentación fundamentada en productos de origen
                    vegetal y pobre en ácidos grasos parece ser la clave de su
                    longevidad. Sus habitantes practican la alimentación
                    consciente, utilizan plantas y hierbas de la medicina
                    tradicional china como la cúrcuma o la artemisa, y le dan un
                    papel protagonista a los alimentos de origen vegetal. Los
                    ultraprocesados, azúcares refinados o grasas trans no tienen
                    cabida en esta dieta, una de las más interesantes del mundo
                    para prevenir enfermedades, según numerosos estudios.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* canela */}
          <div class="carousel-item">
            <img src={canela} class="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="carousel-titulos2">
                ¿Sabes de dónde viene la canela?
              </h5>
              <p className="carousel-texto2-canela">
                La canela se obtiene de la corteza de los árboles Cinnamomum, y
                su uso culinario se remonta a siglos atrás, especialmente en
                India. Se utiliza principalmente para aromatizar diversos platos
                culinarios y también para preparar té, su sabor es dulce y
                exótico. Su origen está en China y procede de un árbol del que
                se aprovecha la corteza interna obtenida pelando y frotando las
                ramas. Se cultiva en muchas zonas de Asia y es una especia que
                se emplea en gran parte de cocinas del mundo, con reconocidos
                beneficios para la salud.
              </p>
              <p className="carousel-texto2-canela">
                {" "}
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
                la sensibilidad.{" "}
              </p>
            </div>
          </div>

          {/* {verde} */}
          <div className="carousel-item">
            <img src={verde} class="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <div className="row">
                <div className="col-lg-6 col-sm-none"></div>
                <div className="col-lg-6 col-sm-none">
                  {" "}
                  <h5 className="carousel-titulos2">Verde</h5>
                  <p className="carousel-texto2">
                    Los alimentos de color verde se componen normalmente de
                    frutas y verduras. Estos son fuente de muchas propiedades
                    con beneficios para la salud. Expertos en salud recomiendan
                    ampliamente su consumo para mantener, no sólo una buena
                    salud y evitar diversas enfermedades, sino para mantener un
                    buen peso y talla. Estos alimentos deben su color gracias a
                    la presencia de la clorofila. Esto indica que aportan muy
                    pocas calorías y tienen un gran valor alimentario por su
                    riqueza en vitaminas A, C, complejo B, E y K. También
                    cuentan con minerales como el calcio, hierro, magnesio y
                    potasio, además de ser una fuente abundante de fibra.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* recipesfavlist */}
      <div data-aos="fade-left" className="container recetas2  ps-5">
        <div className="recipes d-flex justify-content-between">
          <h3 className="recetaspopu my-2">RECETAS POPULARES</h3>
        </div>
        <RecipeFavList />
      </div>

      <div className="container-fluid final mt-5">
        <div className="row pt-2" id="final" width="100%" height="350">
          <div className="sobrenosotros col-md-4 my-4 text-center p-3">
            <img className="imagenfooter" src={valores}></img>
            <h5 className="px-2 mt-2 titulofooter">NUESTROS VALORES</h5>
            <p className="footertext px-2 py-2">
              En CINNAMOON somos partidarios de la inclusividad. Es por eso que
              contamos con recetas para todas aquellas personas que, por una
              cuestión personal o de salud, han renunciado a comer ciertos
              alimentos. Partimos siempre de una base vegetal.
            </p>
          </div>
          <div className="sobrenosotros col-md-4 my-4 text-center p-3">
            <img className="imagenfooter" src={somosque}></img>
            <h5 className="px-2 mt-2 titulofooter">SOMOS LO QUE COMEMOS</h5>
            <p className="footertext px-2 py-2">
              Tan importante es alimentarse bien como hacerlo de forma
              consciente. Es por eso que nos gusta aportar información acerca de
              los ingredientes que utilizamos para las recetas. Como cocinar nos
              apasiona, también nos apasiona la historia de los ingredientes.
            </p>
          </div>
          <div className="sobrenosotros col-md-4 my-4 text-center p-3">
            <img className="imagenfooter" src={comunidad}></img>
            <h5 className="px-2 mt-2 titulofooter">CRECER EN COMUNIDAD</h5>
            <p className="footertext px-2 py-2">
              No queremos ser únicamente una página web de recetas. Nuestro
              objetivo es crear una comunidad en la que cualquier persona afín a
              nuestros valores pueda aportar su granito de arena. Compartir es
              vivir.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
{
}
