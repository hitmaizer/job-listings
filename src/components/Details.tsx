import React from "react";
import { Clock, Globe } from "styled-icons/entypo";

type Props = {
  title: string;
  job_type?: string;
  publication_date: string;
  company_name: string;
  company_logo: string;
  description: string;
  url: string;
  candidate_required_location: string;
};

function Details(props: Props) {
  console.log(props.candidate_required_location);
  return (
    <div className="details__wrapper flex-col">
      <div className="details__header flex-row">
        <h1 className="details__title">{props.title}</h1>
        {props.job_type && (
          <h5 className="info__badge article__badge">Full time</h5>
        )}
      </div>
      <div className="details__item flex-row">
        <Clock size="16px" />
        <p className="item__text">{props.publication_date}</p>
      </div>
      <div className="details__info flex-row">
        <img src={props.company_logo} alt="" className="info__img" />
        <div className="info__details flex-col">
          <h3 className="details__company">{props.company_name}</h3>
          <div className="details__item flex-row">
            <Globe size="16px" />
            <p className="item__text">{props.candidate_required_location}</p>
          </div>
        </div>
      </div>
      <p
        className="details__text"
        dangerouslySetInnerHTML={{ __html: props.description }}
      ></p>
    </div>
  );
}

export default Details;
