import React, {Component} from 'react';
import { Navbar, Nav, FormControl, Container, Form, Button } from "react-bootstrap";
import logo from './logo.png';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../Pages/MainPage";
import Games from "../Pages/Games";
import Movies from "../Pages/Movies";
import News from "../Pages/News";

class Header extends Component {
    render() {
        return (
            <>
            	<Navbar sticky={"top"} collapseOnSelect={true} expand={"md"} bg={"dark"} variant={"dark"}>
                	<Container>
                    	<Navbar.Brand href={"/"}>
                        	<img
                            	src={logo}
                            	height={"30"}
                            	width={"30"}
                            	className={"d-inline-block align-top"}
                            	alt={"Logo"}
                        	/> Апокалипсис
                    	</Navbar.Brand>
                    	<Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                    	<Navbar.Collapse id={"responsive-navbar-nav"}>
                        	<Nav className="me-auto">
                            	<Nav.Link href={"/"}> Главная </Nav.Link>
                            	<Nav.Link href={"/movies"}> Фильмы </Nav.Link>
                            	<Nav.Link href={"/games"}> Игры </Nav.Link>
                            	<Nav.Link href={"/news"}> Новости </Nav.Link>
                        	</Nav>
                        	<Form inline>
                            	<FormControl
                                	type={"text"}
                                	placeholder={"Search"}
                                	className={"mr-sm-2"}
                            	/>
                        	</Form>
                            	<Button variant={"outline-info"}>Search</Button>
                    	</Navbar.Collapse>
                	</Container>
            	</Navbar>

				<Router>
					<Switch>
						<Route exact path={"/"} component={MainPage}/>
						<Route exact path={"/movies"} component={Movies}/>
						<Route exact path={"/games"} component={Games}/>
						<Route exact path={"/news"} component={News}/>
					</Switch>
				</Router>
			</>
        );
    }
}

export default Header;