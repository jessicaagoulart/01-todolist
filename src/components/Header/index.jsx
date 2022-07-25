import { Container } from "./styled";
import Logo from "../../assets/Logo.svg";

export default function Header() {
	return (
		<Container>
			<img src={Logo} alt="logo" width="128px" />
		</Container>
	);
}
