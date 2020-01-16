import React, { Component } from "react";
import Layout from '../common/lcarsLayout';
import Button from '../common/actionButton';
import DatePicker from "react-datepicker";
import {
    Container,
  } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class ClockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // We're setting the initial date from the time prop
            date: new Date(this.props.time),
            timer: 0,
            timerReadable: "0:0.000",
            start: 0,
            timerRunning: false,
            startDate: new Date(this.props.time),
            dateDiff: 0
        };

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
    }

    stopTimer() {
        this.setState({ timerRunning: false })
        clearInterval(this.timerCounter)
    }

    resetTimer() {
        this.setState({ 
            timer: 0,
            timerReadable: "0:0.000"
        })
    }

    handleChange(date) {
        let daysDiff;
        let diff = Math.abs(date.getTime() - this.state.date.getTime());
        if (date.getTime() > this.state.date.getTime()) {
            daysDiff = Math.ceil(diff / (24*60*60*1000))
        } else {
            daysDiff = Math.floor(diff / (24*60*60*1000))
        }
        
        this.setState({ 
            startDate: date,
            dateDiff: daysDiff
        })
    }

    render() {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
          
        let leftBtn;

        if (this.state.timer === 0) {
            leftBtn = <Button 
                onClick={this.startTimer}
                color="golden-tanoi"
                shape="rounded"
                otherClass="timer-btn"
                label="Start"
            />
        } else if (this.state.timer != 0 && !this.state.timerRunning) {
            leftBtn = <Button 
                onClick={this.startTimer}
                color="golden-tanoi"
                shape="rounded" 
                otherClass="timer-btn"
                label="Resume"
            />
        } else if (this.state.timerRunning) {
            leftBtn = <Button 
                onClick={this.stopTimer}
                color="dodger-blue-alt"
                shape="rounded"
                otherClass="timer-btn"
                label="Stop"
            />
        }

        let reset = (this.state.timer != 0 && !this.state.timerRunning) ?
            <Button 
                onClick={this.resetTimer}
                color="rust"
                shape="rounded"
                otherClass="timer-btn"
                label="Reset"
            /> :
            null

        return (
            <Container>
                <Layout />
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
                                            {leftBtn}
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
                                    <div
                                        className="lcars-column centered"
                                    >
                                        <div className="lcars-row">
                                            <DatePicker
                                                className="lcars-element lcars-dodger-blue-bg right-rounded date-picker"
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="lcars-row">
                                            Today's date - {monthNames[this.state.date.getMonth()]} {this.state.date.getDate()}, {this.state.date.getFullYear()} - is {this.state.dateDiff} day{this.state.dateDiff === 1 ? '' : 's'} away from the selected date.
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