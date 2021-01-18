import React, {Component} from 'react'

import style from './TaskLists.css'
import List from "../../components/List/List";

class TaskLists extends Component {

  render() {
    return (
      <div className={style.TaskList}>
        <h2>Task List</h2>
        <List />
      </div>
    )
  }
}

export default TaskLists