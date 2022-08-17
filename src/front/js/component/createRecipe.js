import React, { useState, useEffect, useContext } from "react";


const CreateRecipe = () => {

    return (
        <div className="col-12">
            <form>
                <div className="form-group pt-5">
                    <label for="inputEmail4">Titulo</label>
                    <input type="email" className="form-control w-100" id="inputEmail4" placeholder="Título receta" />
                </div>
                <div class="form-group pt-3">
                    <input type="file" className="custom-file-input" id="customFileLang" lang="es" />
                    <label className="custom-file-label" for="customFileLang">Seleccionar Archivo</label>
                </div>

                <div className="form-group pt-3">
                    <label for="inputPassword4">Ingrdientes</label>
                    <input type="password" className="form-control w-100" id="inputPassword4" placeholder="Ingredientes" />
                </div>

                <div className="form-group pt-3">
                    <label for="inputAddress">Tiempo de cocinado</label>
                    <input type="text" className="form-control w-100" id="inputAddress" placeholder="Tiempo de cocinado" />
                </div>
                <div class="input-group pt-3">
                    <label for="inputPassword4">Descripción</label>
                    <textarea className="form-control w-100" aria-label="With textarea" placeholder="Escribe aqui tu receta"></textarea>
                </div>
                <div class="form-group pt-3">
                    <label for="exampleFormControlSelect1">Escoge categoria</label>
                    <select className="form-control" id="exampleFormControlSelect1" placeholder="Escoge una categoria">
                        <option>Vegano</option>
                        <option>Sin gluten</option>
                        <option>Sin lactosa</option>
                        <option>Sin azucar</option>
                    </select>
                </div>
            </form>
            <div className="button-newrecipe text-center pt-5">
                <button className="btn btn-user border-0">AÑADIR</button>
            </div>
        </div>
    );

};
export default CreateRecipe