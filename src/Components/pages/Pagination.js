/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Pagination = ({ userPerPage, totalUsers, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i += 1) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map(num => (
          <li key={num} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {num}
            </a>

          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
