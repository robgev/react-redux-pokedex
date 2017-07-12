import React, { Component } from 'react';

import Filter from './Filter';
import CategoryTags from './CategoryTags';
import List from './List';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ind: '',
      hide: 'default',
      currentPage: 1,
      pokemonsPerPage: 9,
      pageNumbers: [],
    };
  }
  handleClick = (event) => {
    this.setState({ currentPage: Number(event.target.id) });
  };
  updateSearch = (filter) => {
    this.setState({ filter });
  };
  filter = (list) => {
    if (!this.state.filter) {
      return list;
    }
    return list.filter(item =>
    item.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0);
  };
  filterByType = (name) => {
    const { list } = this.props;
    list.filter((item) => {
      if (item.type !== [name]) {
        this.setState({ hide: [name] });
        return true;
      }
      return false;
    });
  };

  render() {
    const { currentPage, pokemonsPerPage, hide, pageNumbers } = this.state;
    const { list } = this.props;

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const currentPokemons = list.slice(indexOfFirstPokemon, indexOfLastPokemon);

    for (let i = 1; i <= Math.ceil(list.length / pokemonsPerPage); i += 1) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <Filter updateSearch={this.updateSearch} />
        <CategoryTags filterByType={this.filterByType} />
        <div className="boxes">
          {this.filter(currentPokemons).map((item, i) =>
            <div key={i} className="box">
              {hide == item.type && <List item={item} />}
              {hide == 'default' && <List item={item} />}
            </div>)
          }
        </div>
        <div className="pages">
          {
            pageNumbers.map(number =>
              <li className="page" key={number} id={number} onClick={this.handleClick}>{number}</li>,
            )
          }
        </div>
      </div>
    );
  }
}

export default Pagination;
