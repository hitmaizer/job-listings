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
import axios from "axios";

const App: FC = () => {
  const [searching, setSearching] = React.useState<boolean>(true);
  const [allData, setAllData] = React.useState<DataObj["posts"]>(Data);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [postsPerPage, setPostsPerPage] = React.useState<number>(5);
  const [pageNumberLimit, setPageNumberLimit] = React.useState<number>(3);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState<number>(3);
  const [minPageNumberLimit, setMinPageNumberLimit] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [filteredData, setFilteredData] = React.useState<any[]>([]);
  const [typedData, setTypedData] = React.useState<string>("");

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

  //Handle Filter
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    setTypedData(searchWord);
  };

  //Search btn API call
  const searchCall = () => {
    setLoading(true);
    async function fetchData() {
      const request = await axios
        .get(`https://remotive.io/api/remote-jobs?search=${typedData}`)
        .then((response) => {
          if (typedData === "") {
            setFilteredData([]);
          } else {
            setFilteredData(response.data.jobs);
          }
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
      return request;
    }
    fetchData();
  };

  console.log(filteredData);

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
            <PositionSearchbar
              handleFilter={handleFilter}
              filteredData={filteredData}
              searchCall={searchCall}
            />
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
