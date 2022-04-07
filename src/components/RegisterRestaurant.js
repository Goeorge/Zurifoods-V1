import React from "react";
import LandingPageHeader from "./home/LandingPageHeader";
import Footer from "./footers/Footer";
import SignupRestaurant from "./register/SignupRestaurant";

function RegisterRestaurant() {
	return (
		<div>
			<LandingPageHeader />
			<SignupRestaurant />
			<Footer />
		</div>
	);
}

export default RegisterRestaurant;
