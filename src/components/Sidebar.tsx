import React from "react";
import { KeyboardBackspace } from "styled-icons/material";

type Props = {
  backToSearch: () => void;
};

function Sidebar({ backToSearch }: Props) {
  return (
    <div className="sidebar__wrapper flex-col">
      <div className="sidebar__back flex-row" onClick={backToSearch}>
        <KeyboardBackspace size="16px" className="back__icon" />
        <p className="back__text">Back to search</p>
      </div>
      <h6 className="sidebar__title">How to apply</h6>
      <p className="sidebar__text">
        Please email a copy of your resume and online portfolio to
        <a href="mailto:hello@example.com" className="sidebar__emails">
          {" "}
          wes@kasisto.com
        </a>{" "}
        &amp; CC{" "}
        <a href="mailto:hello@example.com" className="sidebar__emails">
          eric@kasisto.com
        </a>
      </p>
    </div>
  );
}

export default Sidebar;
