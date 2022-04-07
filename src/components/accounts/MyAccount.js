import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

function MyAccount(props) {
	const { onShowMenu, showMenu } = props;
	return (
		<MyAccountWrapper>
			<CustomClose onClick={() => onShowMenu(showMenu)} />
			<MyAccountLinks>
				<a href="#a">
					<span>Orders</span>
				</a>
				<a href="#a">
					<span>Favorite</span>
				</a>
				<a href="#a">
					<span>Wallet</span>
				</a>
				<a href="#a">
					<span>Promotions</span>
				</a>
				<a href="#a">
					<span>Invite Friends</span>
				</a>
			</MyAccountLinks>
			<MyAccountActions>
				<span>Add Meal / Restaurant</span>
				<span>Sign Out</span>
			</MyAccountActions>
		</MyAccountWrapper>
	);
}

export default MyAccount;

const MyAccountWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	span {
		color: #5d483c;
	}
`;

const MyAccountLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	a {
		border-bottom: 0.2px solid rgba(0, 0, 0, 0.1);
		padding: 2rem;
	}
`;

const MyAccountActions = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
`;

const CustomClose = styled(IoCloseSharp)`
	cursor: pointer;
`;
