import React, { FC } from "react";
import { Clock, Globe } from "styled-icons/entypo";
import StyledCard from "../elements/StyledCard";

interface Props {
  id: number;
  url: string;
  title: string;
  company_name: string;
  company_logo: string;
  category: string;
  tags: string[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary?: string;
  description: string;
  company_logo_url?: string;
  handleSpecificPost: (a: number) => void;
}

const ResultCard: FC<Props> = (props: Props) => {
  return (
    <StyledCard
      className="card__wrapper flex-row"
      onClick={(id) => props.handleSpecificPost(props.id)}
    >
      <img src={props.company_logo} alt="" className="card__img" />
      <div className="card__info flex-col">
        <h6 className="info__company">{props.company_name}</h6>
        <h1 className="info__title">{props.title}</h1>
        {props.job_type === "full_time" && (
          <h5 className="info__badge">Full time</h5>
        )}
      </div>
      <div className="card__details flex-row">
        <div className="detail__item flex-row">
          <Globe size="16px" />
          <p className="item__text">{props.candidate_required_location}</p>
        </div>
        <div className="detail__item flex-row">
          <Clock size="16px" />
          <p className="item__text">{props.publication_date}</p>
        </div>
      </div>
    </StyledCard>
  );
};

export default ResultCard;
