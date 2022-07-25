import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: flex-start;

	max-width: 738px;
	width: 100%;

	padding: 16px;
	margin-bottom: 12px;

	background-color: var(--gray-500);
	border: 1px solid var(--gray-400);
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
	border-radius: 8px;
`;

export const Title = styled.h2`
	color: var(--gray-100);
	font-weight: 400;
	font-size: 14px;
	padding: 0 12px;
	margin: 0;
`;

export const TitleConcluded = styled.h2`
	color: var(--gray-700);
	font-weight: 400;
	font-size: 14px;
	padding: 0 12px;
	margin: 0;
	text-decoration-line: line-through;
`;

export const RadioFilled = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	border-radius: 12px;
	background-color: var(--purple-dark);
	border: 1px solid var(--purple-dark);

	cursor: pointer;
`;

export const RadioEmpty = styled.button`
	width: 24px;
	height: 24px;
	border-radius: 12px;
	border: 1px solid var(--blue);
	background-color: transparent;

	cursor: pointer;
`;

export const Main = styled.div`
	display: flex;
	align-items: center;
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
`;

export const Trash = styled.button`
	width: 24px;
	height: 24px;
	border: none;
	background-color: transparent;

	cursor: pointer;
`;
