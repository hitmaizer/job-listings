import React from "react";
import Pagination from "./Pagination";
import ResultCard from "./ResultCard";

interface Props {
  posts: {
    id?: number;
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
  }[];
}

const Results: React.FC<Props> = (props: Props) => {
  const cardElements = props.posts.map((item) => {
    return (
      <ResultCard
        key={item.id}
        url={item.url}
        title={item.title}
        company_name={item.company_name}
        company_logo={item.company_logo}
        category={item.category}
        tags={item.tags}
        job_type={item.job_type}
        publication_date={item.publication_date}
        candidate_required_location={item.candidate_required_location}
        salary={item.salary}
        description={item.description}
      />
    );
  });

  return (
    <div className="section__wrapper flex-col results">
      {cardElements}
      <Pagination />
    </div>
  );
};

export default Results;
