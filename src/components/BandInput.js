import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: ''
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Add a Band</label>
          <br />
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

export default BandInput;
