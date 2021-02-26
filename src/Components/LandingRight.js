/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { IoIosCloudDownload } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
// import Pagination from './Pagination';
import PropTypes from 'prop-types';
// import Country from 'Country';
import AllUsers from './AllUsers';
import Male from './pages/Male';
import Female from './pages/Female';
import Single from './pages/Single';
// import api from '../api/index';
// import Pagination from 'react-bootstrap/Pagination';

import '../fontawesome';

const LandingRight = ({ handleMale, handleFemale, gender }) => {
  const [check, setCheck] = useState(false);
  const [users, setUsers] = useState([]);
  const [sex, setSex] = useState('female');
  const [searchedUser, setSearchedUser] = useState('');
  const [country, setCountry] = useState('');
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setuserPerPage] = useState(3);
  // const [display, setDisplay] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [page, setPage] = useState(1);
  // const [single, setSingle] = useState(false);
  // const [all, setAll] = useState(false);
  // const [click, setClick] = useState(false);

  // const [femaleUsers, setFemaleUsers] = useState([]);
  const [id, setId] = useState('');

  const handleClickMale = () => {
    setMale(!male);
  };

  const handleClickFemale = () => {
    setFemale(!female);
  };

  const handleClickSingle = e => {
    setId(e.target.id);
    // setSingle(!single);
  };

  const handleSearch = event => {
    setSearchedUser(event.target.value);
  };

  const handleSelect = event => {
    setCountry(event.target.value);
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  // const handleClick = () => {
  //   setClick(!click);
  // };

  // const handleDisplay = () => {
  //   setDisplay(!display);
  // };

  const getAll = async () => {
    // setLoading(!loading);
    // const response = await fetch(' https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?inc=gender,name,nat');
    // const data = await response.json();
    // setUsers(data);
    // setLoading(loading);
    // console.log(data);
  };

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       const res = await axios.get('https://randomuser.me/api/?results=3')
  //         .then(res => res.json());
  //       setUsers(res.data);
  //     };

  //     fetchUsers();
  //   }, []);
  // https://randomuser.me/api/?results=3
  // const fetchUsers = () => fetch('https://randomuser.me/api/')
  //   .then(res => res.json());

  // const fetchFemale = () => fetch('https://randomuser.me/api/?gender=female')
  //   .then(res => res.json());

  //   fetch('https://randomuser.me/api/?results=3').then(res => res.json()).then(body => localStorage.setItem('data', body));
  //   const newData = localStorage.getItem('data');

  //   console.log(newData);

  // useEffect(() => fetchUsers().then(data => setUsers(data)),
  // fetch('https://randomuser.me/api/?results=3').then(res => res.json()).then(body => setUsers(body));
  // fetchFemale().then(data => setFemaleUsers(data));
  // console.log(users);
  // []);

  // const fetchUsers = () => fetch('https://randomuser.me/api/?results=3').then(res => res.json());

  // useEffect(() => fetchUsers().then(({ res }) => setUsers(res)), []);

  // useEffect(() => {
  // const fetchUsers = async () => {
  // setLoading(!loading);
  // const res = await fetch('https://randomuser.me/api/?results=3')
  //  .then(res => res.json());
  // setUsers(res.data);
  // setLoading(loading);
  // };
  // fetchUsers();
  // getAll();
  // }, []);

  // console.log(femaleUsers);

  //   const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(res => res.json())
      .then(body => setUsers(body.results));
    // const data = localStorage.getItem('data');
    // setUsers(data);
  }, []);

  console.log(users);
  // console.log(total);

  const filteredCountries = users.filter(
    data => data.location.country.toLowerCase().includes(country.toLowerCase()),
    // country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );

  const filterCountry = users.filter(data => {
    if (data.location.country === country) {
      return data;
    }
    return null;
  });

  // const filterSingle = users.filter(data => {
  //   if (data.id.value === id) {
  //     return data;
  //   }
  //   return null;
  // });

  console.log(page);

  return (
    <Col md={6} sm={12} xs={12} className="right">
      <div className="d-flex flex-column right_content">
        <div className="d-flex flex-column right-content-guard">
          <div className="right-top-matter">
            <span className="d-block heading-right">
              { gender === 'female'
                ? 'Female Users'
                : gender === 'male' ? 'Male Users' : 'All Users'}
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
                  <input id="dom" type="checkbox" autoComplete="off" onClick={handleCheck} />
                  <span className="slider round" />
                </label>
                <span className=" d-block toggle-name">Show Country</span>
              </div>
            </div>
          </div>
          <div className="right-mid-matter">
            {/* <AllUsers users={users} /> */}
            {/* {click && <Male />}
            {click && <Female />}
            {click && <Single />}
            {!click && (
            <>
              <AllUsers users={users} />
            </>
            )} */}
            {/* {handleMale && <Male maleUsers={filterMale} />}
            {handleFemale && <Female femaleUsers={filterFemale} />} */}
            {/* {single && <Single />} */}
            {<AllUsers users={users} page={page} sex={gender} />}
            {/* <Single /> */}
            {/* <span>User listing</span>
            <div className="user-listing ">
              <div className="d-flex flex-row">
                <div className="img-container  d-inline-block">
                  <img src="https://user-images.githubusercontent.com/25479050/100477423-98db8000-30e8-11eb-948b-fe31e1b03f5e.png" className="card-img img-fluid" alt="name" />
                </div>
                <div className="summary-content ">
                  <div className="content-card">
                    <span className="d-block title">Shalom Chioma</span>
                    <span className="d-block address">9278 new road kilcoole, waterford</span>
                    <div className="d-flex other-details">
                      <div className="email mr-4">
                        <span className="envelope-wrapper">
                          <i className="lni lni-envelope" />

                        </span>
                        <span className="email-detail">brad.gibson@example.com</span>
                      </div>
                      <div className="tel">
                        <span className="phone-wrapper">
                          <i className="lni lni-phone" />

                        </span>
                        <span className="phone-detail">011-962-7516</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-link d-flex flex-column justify-content-around align-items-center">
                  <div />
                  <div />
                  <button type="submit" aria-label="Search">
                    <FontAwesomeIcon className="arrow-icon" icon="arrow-right" style={{ color: '#666' }} />
                  </button>
                </div>
              </div>
            </div> */}
          </div>
          <div className=" d-flex  justify-content-between right-bottom-matter">
            <button type="submit" className="download_button" aria-label="Search">
              {/* <i className="lni lni-cloud-download d-inline-block" /> */}
              <IoIosCloudDownload className="d-inline-block cloud-download" style={{ color: 'white', fontSize: '1.5rem' }} />
              <span className="d-inline-block">Download results</span>
            </button>
            <div className="pagination-sm paging">
              {/* <Pagination.Prev className="prev" />
              <Pagination.Next className="next" active /> */}
              {/* <Pagination userPerPage={userPerPage} paginate={paginate} /> */}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

// LandingRight.propTypes = {
//   total: PropTypes.arrayOf(
//     PropTypes.shape({
//       cell: PropTypes.string,
//     }),
//   ).isRequired,
// };

LandingRight.propTypes = {
  handleMale: PropTypes.func.isRequired,
  handleFemale: PropTypes.func.isRequired,
};

export default LandingRight;
