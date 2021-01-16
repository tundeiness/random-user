/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';
import '../fontawesome';

const AllUsers = ({ users }) => {
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  // const data = users;
  // console.log(users);
  // console.log(data);

  // <option value={datalist[item].code} key={index}>
  //     {datalist[item].symbol}
  // </option>

  //   const kees = Object.values(users);
  //   console.log(kees);

  // const kees2 = Object.values(kees);
  // console.log(kees2);

  // const kip = Object.entries(users);
  // console.log(kip[0][1][0].email);

  //   const newObj = Object.fromEntries(Object.entries(users).map(([k, v]) => [k, v])).results;
  // console.log(newObj);

  // const usersList = newObj.map(item => {
  //   const container = {};
  //   container[item.gender] = item.gender;
  //   return container;
  // });

  // console.log(usersList);

  // const handleApiData = () => localStorage.setItem('allUser', newObj);

  // const allUser = localStorage.getItem('allUser');

  // console.log(allUser);

  // useEffect(() => {
  //   handleApiData();
  // }, []);

  const AllData = users.map(item => (
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
            <FontAwesomeIcon className="arrow-icon" icon="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {AllData}
    </>
  );
};

export default AllUsers;
