import React from "react";
import "../App.css";
import LandingPage from "./home/LandingPage";
import LandingPageHeader from "./home/LandingPageHeader";
import Footer from "./footers/Footer";

import styled from "styled-components";

function Home(props) {
	const {
		login,
		onModuleClick,
		showMenu,
		onShowMenu,
		onRiderRegister,
		showRiderRegister,
		onRestaurantRegister,
		showRestaurantRegister,
		cart,
	} = props;

	return (
		<HomeContainer>
			<LandingPageHeader
				login={login}
				onModuleClick={onModuleClick}
				showMenu={showMenu}
				onShowMenu={onShowMenu}
				cart={cart}
			/>
			<LandingPage
				onRiderRegister={onRiderRegister}
				showRiderRegister={showRiderRegister}
				showRestaurantRegister={showRestaurantRegister}
				onRestaurantRegister={onRestaurantRegister}
			/>
			<Footer />
		</HomeContainer>
	);
}

export default Home;

const HomeContainer = styled.div`
	position: relative;
`;
