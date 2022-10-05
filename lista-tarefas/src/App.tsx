import { useState } from 'react';

import { Header } from './components/header';
import { Tasks } from './components/tasks';
import { InsertTask } from './components/insertTask';

import './styles/main.css';

import { Item } from "./types/Item";

function App() {

  const [listTasks, setListTasks] = useState<Item[]>([]);

  function handleAddTask (taskName: string){
    let newList = [...listTasks];

    newList.push({
      id: listTasks.length + 1,
      name: taskName,
      done: false
    });

    setListTasks(newList);
  }

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <InsertTask onEnter={handleAddTask} />
        {listTasks.map((item, index) => (
          <Tasks key={index} item={item} />
        ))}
    </div>
  )
}

export default App
