import React, { FC } from "react";
import { BriefcaseFill } from "styled-icons/bootstrap";

const PositionSearchbar: FC = () => {
  return (
    <div className="section__wrapper position flex-col">
      <div className="input__container">
        <BriefcaseFill size="16px" className="input__icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Title, companies, expertise or benefits"
        />
        <button className="search__btn">Search</button>
      </div>
    </div>
  );
};

export default PositionSearchbar;
