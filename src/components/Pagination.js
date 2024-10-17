import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  const goToFirstPage = () => {
    if (currentPage > 1) handlePageChange(1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const goToLastPage = () => {
    if (currentPage < totalPages) handlePageChange(totalPages);
  };

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <ButtonGroup>
        {/* First Page Button */}
        <Button variant="light" onClick={goToFirstPage} disabled={currentPage === 1}>
          <span>&laquo;</span> {/* Double left chevron */}
        </Button>

        {/* Previous Page Button */}
        <Button variant="light" onClick={goToPreviousPage} disabled={currentPage === 1}>
          <span>&lsaquo;</span> Newer {/* Single left chevron with text */}
        </Button>

        {/* Current Page / Total Pages */}
        <div className="d-flex align-items-center mx-3">
          <strong>{currentPage}</strong>
          <span className="mx-1">/</span>
          <span>{totalPages}</span>
        </div>

        {/* Next Page Button */}
        <Button variant="light" onClick={goToNextPage} disabled={currentPage === totalPages}>
          Older <span>&rsaquo;</span> {/* Single right chevron with text */}
        </Button>

        {/* Last Page Button */}
        <Button variant="light" onClick={goToLastPage} disabled={currentPage === totalPages}>
          <span>&raquo;</span> {/* Double right chevron */}
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
