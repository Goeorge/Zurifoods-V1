import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoPricetags } from "react-icons/io";
import { MdOutlineHelp, MdGroupAdd, MdGroup } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";
import MyAccount from "../accounts/MyAccount";
import styled from "styled-components";

function Menu(props) {
	const { onShowMenu, showMenu } = props;

	let loggedIn = true;

	if (loggedIn)
		return (
			<div>
				<MyAccount onShowMenu={onShowMenu} showMenu={showMenu} />
			</div>
		);

	return (
		<MenuWrapper>
			<CustomClose onClick={() => onShowMenu(showMenu)} />
			<li>
				<a href="#a">About us</a>
			</li>
			<li>
				<a href="#a">My Account</a>
			</li>
			<li>
				<a href="#a">LogIn / Create Account</a>
			</li>
		</MenuWrapper>
	);
}

export default Menu;

const CustomClose = styled(IoCloseSharp)`
	cursor: pointer;
`;

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
