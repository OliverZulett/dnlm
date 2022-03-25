import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface CardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
}

function Card(props: CardProps) {
  const { id, name, image, description, rating } = props;
  const IMAGE_API = "https://cdn.pixabay.com/";
  const imagePath = image.slice(IMAGE_API.length);

  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;

{
  /* <div className="card w-full bg-base-100 shadow-xl">
<figure>
  <Image
    src={imagePath}
    alt="Shoes"
    className="max-w-sm rounded-lg shadow-2xl"
    width={500}
    height={325}
  />
</figure>
<div className="card-body">
  <h2 className="card-title">{name}</h2>
  <p>{description}</p>
  <div className="rating gap-1">
    <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
    <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
    <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
  </div>
  <div className="card-actions justify-end pt-3">
    <Link href={`/movies/${id}`}>
      <button className="btn btn-outline btn-accent btn-sm">Ver Mas</button>
    </Link>
  </div>
</div>
</div> */
}
