import React from "react";
import { Fragment } from "react";
import Navbar from "../../../components/navbar/navbar";
import Form from "../../../components/form/form";
import Footer from "../../../components/footer/footer";
import { useRouter } from 'next/router';

const EditMovie = (props: any) => {
  const { name, image, description, rating } = props;
  const router = useRouter();
  const {id} = router.query;
  console.log(name, image, description, rating);
  
  return (
    <Fragment>
      <Navbar />
      <div className="container mx-auto my-14">
        <Form
          name={name}
          image={image}
          description={description}
          rating={rating}
        />
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
  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  const {id} = params;
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
    props: movie
  };
}
