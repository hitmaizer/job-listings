import React, { FC } from "react";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import PositionSearchbar from "./components/PositionSearchbar";
import LocationSearchbar from "./components/LocationSearchbar";
import Results from "./components/Results";
import Article from "./components/Article";
import Data from "./Data.json";
import { DataObj } from "./interfaces/DataInterface";
import Pagination from "./components/Pagination";

const App: FC = () => {
  const [searching, setSearching] = React.useState<boolean>(true);
  const [allData, setAllData] = React.useState<DataObj["posts"]>(Data);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postsPerPage, setPostsPerPage] = React.useState<number>(5);
  const [pageNumberLimit, setPageNumberLimit] = React.useState<number>(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState<number>(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = React.useState<number>(0);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allData.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (item: number) => setCurrentPage(item);

  //Handle next page
  const handleNextPage = () => {
    if (currentPage + 1 < 11) {
      setCurrentPage(currentPage + 1);

      if (currentPage + 1 > maxPageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  //Handle prev page
  const handlePrevPage = () => {
    if (currentPage - 1 > 0) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

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
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={allData.length}
              paginate={paginate}
              currentPage={currentPage}
              pageNumberLimit={pageNumberLimit}
              maxPageNumberLimit={maxPageNumberLimit}
              minPageNumberLimit={minPageNumberLimit}
              prevPage={handlePrevPage}
              nextPage={handleNextPage}
            />
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
