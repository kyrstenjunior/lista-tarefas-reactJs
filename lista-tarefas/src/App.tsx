import { Header } from './components/header';
import './styles/main.css';

import { Tasks } from './components/tasks';
import { InsertTask } from './components/insertTask';

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <InsertTask />
      <Tasks />
    </div>
  )
}

export default App
