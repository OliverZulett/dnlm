import React from "react";
import Card from "../card/card";
import Pagination from "../pagination/pagination";
import { Fragment } from "react";

export interface GridSectionProps {
  title: string;
  items: any[];
}

function GridSection(props: GridSectionProps) {
  const { title, items } = props;
  return (
    // px-32 py-10
    <div className="grid-section__container w-full">
      <div className="grid-section__container--title my-10 mx-5 md:mx-10 lg:mx-14 xl:mx-20">
        <h1 className="text-3xl font-alata">{title}</h1>
      </div>
      {/* py-10 */}
      {/* grid grid-cols-1 gap-1  */}
      <div className="
        grid-section__container--grid 
        flex 
        flex-col 
        items-center 
        sm:grid 
        sm:grid-cols-2 
        sm:gap-4 
        sm:mx-10
        md:grid-cols-3
        md:gap-4 
        lg:grid-cols-4
        lg:gap-7
        lg:mx-14
        2xl:grid-cols-6
        2xl:gap-6
        2xl:mx-20
        "
        >
        {items.map((item) => (
          <div className="flex items-center justify-center">
            <Card
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              description={item.description}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
      <div className="grid-section__container--pagination flex justify-center my-10">
        <Pagination />
      </div>
    </div>
  );
}

export default GridSection;
