import React, { Component } from "react";
import Layout from '../common/lcarsLayout';
import {
    Container,
  } from 'reactstrap';

export default class TextTransform extends Component {
    render() {
        return (
            <Container>
                <Layout />
                <div className="lcars-column full-centered">
                    <div className="title">
                        <h1>Hello world, the current time is:</h1>
                    </div>
                </div>
            </Container>
        )
    }
}