import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <h5 className='background text-light text-center p-2 mt-2'>{this.props.q} News</h5>
      </div>
    )
  }
}

