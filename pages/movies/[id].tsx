import Image from "next/image";
import React from "react";
import { Fragment } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";
import Link from "next/link";

export interface MovieProps {
  name?: string;
  image?: string;
  description?: string;
  rating?: number;
}

function Movie(props: any) {
  const { name, image, description, rating } = props;
  const router = useRouter();
  const { id } = router.query;
  const IMAGE_API = "https://cdn.pixabay.com/";
  const imagePath = image.slice(IMAGE_API.length);

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="w-full px-8 sm:px-20 mt-5 mb-10 flex grow">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center items-center mb-10 md:w-3/6">
              <div className="avatar flex justify-center items-center">
                <div className="w-4/5 mask mask-hexagon">
                  <Image
                    src={imagePath}
                    alt="Picture of the author"
                    className="max-w-sm rounded-lg shadow-2xl w-80"
                    width={400}
                    height={600}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-3/6">
              <h1 className="text-5xl font-alata">{name}</h1>
              <div className="rating gap-1 mt-5">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-lime-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-green-400"
                />
              </div>
              <p className="italic text-lg mt-5 font-opensans">{description}</p>
              <div className="controls flex justify-start mt-10">
                <Link href={`/movies/edit/${id}`} passHref>
                  <button className="btn btn-outline btn-success">Editar</button>
                </Link>
                <button className="btn btn-outline btn-error ml-5">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default Movie;

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
