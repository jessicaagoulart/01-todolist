import { useSelector } from 'react-redux'

import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Infos from './components/Infos'
import EmptyIcon from './assets/Empty.svg'
import { Container } from './styled'
import Task from './components/Task'


function App() {
  const tasks = useSelector((state) => state.tasksReducer.list);

  return (
    <Container>
      <Header />
      <SearchBar />

      <Infos />

      {tasks.map((task) =>
        <Task key={task.id} id={task.id} title={task.title} isConcluded={task.isConcluded} />
      )}

      {tasks.length === 0 && <img src={EmptyIcon} />}
    </Container>

  )
}

export default App
