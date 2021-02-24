/* eslint-disable react/prop-types */
// import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
// import IoIosArrowForward from 'react-icons/io';

const Male = ({ allMale }) => {
  const Male = allMale.map(item => (
    <div key={uuid()} className="user-listing ">
      <div className="d-flex flex-row justify-content-between">
        <div className="img-container  d-inline-block">
          <img src={item.picture.large} className="card-img img-fluid" alt={item.name.first} />
        </div>
        <div className="summary-content ">
          <div className="content-card">
            <span className="d-inline-block mr-2 title">
              {item.name.first}
            </span>
            <span className="d-inline-block title">{item.name.last}</span>
            <div className="seperator">
              <span className="d-inline-block mr-1 address">{item.location.street.number}</span>
              <span className="d-inline-block mr-1 address">
                {item.location.street.name}
                ,
              </span>
              <span className="d-inline-block address">{item.location.city}</span>
            </div>
            <div className="d-flex other-details">
              <div className="email mr-4">
                <span className="envelope-wrapper pr-2">
                  <i className="lni lni-envelope" />
                </span>
                <span className="email-detail">{item.email}</span>
              </div>
              <div className="tel">
                <span className="phone-wrapper pr-2">
                  <i className="lni lni-phone" />
                </span>
                <span className="phone-detail">{item.cell}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="single-link d-flex flex-column justify-content-around align-items-center">
          <div />
          <div />
          <button type="submit" aria-label="Search">
            {/* <IoIosArrowForward className="arrow-icon" icon="arrow-right" /> */}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Male />
    </>
  );
};

export default Male;
