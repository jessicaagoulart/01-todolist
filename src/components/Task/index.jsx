import { Container, RadioEmpty, TitleConcluded, Title, RadioFilled, Main, Content, Trash } from "./styled";
import VectorIcon from '../../assets/Vector.svg'
import TrashIcon from '../../assets/trash.svg'
import { useDispatch } from 'react-redux'
import { deleteTask, updateTask } from '../../store/tasks/tasks.useCases'

export default function Task({ title, isConcluded, id }) {
	const dispatch = useDispatch()

	function handleConcludedClick() {
		dispatch(updateTask({ id, title, isConcluded: false }))
	}

	function handleUnconcludedClick() {
		dispatch(updateTask({ id, title, isConcluded: true }))
	}

	function handleDeleteClick() {
		dispatch(deleteTask({ id }))
	}

	return (
		<Container >
			{isConcluded &&
				<Content >
					<Main>
						<RadioFilled onClick={() => handleConcludedClick()}>
							<img src={VectorIcon} />
						</RadioFilled>
						<TitleConcluded>{title}</TitleConcluded>
					</Main>

					<Trash onClick={() => handleDeleteClick()}>
						<img src={TrashIcon} />
					</Trash>

				</Content>
			}

			{
				!isConcluded &&
				<Content>
					<Main>
						<RadioEmpty onClick={() => handleUnconcludedClick()} />
						<Title>{title}</Title>
					</Main>

					<Trash onClick={() => handleDeleteClick()}>
						<img src={TrashIcon} />
					</Trash>
				</Content>
			}


		</Container >
	);
}
