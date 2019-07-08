import React, { Component } from 'react';

export default class Recipe extends Component {
  render() {
    const { title, publisher, source_url, image_url } = this.props;

    return (
      <div>
        <h4>{title}</h4>
      </div>
    );
  }
}
