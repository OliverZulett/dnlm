import Navbar from "../components/navbar/navbar";
import Hero from "../components/hero/hero";
import { Fragment } from "react";
import GridSection from "../components/grid-section/grid-section";
import Footer from "../components/footer/footer";

export default function Home({ movies }) {
  return (
    <Fragment>
      <Navbar />
      {/* <Hero /> */}
      <GridSection title="BEST MOVIES" items={movies} />
      {/* <GridSection title="BEST SERIES" /> */}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const url = `${process.env.API_HOST}:${process.env.API_PORT}/api/movies`;
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
  return {
    props: { movies },
  };
}
