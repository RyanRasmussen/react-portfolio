import React, { Component } from "react";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header" className="lcars-row header">
                <div className="lcars-elbow left-bottom lcars-ruest-bg"></div>
                <div className="lcars-bar horizontal">
                    <div className="lcars-title right">RR Protocol</div>
                </div>
                <div className="lcars-bar horizontal right-end decorated"></div>
            </div>

        )
    }
}