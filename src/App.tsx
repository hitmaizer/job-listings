import React, { FC } from "react";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import PositionSearchbar from "./components/PositionSearchbar";
import LocationSearchbar from "./components/LocationSearchbar";
import Results from "./components/Results";
import Article from "./components/Article";
import Data from "./Data.json";
import { DataObj } from "./interfaces/DataInterface";

const App: FC = () => {
  const [searching, setSearching] = React.useState(true);
  const [displayData, setDisplayData] = React.useState<DataObj[]>([]);
  const [allData, setAllData] = React.useState<DataObj["posts"]>(Data);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage, setPostsPerPage] = React.useState(5);

  const randomNumber = Math.floor(Math.random() * allData.length);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="page__wrapper flex-col">
      <ThemeProvider theme={Theme}>
        {searching === true && (
          <>
            <header className="page__header">
              <h6 className="header__logo">
                <span className="strong__text">Github </span>
                Jobs
              </h6>
            </header>
            <PositionSearchbar />
            <div className="bottom__container flex-row">
              <LocationSearchbar />
              <Results posts={currentPosts} />
            </div>
          </>
        )}
        {searching === false && <Article />}
        <footer className="footer__sign">
          <p className="sign">
            created by
            <b>
              <u>
                <a href="http://github.com/hitmaizer">Jose Alves</a>
              </u>
            </b>
            - devChallenges.io
          </p>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default App;
