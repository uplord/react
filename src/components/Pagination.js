import React from 'react';
import { Pagination as BootstrapPagination } from 'react-bootstrap';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const paginationItems = [];

  const maxVisiblePages = 5; // Max pages to show
  let startPage, endPage;

  // Logic to determine start and end pages
  if (totalPages <= maxVisiblePages) {
    // If total pages are less than or equal to maxVisiblePages, show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // If current page is near the beginning
    if (currentPage <= 3) {
      startPage = 1;
      endPage = maxVisiblePages;
    }
    // If current page is near the end
    else if (currentPage + 2 >= totalPages) {
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    }
    // If current page is in the middle
    else {
      startPage = currentPage - 2;
      endPage = currentPage + 2;
    }
  }

  // Generate pagination items
  for (let number = startPage; number <= endPage; number++) {
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

  // Add ellipses if needed
  if (startPage > 1) {
    // Show first page and ellipsis if there are pages before it
    if (startPage > 2) {
      paginationItems.unshift(<BootstrapPagination.Ellipsis key="start-ellipsis" disabled />);
    }

    paginationItems.unshift(
      <BootstrapPagination.Item key="start" onClick={() => handlePageChange(1)}>
        1
      </BootstrapPagination.Item>
    );
  }

  if (endPage < totalPages) {
    // Show ellipsis if there are pages before the last page
    if (endPage < totalPages - 1) {
      paginationItems.push(<BootstrapPagination.Ellipsis key="end-ellipsis" disabled />);
    }

    paginationItems.push(
      <BootstrapPagination.Item key={totalPages} onClick={() => handlePageChange(totalPages)}>
        {totalPages}
      </BootstrapPagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <BootstrapPagination>{paginationItems}</BootstrapPagination>
    </div>
  );
};

export default Pagination;
