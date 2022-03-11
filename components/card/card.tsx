import Image from "next/image";
import React from "react";

function Card() {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <Image
          src="/card-image.jpg"
          alt="Shoes"
          className="max-w-sm rounded-lg shadow-2xl"
          width={500}
          height={325}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="rating gap-1">
          <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
          <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" checked />
          <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
          <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
          <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
        </div>
        <div className="card-actions justify-end pt-3">
          <button className="btn btn-outline btn-accent btn-sm">Button</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
