import React from "react";
import './App.css';
import {Card, Nav, NavLink} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";


function App() {
  return (
      <div>
          <Header />
          <Card id={"cardMainPageFooter"}>
              <Card.Body>
                  <Card.Title>@programmer_2003</Card.Title>
                  <Nav id={"navMainPageFooter"} >
                      <NavLink href={"https://instagram.com/programmer_2003"}>Instagram</NavLink>
                      <NavLink href={"https://github.com/buzurg2003"}>GitHub</NavLink>
                      <NavLink>+7 (777) 123 45 67</NavLink>
                  </Nav>
              </Card.Body>
          </Card>
      </div>
  );
}

export default App;