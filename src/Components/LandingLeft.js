import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import LandingRight from './LandingRight';
import '../fontawesome';

const Landing = ({ handleMale, handleFemale }) => {
  const [big, setShowBig] = useState(false);

  const toggleIcon = () => {
    setShowBig(!big);
  };
  return (

    <Col md={6} sm={12} xs={12} className="left">
      <div className="left_content">
        <div className="top-matter">
          <div className="introduction">
            <span className="hello">Hello, </span>

            <span className="name">emerald</span>
          </div>
          <span className="message">Welcome to your dashboard, kindly sort through the user base</span>
          <div className="search-wrapper">
            <button type="submit" aria-label="Search">
              <FontAwesomeIcon className="search-icon" icon="search" />
            </button>
            <input type="text" placeholder="Find a user" name="search" id="search-text-input" autoComplete="off" />
          </div>
        </div>

        <div className="bottom-matter">
          <p className="interlude">Show Users</p>
          <div className="d-flex collections">
            <div className="d-flex flex-column user-wrapper pr-4">
              <button type="button" className="btn-user">
                <FontAwesomeIcon className="users-icon" icon="users" onClick={toggleIcon} style={{ color: '#fff', fontSize: setShowBig ? '1rem' : undefined }} />
              </button>
              <span>All Users</span>
            </div>
            <div className="d-flex flex-column male-wrapper pr-4" onClick={() => handleMale} onKeyPress={handleMale} role="button" aria-hidden>
              <button type="button" className="btn-male">
                <FontAwesomeIcon className="male-icon" icon="male" style={{ color: '#fff' }} />
              </button>
              <span>Male Users</span>
            </div>
            <div className="d-flex flex-column female-wrapper" onClick={() => handleFemale} onKeyPress={handleFemale} role="button" aria-hidden>
              <button type="button" className="btn-female">
                <FontAwesomeIcon className="female-icon" icon="female" style={{ color: '#fff' }} />
              </button>
              <span>Female Users</span>
            </div>
          </div>
        </div>
      </div>
    </Col>

  );
};

Landing.propTypes = {
  handleMale: PropTypes.func.isRequired,
  handleFemale: PropTypes.func.isRequired,
};

export default Landing;
