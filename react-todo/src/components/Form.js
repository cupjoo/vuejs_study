import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
  render() {
    const {value, onChange, onCreate, onKeyPress, color } = this.props
    return (
      <div className="form">
        <input style={{color}} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="create-button" onClick={onCreate}>
          추가
        </div>
      </div>
    )
  }
}
