import React, { FC } from "react";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import PositionSearchbar from "./components/PositionSearchbar";
import LocationSearchbar from "./components/LocationSearchbar";
import Results from "./components/Results";

const App: FC = () => {
  return (
    <div className="page__wrapper">
      <ThemeProvider theme={Theme}>
        <header className="page__header">
          <h6 className="header__logo">
            <span className="strong__text">Github</span>
            Jobs
          </h6>
          <PositionSearchbar />
          <div className="bottom__container flex-row">
            <LocationSearchbar />
            <Results />
          </div>
        </header>
        <h1>hello mate!</h1>
      </ThemeProvider>
    </div>
  );
};

export default App;
