import React from 'react'
import style from './List.module.css'

let todos = [
  {
    title: 'Foo',
    finished: false,
    expired: false,
    dueToDate: ''
  },
  {
    title: 'Bar',
    finished: false,
    expired: false,
    dueToDate: ''
  },

  {
    title: 'Baz',
    finished: false,
    expired: false,
    dueToDate: ''
  },

  {
    title: 'FooBarBaz',
    finished: false,
    expired: false,
    dueToDate: ''
  },

]

const TodoItem = props => {
  return (
    <li className={style.TodoItem}>
      <input type="checkbox"/> {props.todoTitle}
    </li>
  )
}

const List = props => {

  const todoItems = todos.map((el, i) => (
    <TodoItem key={i} todoTitle={el.title} />
  ))

  return (
    <div className={style.List}>
      <ul>
        {todoItems}
      </ul>
    </div>
  )
}

export default List