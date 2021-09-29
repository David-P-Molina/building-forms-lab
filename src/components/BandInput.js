import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }
  
  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor='band-name'>Band Name: </label>
          <input
            type='text'
            name="name"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
