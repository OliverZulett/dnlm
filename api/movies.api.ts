// const movieApiUrl = `${process.env.API_HOST}:${process.env.API_PORT}/api/movies/`;
// const movieApiUsername = `${process.env.API_USER}`;
// const movieApiPassword = `${process.env.API_PASS}`;
const movieApiUrl = `http://localhost:7001/api/movies/`;
const movieApiUsername = `movies_api_user`;
const movieApiPassword = `movies_api_pass`;

export interface Movie {
  title: string;
  description: string;
  rating: number;
  image: string;
}

const headers = () => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64"),
  ); 
  return headers;
}

export const postMovie = async (movie: string) => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " + Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64"),
  );
  headers.set(
    "Content-Type",
    "application/json"
  )
  const options = {
    method: 'POST',
    headers: headers,
    body: movie
  }
  try {
    const response = await fetch(
      movieApiUrl,
      options
    )
    const newMovie = await response.json();
    return newMovie;
  } catch (error) {
    console.error(error)
  }
}