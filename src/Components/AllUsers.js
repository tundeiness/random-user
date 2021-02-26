/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { BsArrowRightShort } from 'react-icons/bs';
import Single from './pages/Single';
import Male from './pages/Male';
import Female from './pages/Female';
import Gender from './pages/Gender';
import { USER_PER_PAGE } from '../utils/constants';
import '../fontawesome';

const AllUsers = ({ users, page, sex }) => {
  console.log(page);
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  const [single, setSingle] = useState(false);
  const [id, setId] = useState('');
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const start = (page - 1) * USER_PER_PAGE;

  const selectedUsers = users.slice(start, start + USER_PER_PAGE);
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

  const handleClickMale = () => {
    setMale(!male);
  };

  const handleClickFemale = () => {
    setFemale(!female);
  };

  const handleClickSingle = e => {
    setId(e.target.id);
    setSingle(!single);
  };

  const filterMale = users.filter(data => {
    if (data.gender === 'male') {
      return data;
    }
    return null;
  });

  const filterFemale = users.filter(data => {
    if (data.gender === 'female') {
      return data;
    }
    return null;
  });

  const filterSingle = users.filter(data => {
    if (data.id.value === id) {
      return data;
    }
    return null;
  });

  const filteredUsers = users.filter(item => {
    if (sex === 'all') return true;
    return item.gender === sex;
  });

  console.log(users);

  const FilteredData = filteredUsers.map(item => (
    <div key={uuid()} id={`${item.id.value}`} className="user-listing ">
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
          <button className="single_button" type="button" onClick={e => { handleClickSingle(e); }}>
            {/* <FontAwesomeIcon className="arrow-icon" icon="arrow-right" /> */}
            <BsArrowRightShort className="arrow-icon" icon="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {single ? FilteredData : <Single singleData={filterSingle} />}
      {/* {FilteredData} */}
    </>
  );
};

AllUsers.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      cell: PropTypes.string,
      dob: PropTypes.objectOf(
        PropTypes.shape({
          date: PropTypes.string,
          age: PropTypes.number,
        }),
      ),
      gender: PropTypes.string,
      id: PropTypes.objectOf(
        PropTypes.shape({
          name: PropTypes.string,
          value: PropTypes.string,
        }),
      ),
      location: PropTypes.objectOf(
        PropTypes.shape({
          street: PropTypes.string,
          city: PropTypes.string,
          coordinates: PropTypes.objectOf(
            PropTypes.shape({
              longitude: PropTypes.string,
              latitude: PropTypes.string,
            }),
          ),
          state: PropTypes.string,
          country: PropTypes.string,
          postcode: PropTypes.number,
          timezone: PropTypes.string,
        }),
      ),
      login: PropTypes.objectOf(
        PropTypes.shape({
          uuid: PropTypes.string,
          username: PropTypes.string,
          password: PropTypes.string,
          salt: PropTypes.string,
          md5: PropTypes.string,
          sha256: PropTypes.string,
          sha1: PropTypes.string,
        }),
      ),
      name: PropTypes.objectOf(
        PropTypes.shape({
          title: PropTypes.string,
          first: PropTypes.string,
          last: PropTypes.string,
        }),
      ),
      nat: PropTypes.string,
      phone: PropTypes.string,
      picture: PropTypes.objectOf(
        PropTypes.shape({
          large: PropTypes.string,
          medium: PropTypes.string,
          thumbnail: PropTypes.string,
        }),
      ),
      registered: PropTypes.objectOf(
        PropTypes.shape({
          date: PropTypes.string,
          age: PropTypes.number,
        }),
      ),
      email: PropTypes.string,

    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};

export default AllUsers;
