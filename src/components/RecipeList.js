import React, { Component } from 'react';
import Recipe from './Recipe';

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    return (
      <div>
        <h3>Recipe List</h3>
        <Recipe />
      </div>
    );
  }
}
