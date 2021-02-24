/* eslint-disable no-unused-vars */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState } from 'react';
// import Col from 'react-bootstrap/Col';
import LandingLeft from './Components/LandingLeft';
import LandingRight from './Components/LandingRight';
import './App.css';

function App() {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  // const [single, setSingle] = useState(false);

  const handleClickMale = () => {
    setMale(!male);
  };

  const handleClickFemale = () => {
    setFemale(!female);
  };

  // const handleClickSingle = () => {
  //   setSingle(!single);
  // };
  return (

    <Container className="wrapper" fluid>
      <Row>
        <LandingLeft
          handleMale={handleClickMale}
          handleFemale={handleClickFemale}
          // handleSingle={handleClickSingle}
        />
        <LandingRight
          handleMale={handleClickMale}
          handleFemale={handleClickFemale}
        />
      </Row>
    </Container>

  );
}

export default App;
