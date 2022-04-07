import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderSample() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		cssEase: "linear",
	};
	return (
		<SliderWrapper>
			<h2> Multiple items </h2>
			<Container {...settings}>
				<Wrap>
					<h3>1</h3>
				</Wrap>
				<Wrap>
					<h3>2</h3>
				</Wrap>
				<Wrap>
					<h3>3</h3>
				</Wrap>
				<Wrap>
					<h3>4</h3>
				</Wrap>
				<Wrap>
					<h3>5</h3>
				</Wrap>
				<Wrap>
					<h3>6</h3>
				</Wrap>
				<Wrap>
					<h3>7</h3>
				</Wrap>
				<Wrap>
					<h3>8</h3>
				</Wrap>
				<Wrap>
					<h3>9</h3>
				</Wrap>
			</Container>
		</SliderWrapper>
	);
}

export default SliderSample;

const SliderWrapper = styled.div`
	background-color: green;
`;

const Container = styled(Slider)`
	width: 300px;
	margin: 20rem;

	// .slick-list {
	// 	overflow: visible;
	// }

	// ul li button {
	// 	&:before {
	// 		font-size: 10px;
	// 		color: rgb(150, 158, 171);
	// 	}
	// }

	// li.slick-active button::before {
	// 	color: white;
	// }

	// button {
	// 	z-index: 1;
	// }
`;

const Wrap = styled.div`
	cursor: pointer;
	width: 50px;
	height: 100px;
	// border: 4px solid transparent;
	// border-radius: 4px;
	// box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
	// 	rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	// transition-duration: 300ms;

	// &:hover {
	// 	border: 4px solid rgba(249, 249, 249, 0.8);
	// }
`;
