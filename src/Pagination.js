import React, { Component } from 'react';

import Filter from './Filter';
import CategoryTags from './CategoryTags';
import List from './List';
import reducer from '../reducer/reducer';
import {filter} from '../actions/action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumbers: [],
      filter: '',
    };
  }

  updateSearch = (filter) => {
    this.setState({ filter });
  };

  render() {
    const pokemonsPerPage = 9;
    const { pageNumbers } = this.state;
    const { list, filter } = this.props;
    filter(list);
    console.log('list', this.props.list)
    for (let i = 1; i <= Math.ceil(list.length / pokemonsPerPage); i += 1) {
      pageNumbers.push(i);
    }

    return (
      <div>
        <Filter updateSearch={this.updateSearch} />
        <CategoryTags  />
        <div className="boxes">
          {list.map((item, i) =>
            <div key={i} className="box">
               <List item={item} />
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

export default connect(mapStateToProps, { filter })(Pagination);
