import React, { Component } from "react";
import Layout from '../common/lcarsLayout';
import Button from '../common/actionButton';
import {
    Container,
    Form
  } from 'reactstrap';
import PropTypes from 'prop-types';

export default class LoremIpsumGen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            apiResponse: "",
            numParagraphs: ""
        };

        this.callAPI = this.callAPI.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    callAPI(payload) {
        return fetch("http://127.0.0.1:5000/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload
        })
            .then(res => {
                res.json()
                    .then(body => {
                        this.setState({ apiResponse: body })
                        return body;
                    })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    handleChange(event) {
        const { target } = event;
        const { value, name } = target;

        this.setState({ 
            numParagraphs: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const temp = JSON.stringify({ num: this.state.numParagraphs });

        this.callAPI(temp)
            .then(res => {
                console.log(res);
                //this.setState({ apiResponse: res })
            })
    }

    render() {
        return (
            <Container>
                <Layout />
                <div className="lcars-column full-centered page-wrap">
                    <div className="title">
                        <h1>Lorem ipsum generator</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <input type="number" className="paragraph-number" onChange={this.handleChange} value={this.state.numParagraphs} />
                            <Button 
                                color="cosmic"
                                shape="round"
                                label="Generate"
                            />
                        </Form>
                        <div className="generated-text">
                            {this.state.apiResponse}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}