import React from "react";
import ResultCard from "./ResultCard";

type Props = {};

function Results({}: Props) {
  return (
    <div className="section__wrapper">
      <ResultCard />
      <ResultCard />
      <ResultCard />
      <ResultCard />
    </div>
  );
}

export default Results;
