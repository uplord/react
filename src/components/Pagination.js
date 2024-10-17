import React from 'react';

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
    <div className="flex justify-center items-center my-4 space-x-2">
      {/* First Page Button */}
      <button
        onClick={goToFirstPage}
        disabled={currentPage === 1}
        className={`px-3 py-2 bg-gray-200 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
      >
        &laquo;
      </button>

      {/* Previous Page Button */}
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={`px-3 py-2 bg-gray-200 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
      >
        &lsaquo; Newer
      </button>

      {/* Current Page / Total Pages */}
      <div className="px-4 py-2">
        <strong>{currentPage}</strong>
        <span className="mx-1">/</span>
        <span>{totalPages}</span>
      </div>

      {/* Next Page Button */}
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 bg-gray-200 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
      >
        Older &rsaquo;
      </button>

      {/* Last Page Button */}
      <button
        onClick={goToLastPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-2 bg-gray-200 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
