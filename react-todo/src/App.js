import React, { Component } from 'react'
import TodoListTemplate from './components/TodoListTemplate'
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import Palette from './components/Palette'

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']

export default class App extends Component {
  id = 3

  state = {
    input: '',
    color: '#343a40',
    todos: [
      { id: 0, text: 'Sass', checked: false, color: '#343a40' },
      { id: 1, text: 'Typescript', checked: true, color: '#f03e3e' },
      { id: 2, text: 'MobX', checked: false, color: '#12b886' }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    })
  }
  handleCreate = () => {
    this.setState(({ input, todos, color }) => ({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color
      })
    }))
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];

    this.setState({
      todos: [
        ...todos.slice(0, index),
        {
          ...selected,
          checked: !selected.checked
        },
        ...todos.slice(index+1, todos.length)
      ]
    })
  }
  handleRemove = (id) => {
    this.setState(({todos}) => ({
      todos: todos.filter(todo => todo.id !== id)
    }))
  }
  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  render() {
    const { input, todos, color } = this.state;
    const { 
      handleChange, 
      handleCreate, 
      handleKeyPress, 
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <TodoListTemplate
        form={
          <Form
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
            color={color}
          />
        }
        palette={
          <Palette
            colors={colors}
            selected={color}
            onSelect={handleSelectColor}
          />
        }
      >
        <TodoItemList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </TodoListTemplate>
    );
  }
}
