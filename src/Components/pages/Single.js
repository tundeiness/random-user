/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

// import React, { useEffect } from 'react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
// import '../fontawesome';

const Single = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  return (
    <Col md={6} sm={12} xs={12} className="right">
      <div className="d-flex flex-column right_content">
        <div className="d-flex flex-column right-content-guard">
          <div className="right-top-matter">
            <span className="d-block heading-right">User List</span>
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
          <div className="d-flex flex-row right-single">
            <div className="d-flex flex-column">
              <div>First column</div>
            </div>
            <div className="d-flex flex-column">
              <div>Middle column</div>
            </div>
            <div>
              Last column
            </div>
          </div>
          <div className=" d-flex  justify-content-between right-bottom-matter">
            <button type="submit" aria-label="Search">
              <i className="lni lni-cloud-download d-inline-block" />
              <span className="d-inline-block">Download results</span>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

// AllUsers.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       cell: PropTypes.string,
//       dob: PropTypes.objectOf(
//         PropTypes.shape({
//           date: PropTypes.string,
//           age: PropTypes.number,
//         }),
//       ),
//       gender: PropTypes.string,
//       id: PropTypes.objectOf(
//         PropTypes.shape({
//           name: PropTypes.string,
//           value: PropTypes.string,
//         }),
//       ),
//       location: PropTypes.objectOf(
//         PropTypes.shape({
//           street: PropTypes.string,
//           city: PropTypes.string,
//           coordinates: PropTypes.objectOf(
//             PropTypes.shape({
//               longitude: PropTypes.string,
//               latitude: PropTypes.string,
//             }),
//           ),
//           state: PropTypes.string,
//           country: PropTypes.string,
//           postcode: PropTypes.number,
//           timezone: PropTypes.string,
//         }),
//       ),
//       login: PropTypes.objectOf(
//         PropTypes.shape({
//           uuid: PropTypes.string,
//           username: PropTypes.string,
//           password: PropTypes.string,
//           salt: PropTypes.string,
//           md5: PropTypes.string,
//           sha256: PropTypes.string,
//           sha1: PropTypes.string,
//         }),
//       ),
//       name: PropTypes.objectOf(
//         PropTypes.shape({
//           title: PropTypes.string,
//           first: PropTypes.string,
//           last: PropTypes.string,
//         }),
//       ),
//       nat: PropTypes.string,
//       phone: PropTypes.string,
//       picture: PropTypes.objectOf(
//         PropTypes.shape({
//           large: PropTypes.string,
//           medium: PropTypes.string,
//           thumbnail: PropTypes.string,
//         }),
//       ),
//       registered: PropTypes.objectOf(
//         PropTypes.shape({
//           date: PropTypes.string,
//           age: PropTypes.number,
//         }),
//       ),
//       email: PropTypes.string,

//     }),
//   ).isRequired,
// };

export default Single;
