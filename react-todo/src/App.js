import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'

export default class App extends Component {
  render() {
    return (
      <TodoListTemplate form={<Form/>}>
        템플릿 완성
      </TodoListTemplate>
    )
  }
}
