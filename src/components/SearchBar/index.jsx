import { useState } from 'react';
import { createTask } from '../../store/tasks/tasks.useCases'
import { useDispatch } from 'react-redux'
import PlusIcon from '../../assets/plus.svg'
import { Input, Button, Container } from './styled'
import { v4 as uuid } from 'uuid';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [tastkTitle, setTaskTitle] = useState("");

  function handleCreateTask(e) {
    const id = uuid();
    if (tastkTitle !== "") {
      dispatch(createTask({ title: tastkTitle, id }))
    } else {
      return;
    }
  }

  return (
    <Container>
      <Input placeholder='Adicione uma nova tarefa' onChange={(e) => setTaskTitle(e.target.value)} value={tastkTitle} />
      <Button type='button' onClick={() => {
        handleCreateTask()
        setTaskTitle("")
      }}>
        Criar
        <img src={PlusIcon} />
      </Button>
    </Container>
  )

}
