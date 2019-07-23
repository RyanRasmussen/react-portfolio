import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import ClockPage from "./components/clock/clockPage";
import Header from "./components/common/header";
import {
    Container,
  } from 'reactstrap';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/"  component={() => <ClockPage time={new Date()} /> } />
                </Switch>
            </Router>
        );
    }
  }