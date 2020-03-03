import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="menu-items">
                <Link to="/"><div className="lcars-element button lcars-rust-bg">Clock Tools</div></Link>
                <Link to="/text"><div className="lcars-element button lcars-anakiwa-bg">Text Tools</div></Link>
                <Link to="/lorem"><div className="lcars-element button lcars-pale-canary-bg lcars-u-2-1">Lorem Ipsum Generator</div></Link>
            </div>
        )
    }
}