import React from "react";
import Sidebar from "./Sidebar";

type Props = {};

function Article({}: Props) {
  return (
    <div className="article__wrapper flex-row">
      <Sidebar />
      <div className="article__content"></div>
    </div>
  );
}

export default Article;
