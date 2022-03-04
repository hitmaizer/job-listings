import React from "react";
import Theme from "./theme/Theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="page__wrapper">
      <ThemeProvider theme={Theme}>
        <h1>hello mate!</h1>
      </ThemeProvider>
    </div>
  );
}

export default App;
