import React from "react";

function LocationMap() {
	const handleGetLocation = () => {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				const { latitude } = position.coords;
				const { longitude } = position.coords;

				const URL = `https://www.google.com/maps/@${latitude},${longitude}`;

				console.log(URL);
			},
			function () {
				console.log("Error finding your position");
			}
		);
	};

	return <div>LocationMap</div>;
}

export default LocationMap;
