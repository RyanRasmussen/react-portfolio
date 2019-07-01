import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import ClockPage from "./components/clock/clockPage";
import {
    Container,
  } from 'reactstrap';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Container>
                <Switch>
                    <Route exact path="/"  component={ ClockPage } />
                </Switch>
                </Container>
            </Router>
        );
    }
  }