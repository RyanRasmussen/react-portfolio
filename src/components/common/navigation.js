import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="lcars-bar horizontal">
                <Link to="/"><div className="lcars-title right">RR Protocol</div></Link>
                <Link to="/text"><div className="lcars-title right">Text Tools</div></Link>
            </div>
        )
    }
}