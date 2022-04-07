import React from "react";
import "../../App.css";
import Logo from "../headers/Logo";
import Login from "../modals/Login";
import Menu from "../modals/Menu";
import styled from "styled-components";
import { IoMenuOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

function LocationHeader(props) {
	const { onModuleClick, login, onShowMenu, showMenu, cart } = props;

	return (
		<Fheader>
			<MobileMenu showMenu={showMenu}>
				<Menu showMenu={showMenu} onShowMenu={onShowMenu} />
			</MobileMenu>
			<Hl>
				<IconContext.Provider value={{ className: "icon menu-icon" }}>
					<CustomMenu onClick={() => onShowMenu(showMenu)}></CustomMenu>
				</IconContext.Provider>
				<Logo />
			</Hl>

			<Hc>
				<Location>
					<IconContext.Provider value={{ className: "icon body-icon" }}>
						<BiCurrentLocation />
					</IconContext.Provider>
					<p>Kai plaza</p>
				</Location>
				<DeliveryMode>
					<span>
						<ion-icon className="list-icon" name="navigate-circle"></ion-icon>
					</span>
					<p>Delivery</p>
				</DeliveryMode>
				<FoodSearch>
					<IconContext.Provider value={{ className: "icon body-icon" }}>
						<BsSearch />
					</IconContext.Provider>
					<InputSearch
						type="text"
						className="input-search"
						placeholder="foods, groceries, drinks, etc..."
					></InputSearch>
				</FoodSearch>
			</Hc>
			<Hr>
				<Cart>
					<IconContext.Provider value={{ className: "icon body-icon cart " }}>
						<FaShoppingCart />
					</IconContext.Provider>
					Cart {cart.length}
				</Cart>
				<LoginSpan onClick={() => onModuleClick(login)}>
					<IconContext.Provider value={{ className: "icon account-icon" }}>
						<VscAccount />
					</IconContext.Provider>
					Login
				</LoginSpan>
				{props.login && <Login login={login} onModuleClick={onModuleClick} />}
			</Hr>
		</Fheader>
	);
}

export default LocationHeader;

const Fheader = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	gap: 3.2rem;
	align-items: center;
	justify-content: space-between;
	background-color: #f9f9f9;
`;

const Hl = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;
	font-weight: bold;
	letter-spacing: 0.6px;
`;
const Hc = styled(Hl)`
	flex: 1;
	padding-left: 10rem;
	gap: 4.2rem;
`;
const Hr = styled(Hl)`
	padding-right: 4.8rem;
	gap: 2.2rem;
`;

const Location = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const DeliveryMode = styled(Location)``;

const FoodSearch = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	height: fit-content;
	position: relative;
`;
const InputSearch = styled.input`
	width: 250px;
	border-style: none;
	padding: 10px;
	font-size: 14px;
	letter-spacing: 2px;
	outline: none;
	border-radius: 25px;
	transition: all 0.5s ease-in-out;
	/* background-color: rgba(114, 113, 113, 0.01); */
	padding-right: 40px;
	color: #000;

	&::placeholder {
		color: rgba(0, 0, 0, 0.4);
		font-size: 14px;
		letter-spacing: 2px;
		font-weight: 100;
	}
	&:focus {
		width: 250px;
		border-radius: 0px;
		background-color: transparent;
		border-bottom: 1px solid rgba(24, 24, 24, 0.5);
		transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
	}
`;

const Cart = styled.div`
	position: fixed;
	top: 1;
	right: 10%;
	margin-right: 3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.8rem;
	background-color: rgba(38, 22, 15, 0.8);
	color: #fff;
	padding: 8px 10px;
	border-radius: 25px;

	cursor: pointer;
`;

const LoginSpan = styled.div`
	/* height: 4rem; */
	background-color: rgba(114, 113, 113, 0.2);
	padding: 12px 15px;
	border-radius: 25px;
	cursor: pointer;
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
	margin-left: 1rem;
	margin-right: 1rem;
`;
