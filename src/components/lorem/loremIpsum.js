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
            generatedText: "",
            numParagraphs: ""
        };

        this.callAPI = this.callAPI.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.generateList = this.generateList.bind(this);
    }
    
    callAPI(payload) {
        return fetch("/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload
        })
            .then(res => {
                return res.json()
                    .then(body => {
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
            .then(data => {
                this.generateList(data);
                return data;
            })
            .catch(err => {
                console.error(err);
            })
    }

    generateList(returnedArr) {
        const mappedText = returnedArr.map(paragraph => {
            return <p key={paragraph.toString()}>{paragraph}</p>
        })

        this.setState({
            generatedText: mappedText
        })
    }

    render() {
        return (
            <Container>
                <Layout />
                <div className="lcars-column full-centered page-wrap lorem-page">
                    <div className="title">
                        <h1>Lorem ipsum generator</h1>
                    </div>
                    <div className="description">
                        <p>Input how many paragraphs you want to generate.</p>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <div className="form-input-cont" id="form-paragraphs">
                            <input type="text" className="paragraph-number" onChange={this.handleChange} value={this.state.numParagraphs} />
                        </div>
                        <div className="form-input-cont" id="form-btn">
                            <Button 
                                color="cosmic"
                                shape="round"
                                label="Generate"
                            />
                        </div>
                    </Form>
                    <div className="generated-text">
                        {this.state.generatedText}
                    </div>
                </div>
            </Container>
        )
    }
}