import React from "react";
import Logo from "../headers/Logo";
import Menu from "../modals/Menu";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

function InnerHeader(props) {
	const { onShowMenu, showMenu } = props;

	return (
		<OuterContainer>
			<MMenu showMenu={showMenu}>
				<Menu showMenu={showMenu} onShowMenu={onShowMenu} />
			</MMenu>
			<InnerLogo>
				<IconContext.Provider value={{ className: "icon menu-icon" }}>
					<MenuIcon onClick={() => onShowMenu(showMenu)}></MenuIcon>
				</IconContext.Provider>

				<Logo />
			</InnerLogo>
		</OuterContainer>
	);
}

export default InnerHeader;

const OuterContainer = styled.div`
	width: 100%;
	position: sticky;
	top: 0;
	z-index: 100;

	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f1ceb2;

	/* Because we want the header to be sticky later */
	height: 9.6rem;
	padding: 1.4rem 4.8rem;
	// position: relative;
`;

const InnerLogo = styled.div`	display:flex;
align-items:center;
justify-content:center
gap:3.8rem;
`;

const MMenu = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	width: 300px;
	background-color: rgba(197, 197, 197, 0.9);
	z-index: 16;
	list-style: none;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${(props) =>
		props.showMenu ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s;
	li {
		padding: 1.2rem 0;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	}

	a {
		font-weight: 600;
	}
`;

const MenuIcon = styled(IoMenuOutline)`
	cursor: pointer;
`;
