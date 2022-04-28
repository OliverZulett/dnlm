// const movieApiUrl = `${process.env.API_HOST}:${process.env.API_PORT}/api/movies/`;
// const movieApiUsername = `${process.env.API_USER}`;
// const movieApiPassword = `${process.env.API_PASS}`;
const movieApiUrl = `http://localhost:7001/api/movies`;
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
    "Basic " +
      Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64")
  );
  return headers;
};

export const getMoviesPaginated = async (
  page: number = 1,
  pageSize: number = 20,
  filter: 'name' | 'rating' = 'name',
  order: 'asc' | 'desc' = 'asc',
  search: string = ''
) => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64")
  );
  headers.set("Content-Type", "application/json");
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(
      `${movieApiUrl}?page=${page}&pageSize=${pageSize}&filter=${filter}&order=${order}&search=${search}`,
      options
    );
    const moviesPaginated = await response.json();
    console.log(moviesPaginated);
    
    return moviesPaginated;
  } catch (error) {
    console.error(error);
  }
};

export const getMovie = async (id: string) => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64")
  );
  headers.set("Content-Type", "application/json");
  const options = {
    method: "GET",
    headers: headers,
  };
  try {
    const response = await fetch(`${movieApiUrl}/${id}`, options);
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.error(error);
  }
};

export const postMovie = async (movie: string) => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64")
  );
  headers.set("Content-Type", "application/json");
  const options = {
    method: "POST",
    headers: headers,
    body: movie,
  };
  try {
    const response = await fetch(movieApiUrl, options);
    const newMovie = await response.json();
    return newMovie;
  } catch (error) {
    console.error(error);
  }
};

export const patchMovie = async (id: string, movie: string) => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64")
  );
  headers.set("Content-Type", "application/json");
  const options = {
    method: "PATCH",
    headers: headers,
    body: movie,
  };
  try {
    const response = await fetch(`${movieApiUrl}/${id}`, options);
    const newMovie = await response.json();
    return newMovie;
  } catch (error) {
    console.error(error);
  }
};

export const deleteMovie = async (id: string) => {
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      Buffer.from(movieApiUsername + ":" + movieApiPassword).toString("base64")
  );
  headers.set("Content-Type", "application/json");
  const options = {
    method: "DELETE",
    headers: headers,
  };
  try {
    const response = await fetch(`${movieApiUrl}/${id}`, options);
    const resp = await response.json();
    console.log(`${movieApiUrl}/${id}`);
    console.log(resp);
    // return movie;
  } catch (error) {
    console.error(error);
  }
};
