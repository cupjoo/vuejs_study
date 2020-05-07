import React from 'react'

const Control = (props) => {
  return (
    <ul>
      <li><a href="create" onClick={(e) => {
          e.preventDefault();
          props.onClick('CREATE');
        }}>create</a></li>
      <li><a href="update" onClick={(e) => {
          e.preventDefault();
        props.onClick('UPDATE');
      }}>update</a></li>
      <li><input type="button" value="delete" onClick={(e) => {
          e.preventDefault();
        props.onClick('DELETE');
      }}></input></li>
    </ul>
  )
}

export default Control
