import React, { FC } from "react";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";
import PositionSearchbar from "./components/PositionSearchbar";

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
        </header>
        <h1>hello mate!</h1>
      </ThemeProvider>
    </div>
  );
};

export default App;
