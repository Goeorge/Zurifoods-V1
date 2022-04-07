import React from "react";
import "../App.css";
import LocationHeader from "./listings/LocationHeader";
import LocationListings from "./listings/LocationListings";
import Footer from "./footers/Footer";
import styled from "styled-components";

function Listings(props) {
	const { restaurants, login, onModuleClick, showMenu, onShowMenu, cart } =
		props;
	return (
		<ListingsContainer>
			<LocationHeader
				login={login}
				onModuleClick={onModuleClick}
				showMenu={showMenu}
				onShowMenu={onShowMenu}
				cart={cart}
			/>
			<LocationListings restaurants={restaurants} />
			<Footer />
		</ListingsContainer>
	);
}

export default Listings;

const ListingsContainer = styled.div`
	position: relative;
`;
