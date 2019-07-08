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
    }`,
    base_url: `https://www.food2fork.com/api/search?key=${
      process.env.REACT_APP_API_KEY
    }`,
    query: '&q=',
    error: ''
  };

  async getRecipes() {
    try {
      const response = await fetch(this.state.url);
      const responseData = await response.json();

      if (responseData.error || responseData.recipes.length === 0) {
        this.setState({
          error:
            'Sorry, but your search did not return any recipes. Please try again or press the search icon for the most popular recipes'
        });
      } else {
        this.setState({
          recipes: responseData.recipes,
          error: ''
        });
      }
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

    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: ''
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <Fragment>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.error ? (
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <h2 className="text-orange text-center text-uppercase mt-5">
                {this.state.error}
              </h2>
            </div>
          </div>
        ) : (
          <RecipeList recipes={this.state.recipes} />
        )}
      </Fragment>
    );
  }
}
