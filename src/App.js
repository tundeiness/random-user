import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import LandingLeft from './Components/LandingLeft';
import LandingRight from './Components/LandingRight';
import './App.css';

function App() {
  return (

    <Container className="wrapper" fluid>
      <Row>
        <LandingLeft />
        <LandingRight />
      </Row>
    </Container>

  );
}

export default App;
