import React, { FC } from "react";
import { BriefcaseFill } from "styled-icons/bootstrap";

interface Props {
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredData: any[];
  searchCall: () => void;
}

const PositionSearchbar: FC<Props> = (props: Props) => {
  return (
    <div className="section__wrapper position flex-col">
      <div className="input__container">
        <BriefcaseFill size="16px" className="input__icon" />
        <input
          type="text"
          className="search__input"
          placeholder="Title, companies, expertise or benefits"
          onChange={(e) => props.handleFilter(e)}
        />
        <button onClick={props.searchCall} className="search__btn">
          Search
        </button>
      </div>
    </div>
  );
};

export default PositionSearchbar;
