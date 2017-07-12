import React, { Component } from 'react';

class List extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <img src={item.img} alt="" />
        <h2>{item.name}</h2>
        <h2>{item.type}</h2>
      </div>
    );
  }
}

export default List;
