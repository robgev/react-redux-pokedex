import React from 'react';

const Filter = () => (
  <input type="text" placeholder="Search" onChange={e => this.props.updateSearch(e.target.value)} />
);

export default Filter;
