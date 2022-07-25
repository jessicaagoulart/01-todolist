import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: -27px;
`;

export const Input = styled.input`
	padding: 16px;
	margin-right: 8px;
	width: 638px;
	background-color: var(--gray-500);
	color: var(--gray-300);

	border: 1px solid var(--gray-700);
	border-radius: 8px;
`;

export const Button = styled.button`
	padding: 16px;
	font-weight: 700;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	background-color: var(--blue);
	color: var(--gray-100);
	border: none;
	border-radius: 8px;

	cursor: pointer;
`;
