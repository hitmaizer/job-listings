import React from "react";
import Pagination from "./Pagination";
import ResultCard from "./ResultCard";

type Props = {};

function Results({}: Props) {
  return (
    <div className="section__wrapper">
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <Pagination />
    </div>
  );
}

export default Results;
