import React from "react";
import { Fragment } from "react";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";
import { useState } from "react";
import { useRouter } from "next/router";
import { patchMovie } from "../../../api/movies.api";

export interface EditMovieProps {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  rating?: number;
}

const EditMovie = (props: EditMovieProps) => {
  const router = useRouter();
  const [movie, setMovie] = useState(props);
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const JSONdata = JSON.stringify(movie);
    const updatedMovie = await patchMovie(movie._id, JSONdata);
    router.push(`/movies/${updatedMovie._id}`);
  };
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="w-full px-8 sm:px-20 md:px-40 lg:px-60 flex flex-col items-center grow pt-20">
          <div className="mb-10 flex justify-start w-full">
            <h1 className="text-3xl font-alata">Editar pelicula</h1>
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
                value={movie.name}
                onChange={handleChange}
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
                value={movie.rating}
                onChange={handleChange}
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
                value={movie.description}
                onChange={handleChange}
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
                onChange={handleChange}
                value={movie.image}
              ></input>
            </div>
            <div className="avatar mt-5">
              <div className="w-24 mask mask-hexagon">
                <img src={movie.image} key={movie.image} />
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-outline btn-primary">
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default EditMovie;

export async function getStaticPaths() {
  const url = `${process.env.API_HOST}:${process.env.API_PORT}/api/movies/`;
  const username = `${process.env.API_USER}`;
  const password = `${process.env.API_PASS}`;
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(username + ":" + password).toString("base64")
  );
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const movies = await res.json();
  const paths = movies.map((movie) => ({
    params: { id: movie._id },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const url = `${process.env.API_HOST}:${process.env.API_PORT}/api/movies/${id}`;
  const username = `${process.env.API_USER}`;
  const password = `${process.env.API_PASS}`;
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(username + ":" + password).toString("base64")
  );
  const res = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const movie = await res.json();

  return {
    props: movie,
  };
}
