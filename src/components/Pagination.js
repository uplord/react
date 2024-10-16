import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const paginationItems = [];

  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <BootstrapPagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </BootstrapPagination.Item>
    );
  }

  return (
    <BootstrapPagination className="justify-content-center mt-4">
      {paginationItems}
    </BootstrapPagination>
  );
};

export default Pagination;