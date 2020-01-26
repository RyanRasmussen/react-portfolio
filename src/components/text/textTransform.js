import React, { Component } from "react";
import Layout from '../common/lcarsLayout';
import {
    Container, Form
  } from 'reactstrap';
import Button from '../common/actionButton';

export default class TextTransform extends Component {
    constructor(props) {
        super(props);
        this.state = { textToTransform: '' };

        this.handleChange = this.handleChange.bind(this);
        this.capitalize = this.capitalize.bind(this);
        this.lowercase = this.lowercase.bind(this);
        this.uppercase = this.uppercase.bind(this);
    }

    handleChange(event) {
        const { target } = event;
        const { value, name } = target;

        this.setState({ 
            textToTransform: value
        })
    }

    capitalize() {
        const capText = this.state.textToTransform.toLowerCase();
        const capitalized = capText.replace(/([^a-z])([a-z])(?=[a-z]{2})|^([a-z])/g, function(m){ return m.toUpperCase(); })
        this.setState({
            textToTransform: capitalized
        });
    }

    lowercase() {
        const lowerText = this.state.textToTransform;
        const lowercase = lowerText.toLowerCase();
        this.setState({
            textToTransform: lowercase
        });
    }

    uppercase() {
        const upperText = this.state.textToTransform;
        const uppercase = upperText.toUpperCase();
        this.setState({
            textToTransform: uppercase
        });
    }

    render() {
        return (
            <Container>
                <Layout />
                <div className="lcars-column full-centered">
                    <div className="title">
                        <h1>Paste your code below:</h1>
                        <Form>
                            <textarea 
                                value={this.state.textToTransform}
                                onChange={this.handleChange} 
                                className="lcars-text-box"
                            ></textarea>
                            <div className="btn-container">
                                <Button 
                                    color="pale-canary"
                                    shape="left-rounded"
                                    label="Capitalize"
                                    onClick={this.capitalize}
                                />
                                <Button 
                                    color="danub"
                                    shape="simple"
                                    label="Lowercase"
                                    onClick={this.lowercase}
                                />
                                <Button 
                                    color="atomic-tangerine"
                                    shape="right-rounded"
                                    label="Uppercase"
                                    onClick={this.uppercase}
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        )
    }
}