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
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 p-0 m-0">
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
                <div
                  className="carousel-item active"
                  data-bs-interval="10000"
                  s
                >
                  <img
                    className="imgCarousel img-fluid"
                    src={glutenfree}
                    alt="..."
                  />

                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">
                      <b>SIN GLUTEN</b>
                    </h2>
                    <p>
                      El gluten es una proteína que se encuentra en el trigo, la
                      cebada, el centeno y el triticale (un cruzamiento entre el
                      trigo y el centeno).
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    className="imgCarousel img-fluid"
                    src={vegana}
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">
                      <b>VEGANAS</b>
                    </h2>
                    <p>
                      Potenciamos el consumo de vegetales, hortalizas, frutos y
                      semejantes.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="imgCarousel img-fluid"
                    src={lactosefree}
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">
                      <b>SIN LACTOSA</b>
                    </h2>
                    <p>
                      Descubre otras alternativas a la leche y conoce que
                      alimentos que son fuente de calcio.
                    </p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="imgCarousel img-fluid"
                    src={sugarfree}
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h2 className="title-all px-5">
                      <b>SIN AZÚCAR</b>
                    </h2>
                    <p>
                      Es posible sustituir el azúcar por otros productos
                      naturales y cocinar postres y dulces saludables.
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

      {/* categorias */}
      <div data-aos="fade-down" className="buttonsCategory container">
        <div className="row">
          <div className="col-12 my-2 d-flex flex-md-column flex-sm-column flex-lg-row justify-content-lg-center">
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

      {/* recipesgeneral */}
      <div data-aos="fade-right" className="container recetas">
        <div className="recipes d-flex justify-content-between">
          <h3 className="nuevasrecetas my-2">NUEVAS RECETAS</h3>
        </div>
        <RecipeList />
      </div>

      {/* canela */}
      <div data-aos="fade-down" className="container-fluid diverse p-0">
        <div className="gutternone row py-5">
          <div className="col-md-6 col-sm-12  textFooter d-flex justify-content-center align-items-center">
            <div className="canela p-5">
              <h1 className="title-footer pb-5">
                ¿Sabes de dónde viene la canela?
              </h1>
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
            </div>
          </div>
          <div className="col-md-6 col-sm-12  footerimg justify-content-center align-items-center pe-5">
            <img
              src="https://images.unsplash.com/photo-1554675427-1d637bdb5a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80"
              class="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* recipesfavlist */}
      <div data-aos="fade-left" className="container recetas2">
        <div className="recipes d-flex justify-content-between">
          <h3 className="recetaspopu my-2">RECETAS POPULARES</h3>
        </div>
        <RecipeFavList />
      </div>

      {/* okinawa */}
      <div data-aos="fade-down" className="container-fluid diverse2 p-0">
        <div className="gutternone row py-5">
          <div className="col-md-6 col-sm-12 col-lg-6 footerimg2 ps-5">
            <img
              src="https://images.unsplash.com/photo-1562547256-2c5ee93b60b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80nop"
              class="img-fluid"
            />
          </div>
          <div className="col-md-6 col-sm-12 col-lg-6 textFooter d-flex justify-content-center align-items-center">
            <div className="okinawa p-5">
              <h1 className="title2 pb-5">Okinawa, la isla de la longevidad</h1>
              <p>
                Okinawa es una isla en el sur de Japón que se ha dado a conocer
                por tener la esperanza de vida más elevada del mundo. Su
                alimentación fundamentada en productos de origen vegetal y pobre
                en ácidos grasos parece ser la clave de su longevidad. Sus
                habitantes practican la alimentación consciente, utilizan
                plantas y hierbas de la medicina tradicional china como la
                cúrcuma o la artemisa, y le dan un papel protagonista a los
                alimentos de origen vegetal. Los ultraprocesados, azúcares
                refinados o grasas trans no tienen cabida en esta dieta, una de
                las más interesantes del mundo para prevenir enfermedades, según
                numerosos estudios.
              </p>
              <p>
                Existen dos factores claves en la alimentación: qué comemos y
                cómo lo comemos. Aunque en nuestra cultura estamos acostumbrados
                a dar únicamente importancia a los alimentos en sí, el cómo
                ingerimos esos alimentos, también tiene una importante
                influencia en nuestra salud: la forma de prepararlos, el tiempo
                que nos tomamos en ingerirlos, incluso nuestro estado mental
                cuando realizamos dicha ingesta son importantes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* mailing list */}
      <div
        data-aos="flip-left"
        className="econtainer-fluid suscribirse text-center justify-content-center align-items-center pt-4"
      >
        <h2>¡únete a nosotros!</h2>
        <p>
          Suscríbete a nuestra mailing list y recibe las últimas novedades:
          nuevas recetas, historia de los alimentos, estilo de vida saludable...
        </p>
        <button className="suscribe">Suscríbete</button>
      </div>
    </>
  );
};
{
}
