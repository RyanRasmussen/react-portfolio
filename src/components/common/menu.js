import React, { Component } from "react";
import Navigation from "./navigation";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: this.props.menuOpen,
        }
    }
    render() {
        let showMenu = this.props.menuOpen ? "show" : "hidden";
        return (
            <div className={`menu-container ${showMenu}`}>
                <div id="top-bar" className="lcars-row">
                    <div className="lcars-bar horizontal left-end decorated lcars-dodger-blue-bg"></div>
                    <div className="lcars-bar horizontal lcars-dodger-blue-bg"></div>
                    <div className="lcars-elbow right-bottom lcars-dodger-blue-bg"></div>
                </div>
                <Navigation />
                <div id="right-bar" className="lcars-column start-space lcars-u-1">
                    <div className="lcars-bar lcars-u-1 lcars-dodger-blue-bg"></div>
                </div>
                <div id="bottom-bar" className="lcars-row ">
                    <div className="lcars-bar horizontal left-end left-divider bottom lcars-dodger-blue-bg"></div>
                    <div className="lcars-bar horizontal both-divider bottom lcars-dodger-blue-bg"></div>
                    <div className="lcars-elbow right-top lcars-dodger-blue-bg"></div>
                </div>
            </div>
        )
    }
}