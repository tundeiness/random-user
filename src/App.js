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
  const [sex, setSex] = useState('all');
  // const [single, setSingle] = useState(false);

  const handleClickMale = () => {
    setMale(!male);
  };

  const handleClickFemale = () => {
    setFemale(!female);
  };

  const handleSex = gender => {
    setSex(gender);
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
          handleSex={handleSex}
        />
        <LandingRight
          handleMale={handleClickMale}
          handleFemale={handleClickFemale}
          gender={sex}
        />
      </Row>
    </Container>

  );
}

export default App;
