import React, { Component } from "react";
import Header from '../common/header';
import {
    Container,
  } from 'reactstrap';

export default class ClockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // We're setting the initial date from the time prop
            date: new Date(this.props.time),
            timer: 0,
            timerReadable: "0:0.000",
            start: 0,
            timerRunning: false
        };

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        // adding one second to the initial date handed in from the prop
        const time = new Date(this.state.date)
        this.setState({
            date: new Date(time.setSeconds(time.getSeconds() + 1))
        });
    }

    startTimer() {
        this.setState({
            timer: this.state.timer,
            start: Date.now() - this.state.timer,
            timerRunning: true
        })
        this.timerCounter = setInterval(() => this.setState({
            timer: Date.now() - this.state.start,
            timerReadable: parseInt(this.state.timer / 1000 /60) + ":" + (this.state.timer / 1000 % 60)
        }), 1)
        console.log("start")
    }

    stopTimer() {
        this.setState({ timerRunning: false })
        clearInterval(this.timerCounter)
        console.log("stop")
    }

    resetTimer() {
        this.setState({ 
            timer: 0,
            timerReadable: "0:0.000"
        })
        console.log("reset")
    }

    render() {

        let start = (this.state.timer === 0) ?
            <div 
                className="lcars-element rounded button lcars-golden-tanoi-bg timer-btn start-btn"
                onClick={this.startTimer}
            >
                Start
            </div> :
            null
        
        let resume = (this.state.timer != 0 && !this.state.timerRunning) ?
            <div 
                className="lcars-element rounded button lcars-golden-tanoi-bg timer-btn resume-btn"
                onClick={this.startTimer}
            >
                Resume
            </div> :
            null

        let stop = (this.state.timerRunning) ?
            <div 
                className="lcars-element rounded button lcars-dodger-blue-alt-bg timer-btn stop-btn"
                onClick={this.stopTimer}
            >
                Stop
            </div> :
            null

        let reset = (this.state.timer != 0 && !this.state.timerRunning) ?
            <div 
                className="lcars-element rounded button lcars-rust-bg timer-btn reset-btn"
                onClick={this.resetTimer}
            >
                Reset
            </div> :
            null

        return (
            <Container>
                <Header />
                <div id="left-bar" className="lcars-column start-space lcars-u-1">
                    <div className="lcars-bar lcars-u-1"></div>
                </div>
                <div id="footer" className="lcars-row ">
                    <div className="lcars-elbow left-top lcars-tan-bg"></div>
                    <div className="lcars-bar horizontal both-divider bottom"></div>
                    <div className="lcars-bar horizontal right-end left-divider bottom"></div>
                </div>
                <div className="lcars-column full-centered">
                    <div className="title">
                        <h1>Hello world, the current time is:</h1>
                    </div>
                    <div className="clock-container">
                        <div 
                            className="clock-face lcars-row centered"
                        >
                            {this.state.date.toLocaleTimeString()}
                        </div>
                        <div className="lcars-row centered">
                            <div className="timer-btn-container lcars-row">
                                <div className="lcars-column full-centered fill">
                                    <div className="lcars-row centered">
                                        <div className="lcars-row left-btn right">
                                            {start}
                                            {resume}
                                            {stop}
                                        </div>
                                        <div className="lcars-row right-btn">
                                            {reset}
                                        </div>
                                    </div>
                                    <div
                                        className="clock-face lcars-column centered"
                                    >
                                        <div className="timer-face lcars-u-4">
                                            {this.state.timerReadable}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        )
    }
  };