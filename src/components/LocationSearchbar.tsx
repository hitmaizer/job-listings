import React, { FC } from "react";
import { Globe } from "styled-icons/entypo";

interface Props {
  fulltimeFilter: boolean;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationSearchbar: FC<Props> = (props: Props) => {
  return (
    <div className="section__wrapper flex-col">
      <div className="sidebar__checkbox flex-row">
        <input
          type="checkbox"
          className="fulltime__checkbox"
          checked={props.fulltimeFilter}
          id="fulltime"
          name="fulltimeFilter"
          onChange={props.handleFilter}
        />
        <label className="fulltime__text" htmlFor="fulltime">
          Only Full time
        </label>
      </div>
      <h6 className="sidebar__title">Location</h6>
      <div className="input__container--location">
        <Globe size="16px" className="search__icon" />
        <input
          type="text"
          className="location__search"
          placeholder="City, state, zip code or country"
          disabled={true}
        />
      </div>
      <div className="radio__item flex-row">
        <input type="radio" className="location__radio" value="London" />
        <label htmlFor="London" className="radio__label">
          London
        </label>
      </div>
      <div className="radio__item flex-row">
        <input type="radio" className="location__radio" value="Amesterdam" />
        <label htmlFor="Amesterdam" className="radio__label">
          Amesterdam
        </label>
      </div>
      <div className="radio__item flex-row">
        <input type="radio" className="location__radio" value="New York" />
        <label htmlFor="New York" className="radio__label">
          New York
        </label>
      </div>
      <div className="radio__item flex-row">
        <input type="radio" className="location__radio" value="Berlin" />
        <label htmlFor="Berlin" className="radio__label">
          Berlin
        </label>
      </div>
    </div>
  );
};

export default LocationSearchbar;
