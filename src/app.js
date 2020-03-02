import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClockPage from "./components/clock/clockPage";
import TextTransform from "./components/text/textTransform";
import LoremIpsumGen from "./components/lorem/loremIpsum";
import moment from 'moment-timezone';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/text" component={TextTransform} />
                    <Route path="/lorem" component={LoremIpsumGen} />           
                    <Route exact path="/"  component={() => <ClockPage time={moment().format()} /> } />
                </Switch>
            </Router>
        );
    }
  }