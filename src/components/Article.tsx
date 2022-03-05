import React from "react";
import Details from "./Details";
import Sidebar from "./Sidebar";

type Props = {};

function Article({}: Props) {
  return (
    <div className="article__wrapper flex-row">
      <Sidebar />
      <div className="article__content">
        <Details />
      </div>
    </div>
  );
}

export default Article;
