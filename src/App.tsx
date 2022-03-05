import React, { FC } from "react";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import PositionSearchbar from "./components/PositionSearchbar";
import LocationSearchbar from "./components/LocationSearchbar";
import Results from "./components/Results";
import Article from "./components/Article";

const App: FC = () => {
  return (
    <div className="page__wrapper flex-col">
      <ThemeProvider theme={Theme}>
        <header className="page__header">
          <h6 className="header__logo">
            <span className="strong__text">Github </span>
            Jobs
          </h6>
          <PositionSearchbar />
          <div className="bottom__container flex-row">
            <LocationSearchbar />
            <Results />
          </div>
        </header>
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
        <Article />
      </ThemeProvider>
    </div>
  );
};

export default App;
