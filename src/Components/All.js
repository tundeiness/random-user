/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { BsArrowRightShort } from 'react-icons/bs';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosCloudDownload } from 'react-icons/io';
import Pagination from './pages/Pagination';
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
  const [usr, setUsr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setuserPerPage] = useState(3);
  const start = (page - 1) * USER_PER_PAGE;
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  // const selectedUser = usr.slice(indexOfFirstUser, indexOfLastUser);

  // const selectedUsers = users.slice(start, start + USER_PER_PAGE);
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
    // alert(e.currentTarget.id);
    // console.log(e.currentTarget.id);
    setId(e.currentTarget.id);
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
    console.log(data.phone);
    if (data.phone === id) {
      localStorage.setItem('data', JSON.stringify(data));
      return data;
    }
    return null;
  });

  const filteredUsers = users.filter(item => {
    if (sex === 'all') return true;
    return item.gender === sex;
  });

  const selectedUser = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  console.log('test =>', selectedUser);

  console.log(users);

  const FilteredData = selectedUser.map(item => (
    <div key={uuid()} id={item.phone} className="user-listing ">
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
          <button className="single_button" id={item.phone} type="button" onClick={e => { handleClickSingle(e); }}>
            {/* <FontAwesomeIcon className="arrow-icon" icon="arrow-right" /> */}
            <BsArrowRightShort className="arrow-icon" icon="arrow-right" />
          </button>
        </div>
      </div>
    </div>

  ));

  return (
    <>

      {single ? null : (
        <div className="right-top-matter">
          <span className="d-block heading-right">
            {/* All Users */}
            { sex === 'female'
              ? 'Female Users'
              : sex === 'male' ? 'Male Users' : 'All Users'}
            {/* {gender === 'all' ? 'All Users' : gender === 'male' ? 'Male Users' : 'Female Users'} */}
          </span>
          <span className="d-block sub-heading-right">filter by</span>
          <div className="d-flex justify-content-between toggle-search-wrapper">
            <div className="search-section-wrapper">
              <button type="submit" aria-label="Search">
                <FontAwesomeIcon className="search-icon" icon="search" />
              </button>
              <input type="text" placeholder="Find in list" name="search" id="search-input" autoComplete="off" />
            </div>
            <div className="country">
              <Dropdown className="dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Country
                </Dropdown.Toggle>
                {' '}
                {' '}
                <Dropdown.Menu className="menu">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
                  {/* <Country filteredCountries={filteredCountries} /> */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="toggle d-flex">
              <label htmlFor="dom" className="switch">
                <input id="dom" type="checkbox" autoComplete="off" />
                <span className="slider round" />
              </label>
              <span className=" d-block toggle-name">Show Country</span>
            </div>
          </div>
        </div>
      )}

      <div className="right-mid-matter">
        {/* {<AllUsers users={users} page={page} sex={gender} />} */}
        {single ? <Single toggleStyle={single} singleData={filterSingle} handleClick={handleClickSingle} /> : FilteredData}
      </div>
      {single ? null : (
        <div className=" d-flex  justify-content-between right-bottom-matter">
          <button type="button" className="download_button" aria-label="Search">
            {/* <i className="lni lni-cloud-download d-inline-block" /> */}
            <IoIosCloudDownload className="d-inline-block cloud-download" style={{ color: 'white', fontSize: '1.5rem' }} />
            <span className="d-inline-block">Download results</span>
          </button>
          <div className="pagination-sm paging">
            <Pagination userPerPage={userPerPage} totalUsers={users.length} prevPage={prevPage} nextPage={nextPage} />
            {/* <Pagination.Prev className="prev" />
         <Pagination.Next className="next" active /> */}
            {/* <Pagination userPerPage={userPerPage} paginate={paginate} /> */}
          </div>
        </div>
      )}
      {/* {single ? <Single singleData={filterSingle} handleClick={handleClickSingle} /> : FilteredData} */}
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
