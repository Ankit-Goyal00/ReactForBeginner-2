import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import {Container , Row, Col} from 'reactstrap';
import Menu from './components/Menu.js';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.js'
import Add from './components/Add.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Course from './components/Course.js'
import All from './components/All.js'
function App() {
  return (
    <div>
   <Router>
      <Header />
      <Container>
        <Row>
          <Col md={4}>
            <Menu />
          </Col>
          <Col md={8}>
            <Route path="/" component={Home} exact />
            <Route path="/Add Course" component={Add} exact />
            <Route path="/View Course" component={All} exact />
            <Route path="/About" component={About} exact />
            <Route path="/Contact" component={Contact} exact />
          </Col>
        </Row>
      </Container>
      </Router>
      
   
    </div>
  );
}

export default App;
