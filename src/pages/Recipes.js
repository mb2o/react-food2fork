import React, { Component, Fragment } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';

export default class Recipes extends Component {
  constructor(props) {
    super(props);

    this.getRecipes = this.getRecipes.bind(this);
  }

  state = {
    recipes: [],
    search: '',
    url: `https://www.food2fork.com/api/search?key=${
      process.env.REACT_APP_API_KEY
    }`
  };

  async getRecipes() {
    try {
      const response = await fetch(this.state.url);
      const responseData = await response.json();

      this.setState({
        recipes: responseData.recipes
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipes} />
      </Fragment>
    );
  }
}
