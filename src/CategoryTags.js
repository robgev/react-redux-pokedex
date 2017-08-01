import React, { Component } from 'react';
import { connect } from 'react-redux';
import {filterByType} from '../actions/action';

class CategoryTags extends Component {
  render() {
    const { filterByType } = this.props;
    return (
      <div className="buttons">
        <button onClick={() => filterByType('grass')}>grass</button>
        <button onClick={() => filterByType('water')}>water</button>
        <button onClick={() => filterByType('bug')}>bug</button>
        <button onClick={() => filterByType('fire')}>fire</button>
      </div>
    );
  }
}

export default connect(null,{filterByType})(CategoryTags);
