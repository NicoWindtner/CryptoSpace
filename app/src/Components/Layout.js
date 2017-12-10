import React, { Component } from 'react';


export default class Navigation extends Component {

  constructor() {
    super();

    this.state = {
      categories: [
        "All News",
        "Bitcoin",
        "Exchanges"
      ],
      searchToken: ""
    };
  }

  handleSearchChange(e) {
    this.setState({
      searchToken: e.target.value
    });
  }

  render() {
    return (
      <div>
        <div className="subscribeInformation">
          <h4>Don't miss any news and subscribe to get updated about everything!<span className="subscribeButton">Subscribe</span></h4>
        </div>
        <nav>
          <div className="nav-center">
            <h3>
              <span className="capitalLetter">C</span>RYPTO
              <span className="capitalLetter">S</span>PACE
            </h3>
            {
              this.state.categories.map( (category, index) => {
                return (
                  <a href={ category } key={ index }><p>{ category }</p></a>
                )
              })
            }
            <button>Search</button>
            <input
              placeholder="Bitcoin"
              value={ this.state.searchToken }
              onChange={ (e) => this.handleSearchChange(e) }
            />
          </div>
        </nav>
      </div>
    );
  }
  
}