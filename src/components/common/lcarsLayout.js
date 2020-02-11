import React, { Component } from "react";
import Menu from "./menu";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        });
    }
    
    render() {
        let menuText = this.state.menuOpen ? "Close" : "Menu";

        return (
            <div className="app-container-layout">
                <div id="header" className="lcars-row header">
                    <div className="lcars-elbow left-bottom lcars-ruest-bg"></div>
                    <div className="lcars-bar horizontal menu">
                        <div 
                            className="menu-label lcars-title right"
                            onClick={this.toggleMenu}>{menuText}</div>
                        <Menu menuOpen={this.state.menuOpen} />
                    </div>
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