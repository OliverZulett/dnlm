import React from "react";
import PropTypes from "prop-types";

export interface FormProps {}

const Form = (props: FormProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-10 flex justify-start w-full">
        <h1 className="text-3xl text-primary">Crea una reseña</h1>
      </div>
      <div className="w-full">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Titulo de Pelicula</span>
          </label>
          <input
            type="text"
            placeholder="Titulo"
            className="input input-bordered input-primary w-full"
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Puntuacion</span>
          </label>
          <input
            type="number"
            placeholder="4"
            className="input input-bordered input-primary w-full"
          ></input>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Desripcion de Pelicula</span>
          </label>
          <textarea
            className="textarea textarea-primary"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Imagen</span>
          </label>
          <input
            type="text"
            placeholder="https://myimage.com/img.png"
            className="input input-bordered input-primary w-full"
          ></input>
        </div>
        <div className="avatar mt-5">
          <div className="w-24 mask mask-hexagon">
            <img src="https://api.lorem.space/image/face?hash=55350" />
          </div>
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="file"
            placeholder="Titulo"
            className="input input-bordered input-primary w-full"
          ></input>
        </div> */}
        <div className="mt-4">
          <button className="btn btn-outline btn-error">Crear</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
