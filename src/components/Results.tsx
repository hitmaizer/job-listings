import React from "react";
import ResultCard from "./ResultCard";
import moment from "moment";
import lottie from "lottie-web";

interface Props {
  loading: boolean;
  posts: {
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
  }[];
  handleSpecificPost: (a: number) => void;
}

const Results: React.FC<Props> = (props: Props) => {
  const container = React.useRef<any>(null);

  React.useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../dots.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  const cardElements = props.posts.map((item) => {
    let m = moment(item.publication_date);

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
        publication_date={m.fromNow()}
        candidate_required_location={item.candidate_required_location}
        salary={item.salary}
        description={item.description}
        handleSpecificPost={props.handleSpecificPost}
        id={item.id}
      />
    );
  });

  return (
    <>
      {props.loading === true ? (
        <div className="lottie__container" ref={container}></div>
      ) : (
        <div className="section__wrapper flex-col results">{cardElements}</div>
      )}
    </>
  );
};

export default Results;
