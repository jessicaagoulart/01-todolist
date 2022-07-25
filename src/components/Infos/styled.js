import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: 92px;
	margin-bottom: 24px;
	max-width: 736px;
	width: 100%;
`;

export const CreatedTasks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-weight: 700;
		font-size: 14px;
		color: var(--blue);
	}
`;

export const ConcludedTasks = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-weight: 700;
		font-size: 14px;
		color: var(--purple);
	}
`;

export const Counter = styled.div`
	background-color: var(--gray-400);
	color: var(--gray-200);

	font-size: 12px;
	font-weight: 700;

	padding: 2px 8px;
	margin-left: 8px;
	border-radius: 999px;
`;
