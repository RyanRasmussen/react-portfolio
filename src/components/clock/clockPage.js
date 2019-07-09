import React, { Component } from "react";

export default class ClockPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // We're setting the initial date from the time prop
            date: new Date(this.props.time)
        };
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

    render() {
        return (
            <div>
                <div className="title">
                    <h1>Hello world, the current time is:</h1>
                </div>
                <div className="clock-container">
                    <div 
                        className="clock-face"
                    >
                        {this.state.date.toLocaleTimeString()}
                    </div>
                </div>
            </div>

        )
    }
  };