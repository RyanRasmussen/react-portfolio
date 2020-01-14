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
    }

    handleChange(event) {
        const { target } = event;
        const { value, name } = target;

        this.setState({ 
            textToTransform: value
        })
    }

    capitalize(event) {
        console.log(event);
        const capitalized = event.replace(/\b\w/g, function(m){ return m.toUpperCase(); })
        this.setState({
            textToTransform: capitalized
        });
    }
    render() {
        return (
            <Container>
                <Layout />
                <div className="lcars-column full-centered">
                    <div className="title">
                        <h1>Paste your code below:</h1>
                        <Form onSubmit={this.capitalize}>
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
                                    type="submit"
                                />
                                <Button 
                                    color="danub"
                                    shape="simple"
                                    label="Lowercase"
                                />
                                <Button 
                                    color="atomic-tangerine"
                                    shape="right-rounded"
                                    label="Uppercase"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        )
    }
}