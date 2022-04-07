import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<LogoImg>
			<Link to={"/"}>
				<img alt="zuri Foods logo" src="/img/zurifoods-logo.png" />
			</Link>
		</LogoImg>
	);
}

export default Logo;

const LogoImg = styled.div`
	a {
		img {
			height: 4rem;
		}
		cursor: pointer;
	}
`;
