import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import Button from "./components/forms/buttons/Button.jsx";
import '../src/App.css';


function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task.trim() === '') {
      return; 
    }

    let newList = [...list];

    if (editIndex !== null) {

      newList[editIndex] = task;
      setEditIndex(null);
    } else {
   
      newList.push(task);
    }

    setList(newList);
    setTask(''); 
  }

  function removeTask(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function editTask(index) {
    setTask(list[index]);
    setEditIndex(index);
  }

  return (
    <>
      <h1>Todo App</h1>

      <input
        placeholder="Enter task"
        value={task}
        onChange={handleChange}
      />
      <Button title="ADD" handler={addTask} />

      <ul>
        {list.map((task, index) => (
          <li key={index}>
            {task}
            <span onClick={() => editTask(index)}>
              <FontAwesomeIcon icon={faEdit} />
            </span>
            <span onClick={() => removeTask(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
