import React from "react";
import LandingPageHeader from "./home/LandingPageHeader";
import Footer from "./footers/Footer";
import SignupRider from "./register/SignupRider";

function RegisterRider() {
	return (
		<div>
			<LandingPageHeader />
			<SignupRider />
			<Footer />
		</div>
	);
}

export default RegisterRider;
