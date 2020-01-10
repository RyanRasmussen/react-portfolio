import React, { Component } from "react";
import Navigation from "./navigation";

export default class Layout extends Component {
    render() {
        return (
            <div className="app-container-layout">
                <div id="header" className="lcars-row header">
                    <div className="lcars-elbow left-bottom lcars-ruest-bg"></div>
                    <Navigation />
                    <div className="lcars-bar horizontal right-end decorated"></div>
                </div>
                <div id="left-bar" className="lcars-column start-space lcars-u-1">
                    <div className="lcars-bar lcars-u-1"></div>
                </div>
                <div id="footer" className="lcars-row ">
                    <div className="lcars-elbow left-top lcars-tan-bg"></div>
                    <div className="lcars-bar horizontal both-divider bottom"></div>
                    <div className="lcars-bar horizontal right-end left-divider bottom"></div>
                </div>
            </div>
        )
    }
}