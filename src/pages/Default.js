import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h2 className="text-light text-uppercase">
          You are in the wrong place
        </h2>
        <Link to="/" className="text-uppercase btn btn-secondary btn-lg mt-3">
          Go Home
        </Link>
      </Header>
    );
  }
}
