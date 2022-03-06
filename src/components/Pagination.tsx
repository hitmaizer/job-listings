import React from "react";
import { NavigateBefore, NavigateNext } from "styled-icons/material";
import StyledPagination from "../elements/StyledPagination";

type Props = {
  postsPerPage: number;
  totalPosts: number;
};

const Pagination: React.FC<Props> = (props: Props) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginationElements = pageNumbers.map((item) => (
    <StyledPagination children={item} />
  ));

  return (
    <div className="pagination__wrapper flex-row">
      <StyledPagination>
        <NavigateBefore size="16px" />
      </StyledPagination>
      {paginationElements}
      <StyledPagination>
        <NavigateNext size="16px" />
      </StyledPagination>
    </div>
  );
};

export default Pagination;
