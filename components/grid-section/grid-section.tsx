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
    <div className="grid-section__container px-32 py-10">
      <div className="grid-section__container--title">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="grid-section__container--grid grid grid-cols-3 gap-3 py-10">
        {items.map((item) => (
          <Card
            id={item._id}
            name={item.name}
            image={item.image}
            description={item.description}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="grid-section__container--pagination flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default GridSection;
