import { Container, CreatedTasks, ConcludedTasks, Counter } from "./styled"
import { useSelector } from 'react-redux'

export default function Infos() {

  const tasks = useSelector((state) => state.tasksReducer.list);

  const concludedTasks = tasks.filter((task) => task.isConcluded === true).length;

  return (
    <Container>
      <CreatedTasks>
        <p>Tarefas criadas</p>
        <Counter>{tasks.length}</Counter>
      </CreatedTasks>

      <ConcludedTasks>
        <p>Concluídas</p>
        <Counter>{concludedTasks} de {tasks.length}</Counter>
      </ConcludedTasks>
    </Container>
  )
}