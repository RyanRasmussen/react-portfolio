import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="menu-items">
                <Link to="/"><div className="lcars-title">RR Protocol</div></Link>
                <Link to="/text"><div className="lcars-title">Text Tools</div></Link>
            </div>
        )
    }
}