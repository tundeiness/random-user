/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import {BsChevronRight, } from 'react-icons/bs';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Pagination = ({ userPerPage, totalUsers, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i += 1) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="/left"><BiChevronLeft /></a>
        </li>
        <li className="page-item">
          <a className="page-link" href="/right"><BiChevronRight /></a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
