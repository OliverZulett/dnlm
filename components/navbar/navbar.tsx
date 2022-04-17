import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-base-100 flex md:justify-between h-20 items-center">
      <div className="flex justify-between w-full md:w-auto">
        <div className="flex justify-start items-center">
          <div className="dropdown dropdown-start pl-5 md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=33791" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <div className="dropdown dropdown-left">
                  <label>Crear Reseña</label>
                  <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link href={`/movies/create`}>
                        <a>Pelicula</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Serie</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link href={`/`}>
                  <a>Perfil</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden dropdown md:block md:pl-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={`/`}>
                  <a>Series</a>
                </Link>
              </li>
              <li>
                <Link href={`/`}>
                  <a>Peliculas</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <Link href={`/`}>
            <a className=" normal-case text-xl text-primary font-alata pr-0">
              De NETFLIX lo mejor
            </a>
          </Link>
          <div className="dropdown dropdown-end mr-2 md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 w-auto"
            >
              <li>
                <Link href={`/`}>
                  <a>Series</a>
                </Link>
              </li>
              <li>
                <Link href={`/`}>
                  <a>Peliculas</a>
                </Link>
              </li>
              <li>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered"
                  ></input>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="navbar-center">
      </div> */}
      <div className="hidden md:flex">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          ></input>
        </div>
        <div className="dropdown dropdown-end px-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <div className="dropdown dropdown-left">
                <label>Crear Reseña</label>
                <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link href={`/movies/create`}>
                      <a>Pelicula</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={`/`}>
                      <a>Serie</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href={`/`}>
                <a>Perfil</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
