import React from "react";
import { postMovie } from "../../api/movies.api";
import { useRouter } from "next/router";

export interface FormProps {
  name?: string;
  image?: string;
  description?: string;
  rating?: number;
}

const Form = (props: FormProps) => {
  const router = useRouter();
  const { name, image, description, rating } = props;
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

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-10 flex justify-start w-full">
        <h1 className="text-3xl text-primary font-alata">Crea una reseña</h1>
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
            value={name}
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
            value={rating}
          ></input>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="description">
            <span className="label-text">Desripcion</span>
          </label>
          <textarea
            id="description"
            name="description"
            minLength={100}
            required
            className="textarea textarea-primary"
            placeholder="Bio"
            value={description}
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
            value={image}
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
          <button type="submit" className="btn btn-outline btn-primary">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
