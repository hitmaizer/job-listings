import React, { FC } from "react";
import { BriefcaseFill } from "styled-icons/bootstrap";

const PositionSearchbar: FC = () => {
  return (
    <div className="section__wrapper">
      <div className="input__container">
        <BriefcaseFill size="24px" />
        <input type="text" className="search__input" />
        <button className="search__btn">Search</button>
      </div>
    </div>
  );
};

export default PositionSearchbar;
