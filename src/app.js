import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClockPage from "./components/clock/clockPage";
import TextTransform from "./components/text/textTransform";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/text" component={TextTransform} />             
                    <Route exact path="/"  component={() => <ClockPage time={new Date()} /> } />
                </Switch>
            </Router>
        );
    }
  }