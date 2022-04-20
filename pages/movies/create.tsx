import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";
import { postMovie } from "../../api/movies.api";

function create() {
  const router = useRouter();
  const [imagePreview, setImagePreview] = useState(
    "https://cdn.pixabay.com/photo/2016/04/11/14/22/vhs-1322179_960_720.png"
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      rating: event.target.rating.value,
      description: event.target.description.value,
      image: event.target.image.value,
    };
    const JSONdata = JSON.stringify(data);
    const newMovie = await postMovie(JSONdata);
    router.push(`/movies/${newMovie._id}`);
  };
  const setImage = (event) => {
    setImagePreview(event.target.value);
  };
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="w-full px-8 sm:px-20 md:px-40 lg:px-60 flex flex-col items-center grow pt-20">
          <div className="mb-10 flex justify-start w-full">
            <h1 className="text-3xl font-alata">Crea una reseña</h1>
          </div>
          <form onSubmit={handleSubmit} className="w-full font-opensans">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Titulo</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                minLength={1}
                maxLength={300}
                required
                placeholder="Titulo"
                className="input input-bordered input-primary w-full"
              ></input>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="rating">
                <span className="label-text">Puntuacion</span>
              </label>
              <input
                id="rating"
                name="rating"
                type="number"
                min={1}
                max={5}
                required
                placeholder="4"
                className="input input-bordered input-primary w-full"
              ></input>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="description">
                <span className="label-text">Desripcion</span>
              </label>
              <textarea
                id="description"
                name="description"
                minLength={200}
                required
                className="textarea textarea-primary"
                placeholder="Bio"
                rows={5}
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="image">
                <span className="label-text">Imagen</span>
              </label>
              <input
                id="image"
                name="image"
                required
                type="text"
                placeholder="https://myimage.com/img.png"
                className="input input-bordered input-primary w-full"
                onChange={setImage}
              ></input>
            </div>
            <div className="avatar mt-5">
              <div className="w-24 mask mask-hexagon">
                <img src={imagePreview} key={imagePreview} />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-outline btn-primary">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default create;
