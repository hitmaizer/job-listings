import React from "react";
import Details from "./Details";
import Sidebar from "./Sidebar";

type Props = {
  backToSearch: () => void;
};

function Article({ backToSearch }: Props) {
  return (
    <div className="article__wrapper flex-row">
      <Sidebar backToSearch={backToSearch} />
      <div className="article__content">
        <Details />
      </div>
    </div>
  );
}

export default Article;
