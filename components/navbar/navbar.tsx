import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
      <div className="navbar-center">
        <Link href={`/`}>
          <a className="btn btn-ghost normal-case text-xl">
            De NETFLIX lo mejor
          </a>
        </Link>
      </div>
      <div className="navbar-end">
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
                <label >
                  Crear Reseña
                </label>
                <ul
                  
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href={`/`}>
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
