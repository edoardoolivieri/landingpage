import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleUpdate = (event) => {
  //   //Change the state of term
  //   event.preventDefault();
  //   this.props.searchFunction(event.target.value);
  // };

  handleChange(event) {
    this.setState({value: event.target.value});    
  }

  handleSubmit(event) {
    this.props.searchFunction(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        value={this.state.value}
        type="text"
        className="form-search form-control"
        placeholder="Search for product"
        onChange={this.handleChange}
        />
      </form>
    );
  }
}
