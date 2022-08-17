import React, { useState, useEffect, useContext } from "react";

const CreateRecipe = () => {
    return (
        <div className="col-12 my-5">
            <form>
                <div className="form-group pt-3">
                    <label for="inputTitulo" className="title-all2 mb-2">Escribe un título</label>
                    <input
                        type="text"
                        className="form-control w-100"
                        id="inputTitulo"
                        placeholder="Título receta"
                    />
                </div>
                <div className="form-group pt-3">
                    <label for="inputTitulo" className="title-all2 mb-2">Sube una imagen</label>

                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                        <button className="button1 border" type="button" id="inputGroupFileAddon04">SUBIR</button>
                    </div>
                </div>

                <div className="form-group pt-3">
                    <label for="inputIngredients" className="title-all2 mb-2">¿Qué ingredientes lleva?</label>
                    <input
                        type="text"
                        className="form-control w-100"
                        id="inputIngredients"
                        placeholder="Ingredientes"
                    />
                </div>

                <div className="form-group pt-3">
                    <label for="inputTime" className="title-all2 mb-2">¿Cuánto tiempo tardas en cocinarlo?</label>
                    <input
                        type="text"
                        className="form-control w-100"
                        id="inputTime"
                        placeholder="Tiempo de cocinado"
                    />
                </div>
                <div className="input-group pt-3">
                    <label for="inputDescription" className="title-all2 mb-2">Describe los pasos de la receta</label>
                    <textarea
                        className="form-control w-100"
                        aria-label="With textarea"
                        placeholder="Escribe aqui tu receta"
                    ></textarea>
                </div>
                <div className="form-group pt-3">
                    <label for="exampleFormControlSelect1" className="title-all2 mb-2">Escoge una categoria</label>
                    <select
                        className="form-control"
                        id="categorySelect"
                        placeholder="Escoge una categoria"
                    >
                        <option>Vegano</option>
                        <option>Sin gluten</option>
                        <option>Sin lactosa</option>
                        <option>Sin azucar</option>
                    </select>
                </div>
            </form>
            <div className="button-newrecipe text-center pt-5">
                <button className="button1 border border-dark py-1">AÑADIR</button>
            </div>
        </div>
    );
};
export default CreateRecipe;
