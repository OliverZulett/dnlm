import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./card.module.scss";

export interface CardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
}

function Card(props: CardProps) {
  const { id, name, image, description, rating } = props;

  return (
    <div
      className={`card w-72 md:w-96 h-96 bg-base-100 shadow-xl mb-10 md:mb-0 ${styles.card}`}
      style={{
        backgroundImage: "url(" + `${image}` + ")",
      }}
    >
      <div className={`card-body justify-end ${styles.body}`}>
        <h2 className="card-title text-2xl font-alata">{name}</h2>
        <p className="grow-0 font-opensans">
          {`${description.slice(0, 150)}...`}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/movies/${id}`} passHref>
            <button className="btn btn-outline btn-primary">Ver Mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
