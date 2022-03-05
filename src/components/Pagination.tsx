import React from "react";
import { NavigateBefore, NavigateNext } from "styled-icons/material";
import StyledPagination from "../elements/StyledPagination";

type Props = {};

function Pagination({}: Props) {
  return (
    <div className="pagination__wrapper flex-row">
      <StyledPagination>
        <NavigateBefore size="16px" />
      </StyledPagination>
      <StyledPagination>
        <NavigateNext size="16px" />
      </StyledPagination>
    </div>
  );
}

export default Pagination;
