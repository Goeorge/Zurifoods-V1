import React from "react";
import styled from "styled-components";
import Login from "../modals/Login";
import Logo from "../headers/Logo";
import Menu from "../modals/Menu";
import { IoMenuOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { VscAccount } from "react-icons/vsc";

function LandingPageHeader(props) {
	const { onModuleClick, login, onShowMenu, showMenu } = props;

	return (
		<Header>
			<MobileMenu showMenu={showMenu}>
				<Menu showMenu={showMenu} onShowMenu={onShowMenu} />
			</MobileMenu>
			<MenuLogo>
				<IconContext.Provider value={{ className: "icon menu-icon" }}>
					<CustomMenu onClick={() => onShowMenu(showMenu)}></CustomMenu>
				</IconContext.Provider>

				<Logo />
			</MenuLogo>

			<GetStarted>
				<a href="#cta" onClick={() => onModuleClick(login)}>
					<IconContext.Provider value={{ className: "icon account-icon" }}>
						<VscAccount />
					</IconContext.Provider>
					<span>Get Started</span>
				</a>
			</GetStarted>
			{props.login && <Login login={login} onModuleClick={onModuleClick} />}
		</Header>
	);
}

export default LandingPageHeader;

const Header = styled.div`
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

const MenuLogo = styled.div`
	display:flex;
	align-items:center;
	justify-content:center
	gap:3.8rem;
`;
const GetStarted = styled.div`
	font-weight: 600;
	a:visited,
	a:link {
		background-color: #79bc42;
		padding: 1.2rem 2.4rem;
		border-radius: 250px;
		color: #26160f;
	}

	a:active,
	a:hover {
		background-color: #5f8b3c;
	}
`;

const MobileMenu = styled.div`
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

const CustomMenu = styled(IoMenuOutline)`
	cursor: pointer;
`;
// /* MOBILE NAVIGATION */

// .btn-mobile-nav {
//   border: none;
//   background: none;
//   cursor: pointer;

//   /* Hide Icon */
//   display: none;
// }

// .icon-mobile-nav {
//   width: 5.2rem;
//   height: 5.2rem;
//   color: #79bc42;
//   margin-right: 3.2rem;
// }

// .icon-mobile-nav[name="close-outline"] {
//   display: none;
// }

// /* FIXED MENU */

// .sticky .header {
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   width: 100%;
//   background-color: #f1ceb2;
//   height: 8rem;
//   /* padding-top: 0;
//   padding-bottom: 0; */
//   z-index: 999;
//   box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
// }

// .sticky .section-hero {
//   margin-top: 9.6rem;
// }
