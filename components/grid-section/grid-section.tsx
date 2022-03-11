import React from "react";
import Card from '../card/card';
import Pagination from '../pagination/pagination';

export interface GridSectionProps {
  title: string;
}

function GridSection(props: GridSectionProps) {
  return (
    <div className="grid-section__container px-32 py-10">
      <div className="grid-section__container--title">
        <h1 className="text-3xl font-bold">{props.title}</h1>
      </div>
      <div className="grid-section__container--grid grid grid-cols-4 gap-4 py-10">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="grid-section__contianer--pagination flex justify-center">
        <Pagination/>
      </div>
    </div>
  );
}

export default GridSection;
