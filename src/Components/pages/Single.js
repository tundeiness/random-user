/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

// import React, { useEffect } from 'react';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaArrowLeft } from 'react-icons/fa';
import { BiEnvelope, BiPhoneCall } from 'react-icons/bi';
import { MdPhoneAndroid } from 'react-icons/md';
import { IoIosCloudDownload } from 'react-icons/io';
import styles from '../../styles/Single.module.css';
// import '../fontawesome';

const Single = ({ singleData, handleClick }) => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };

  const userData = localStorage.getItem('data');
  // const newData = JSON.stringify(userData);

  console.log(singleData[0]);

  // const joinedDate = singleData[0].registered.date.slice(0, 10);

  return (
    <>
      {/* <div className="d-flex flex-column right_content">
        <div className="d-flex flex-column right-content-guard"> */}
      {/* <div className="right-top-matter">
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
          </div> */}
      <div className={`${styles.rightSingle} d-flex flex-row`}>
        <div className={`${styles.imgContainer} d-flex flex-column border border-success`}>
          <div className={`${styles.span}`}>
            <FaArrowLeft className={`${styles.arrowLeft}`} onClick={e => { handleClick(e); }} />
            <span className={`${styles.inner_span}`}>Results</span>
          </div>
          <div className={`${styles.singleImgContainer}`}>
            <img
              src={singleData[0].picture.large}
              className={`${styles.img} card-img img-fluid`}
              alt={singleData[0].name.first}
            />
          </div>
        </div>
        <div className="d-flex flex-column border border-danger">
          <div className={styles.detail_wrapper}>
            <span className={styles.mid_name}>
              <span>{singleData[0].name.title}</span>
              <span>{singleData[0].name.first}</span>
              <span>{singleData[0].name.last}</span>
              {/* Mrs. Shalom Chioma */}
            </span>
            <span className={styles.mid_age}>{singleData[0].dob.age}</span>
          </div>
          <span className={styles.mid_address}>
            <span>{singleData[0].location.street.number}</span>
            <span>{singleData[0].location.street.name}</span>
            <span>{singleData[0].location.city}</span>
            {/* 9278 new road, kilcoole waterford */}
          </span>
          <div className={`${styles.mid_email}`}>
            <span><BiEnvelope className={`${styles.biEnvelope}`} /></span>
            {' '}
            <span>{singleData[0].email}</span>
          </div>
          <div className={styles.other_wrapper}>
            <span className={styles.join_date}>
              Joined:
              {' '}
              <span>{singleData[0].registered.date.slice(0, 10)}</span>
            </span>
            <div className={styles.mid_tel}>
              <span><BiPhoneCall className={`${styles.biPhoneCall}`} /></span>
              {' '}
              <span>{singleData[0].phone}</span>
            </div>
            <div className={styles.mid_cell}>
              <span><MdPhoneAndroid className={`${styles.biPhoneAndroid}`} /></span>
              {' '}
              <span>{singleData[0].cell}</span>
            </div>
          </div>
        </div>
        {/* <div>
          Last column
        </div> */}
      </div>
      {/* <div className=" d-flex  justify-content-between right-bottom-matter">
            <button type="button" aria-label="Search">
              <i className="lni lni-cloud-download d-inline-block" />
              <span className="d-inline-block">Download results</span>
            </button>
          </div> */}
      {/* </div>
      </div> */}
    </>
  );
};

// Single.propTypes = {
//   singleData: PropTypes.objectOf(PropTypes.shape({

//   }))
// }

Single.propTypes = {
  singleData: PropTypes.arrayOf(
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
  handleClick: PropTypes.func.isRequired,
};

export default Single;
