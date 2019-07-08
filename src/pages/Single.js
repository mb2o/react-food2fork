import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Single extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      id,
      recipe: {},
      loading: true
    };
  }

  async componentDidMount() {
    const url = `https://www.food2fork.com/api/get?key=${
      process.env.REACT_APP_API_KEY
    }&rId=${this.state.id}`;
    try {
      const response = await fetch(url);
      const responseData = await response.json();

      this.setState({ recipe: responseData.recipe, loading: false });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-uppercase text-orange text-center">
                Loading Recipe...
              </h2>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link
              to="/recipes"
              className="btn btn-warning mb-5 text-capitalize">
              Back to Recipes
            </Link>
            <img
              src={image_url}
              className="d-block w-100"
              style={{ maxHeight: '20rem' }}
              alt="recipe"
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-warning text-capitalize text-slanted">
              Provided by {publisher}
            </h6>

            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferred"
              className="btn btn-primary mt-2 text-capitalize">
              Publisher Webpage
            </a>

            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferred"
              className="btn btn-success mt-2 mx-2 text-capitalize">
              Recipe Url
            </a>

            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((item, index) => (
                <li key={index} className="list-group-item text-slanted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
