import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ActionButton extends Component {
    render() {
        const { label, color, shape, otherClass } = this.props;

        const buttonClass = `lcars-element ${shape || 'rounded'} button lcars-${color || 'pale-canary'}-bg ${otherClass} ${label.toLowerCase()}-btn`
        
        return (
            <div 
                className={buttonClass}
                onClick={this.props.onClick}
            >
                {label}
            </div>
        )
    }
}

ActionButton.propTypes = {
    label: PropTypes.string,
    color: PropTypes.string,
    shape: PropTypes.string,
    otherClass: PropTypes.string
}