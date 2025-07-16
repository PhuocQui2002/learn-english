import React from "react";
("use client");

import { Pagination } from "flowbite-react";
import { useState } from "react";
function PaginationComponent({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center dark:bg-gray-700">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}

export default PaginationComponent;
