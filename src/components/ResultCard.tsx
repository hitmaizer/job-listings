import React, { FC } from "react";
import { Clock, Globe } from "styled-icons/entypo";
import StyledCard from "../elements/StyledCard";

const ResultCard: FC = () => {
  return (
    <StyledCard className="card__wrapper flex-row">
      <img src="images/placeholder.png" alt="" className="card__img" />
      <div className="card__info">
        <h6 className="info__company">Kasisto</h6>
        <h1 className="info__title">Front-End Software Engineer</h1>
        <h5 className="info__badge">Full time</h5>
      </div>
      <div className="card__details flex-row">
        <div className="detail__item flex-row">
          <Globe size="24px" />
          <p className="item__text"></p>
        </div>
        <div className="detail__item flex-row">
          <Clock size="24px" />
          <p className="item__text"></p>
        </div>
      </div>
    </StyledCard>
  );
};

export default ResultCard;
