import React, { FC } from "react";
import { Globe } from "styled-icons/entypo";

interface Props {
  fulltimeFilter: boolean;
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  locationFilter: string;
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
        <input
          type="radio"
          className="location__radio"
          value="Worldwide"
          id="Worldwide"
          name="location"
          checked={props.locationFilter === "Worldwide"}
        />
        <label htmlFor="Worldwide" className="radio__label">
          Worldwide
        </label>
      </div>
      <div className="radio__item flex-row">
        <input
          type="radio"
          className="location__radio"
          value="Europe"
          id="Europe"
          name="location"
          checked={props.locationFilter === "Europe"}
        />
        <label htmlFor="Europe" className="radio__label">
          Europe
        </label>
      </div>
      <div className="radio__item flex-row">
        <input
          type="radio"
          className="location__radio"
          value="USA"
          id="USA"
          name="location"
          checked={props.locationFilter === "USA"}
        />
        <label htmlFor="USA" className="radio__label">
          USA
        </label>
      </div>
      <div className="radio__item flex-row">
        <input
          type="radio"
          className="location__radio"
          value="UK"
          id="UK"
          name="location"
          checked={props.locationFilter === "UK"}
        />
        <label htmlFor="UK" className="radio__label">
          UK
        </label>
      </div>
      <div className="radio__item flex-row">
        <input
          type="radio"
          className="location__radio"
          value="Germany"
          id="Germany"
          name="location"
          checked={props.locationFilter === "Germany"}
        />
        <label htmlFor="Germany" className="radio__label">
          Germany
        </label>
      </div>
    </div>
  );
};

export default LocationSearchbar;
