import React from "react";
import Details from "./Details";
import Sidebar from "./Sidebar";
import moment from "moment";

type Props = {
  backToSearch: () => void;
  selectedPost: {
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
    salary?: string | undefined;
    description: string;
    company_logo_url?: string | undefined;
  };
};

function Article({ backToSearch, selectedPost }: Props) {
  let m = moment(selectedPost.publication_date);

  return (
    <div className="article__wrapper flex-row">
      <Sidebar backToSearch={backToSearch} />
      <div className="article__content">
        <Details
          url={selectedPost.url}
          title={selectedPost.title}
          job_type={selectedPost.job_type}
          publication_date={m.fromNow()}
          company_name={selectedPost.company_name}
          company_logo={selectedPost.company_logo}
          description={selectedPost.description}
          candidate_required_location={selectedPost.candidate_required_location}
        />
      </div>
    </div>
  );
}

export default Article;
