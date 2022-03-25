import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 px-32">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="photo/2016/08/24/03/22/pitman-theatre-1616083_960_720.jpg"
          alt="Picture of the author"
          className="max-w-sm rounded-lg shadow-2xl w-80"
          width={260}
          height={400}
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
