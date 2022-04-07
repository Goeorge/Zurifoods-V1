import React from "react";
import Login from "../modals/Login";
import styled from "styled-components";
import "../../App.css";

import { IconContext } from "react-icons";
import { FaLocationArrow } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

function LandingPage(props) {
	const {
		onRiderRegister,
		showRiderRegister,
		showRestaurantRegister,
		onRestaurantRegister,
	} = props;
	return (
		<MainWrapper>
			<HeroSection>
				<Hero>
					<HeroImgBox>
						<img src="img/hero.png" alt="Zurifoods banner img" />
					</HeroImgBox>
					<HeroTextBox>
						<h1 className="heading-primary">
							Find affordable healthy meals near you.
						</h1>
						<p>
							The smart 365-days-per-year foods that will make you eat healthy
							again. Tailored to your personal health and nutritional needs
						</p>
						<LocationBox>
							<IconContext.Provider value={{ className: "icon location-icon" }}>
								<FaBuilding />
							</IconContext.Provider>
							<AddressSearch
								type="text"
								className="input-search"
								placeholder="Whats your address?"
							/>
							<IconContext.Provider value={{ className: "icon location-icon" }}>
								<FaLocationArrow />
							</IconContext.Provider>
							<a href="#cta">
								<span>Use current location</span>
							</a>
						</LocationBox>
					</HeroTextBox>
				</Hero>
			</HeroSection>

			<CategoriesSection>
				<span className="subheading align-center">Healthy Foods</span>
				<HeaderTwo>Eat a variety of healthy foods.</HeaderTwo>
				<CategoryList>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category" src="/img/gallery/categories-1.png" />
						</a>
						<a href="#cta" className="btn btn--full">
							Vegatables
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category " src="/img/gallery/categories-2.png" />
						</a>
						<a href="#cta" className="btn btn--full">
							Fish
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category" src="/img/gallery/categories-3.png" />
						</a>
						<a href="#cta" className="btn btn--full">
							Fruites
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category" src="/img/gallery/categories-4.jpeg" />
						</a>
						<a href="#cta" className="btn btn--full">
							Kuku Kienyeji
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category" src="/img/gallery/categories-1.png" />
						</a>
						<a href="#cta" className="btn btn--full">
							Vegatables
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category " src="/img/gallery/categories-4.jpeg" />
						</a>
						<a href="#cta" className="btn btn--full">
							Meat
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category" src="/img/gallery/categories-2.png" />
						</a>
						<a href="#cta" className="btn btn--full">
							Vegatables
						</a>
					</CategoryItem>
					<CategoryItem>
						<a href={"/"}>
							<img alt="category " src="/img/gallery/categories-1.png" />
						</a>
						<a href="#cta" className="btn btn--full">
							Mboga Kienyeji
						</a>
					</CategoryItem>
				</CategoryList>
			</CategoriesSection>
			<HowSection>
				<span className="subheading align-center">How it Works</span>
				<HeaderTwo>Your daily dose of health in 3 simple steps</HeaderTwo>
				<HowGrid>
					<TextBox>
						<span>01</span>
						<THeader>Enter your current location or Delievry address</THeader>
						<p>
							Never again waste time thinking about what to eat! Omnifood AI
							will create a 100% personalized weekly meal plan just for you. It
							makes sure you get all the nutrients and vitamins you need, no
							matter what diet you follow!
						</p>
					</TextBox>
					<ImgBox>
						<img
							src="img/app/app-screen-1.png"
							alt="iPhone menu selection screen"
						/>
					</ImgBox>
					<ImgBox>
						<img
							src="img/app/app-screen-2.png"
							alt="iPhone menu selection screen"
						/>
					</ImgBox>
					<TextBox>
						<span>02</span>
						<THeader>
							Let Zuri find restaurant serving healthy foods near you.
						</THeader>
						<p>
							Once per week, approve the meal plan generated for you by Omnifood
							AI. You can change ingredients, swap entire meals, or even add
							your own recipes.
						</p>
					</TextBox>
					<TextBox>
						<span>03</span>
						<THeader>
							Place a delivery order on Zurifoods or visit restaurant
						</THeader>
						<p>
							Best chefs in town will cook your selected meal every day, and we
							will deliver it to your door whenever works best for you. You can
							change delivery schedule and address daily!
						</p>
					</TextBox>
					<ImgBox>
						<img
							src="img/app/app-screen-3.png"
							alt="iPhone menu selection screen"
						/>
					</ImgBox>
				</HowGrid>
			</HowSection>
			<JoinUsSection>
				<HeaderContainer>
					<span className="subheading align-center">Lets do it together</span>
					<HeaderTwo> Let us built the community together</HeaderTwo>
				</HeaderContainer>
				<CardsContainer>
					<Card>
						<CardImgBox>
							<img alt="restaurant" src="/img/gallery/gallery-5.jpg" />
						</CardImgBox>
						<CardTextBox>
							<h2 className="subheading align-center">Add your Resturant</h2>
							<p>
								Sell more of that healthy food in your Menu. Let our members
								know you are out there.More sales guaranteed.
							</p>
						</CardTextBox>
						<a
							href={"/register-restaurant"}
							// onClick={() => onRestaurantRegister(showRestaurantRegister)}
							className="btn btn--full"
						>
							Sell More
						</a>
					</Card>
					<Card>
						<CardImgBox>
							<img alt="driver" src="/img/gallery/gallery-5.jpg" />
						</CardImgBox>
						<CardTextBox>
							<h2 className="subheading align-center">Signup to deliver</h2>
							<p>
								Be your own boss! Enjoy flexibility, freedom and competitive
								earnings by delivering with Zurifoods.
							</p>
						</CardTextBox>
						<a
							href={"/register-rider"}
							// onClick={() => onRiderRegister(showRiderRegister)}
							className="btn btn--full"
						>
							Earn More
						</a>
					</Card>
					<Card>
						<CardImgBox>
							<img alt="restuarant" src="/img/gallery/gallery-5.jpg" />
						</CardImgBox>
						<CardTextBox>
							<h2 className="subheading align-center">Register</h2>
							<p>
								Never again waste time thinking about what to eat! Omnifood AI
								will create a 100% personalized weekly meal plan just for you.
							</p>
						</CardTextBox>
						<a href={"/register"} className="btn btn--full">
							Eat Healthy
						</a>
					</Card>
				</CardsContainer>
			</JoinUsSection>
		</MainWrapper>
	);
}

export default LandingPage;

const MainWrapper = styled.div``;

const HeroSection = styled.div`
	background-color: #f1ceb2;
	padding: 4.8rem 0 9.6rem 0;
	height: 100vh;
`;

const Hero = styled.div`
	max-width: 130rem;
	margin: 0 auto;
	padding: 0 2.4rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 9.6rem;
	align-items: center;
	margin-top: 4.8rem;
`;

const HeroImgBox = styled.div`
	img {
		width: 80%;
	}
`;

const HeroTextBox = styled.div`
	p {
		font-size: 2rem;
		line-height: 1.6;
		margin-bottom: 4.8rem;
	}
`;

const LocationBox = styled.div`
	display: flex;
	align-items: center;
	list-style: none;
	gap: 0.8rem;

	/* color: #444; */
	background-color: #fbf0e8;
	border-radius: 2%;
`;

const AddressSearch = styled.input`
	width: 215px;
	border-style: none;
	padding: 2px;
	font-size: 14px;
	letter-spacing: 1px;
	outline: none;
	// border-radius: 2px;
	transition: all 0.5s ease-in-out;
	padding-right: 40px;

	&::placeholder {
		font-size: 16px;
		letter-spacing: 1px;
		font-weight: 500;
		color: #000;
	}
	&:focus {
		width: 215px;
		border-radius: 0px;
		background-color: transparent;
		transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
	}
`;

const CategoriesSection = styled.div`
	max-width: 100%;
	margin: 1rem 0;
	padding: 0 3.2rem;
`;

const CategoryList = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	row-gap: 2.4rem;
	padding: 0 10vw;

	list-style: none;
`;
const CategoryItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		img {
			width: 14rem;
		}
	}
`;

const HowSection = styled.div`
	padding: 9.6rem 4rem;
	background-color: #fff;
`;
const HowGrid = styled.div`
	max-width: 100%;
	margin: 1rem 0;
	padding: 0 3.2rem;

	display: grid;
	column-gap: 6.4rem;
	row-gap: 9.6rem;

	grid-template-columns: repeat(2, 1fr);
	align-items: center;
`;

const HeaderTwo = styled.h2`
	font-weight: 600;
	color: #5d483c;
	letter-spacing: -0.5px;

	font-size: 4.4rem;
	line-height: 2.8rem;
	margin-bottom: 9.6rem;
	text-align: center;
`;

const THeader = styled.h3`
	font-weight: 600;
	color: #5d483c;
	letter-spacing: -0.5px;
	font-size: 3.2rem;
	line-height: 1.05;
	margin: 4.2rem 0.2rem;
	text-align: left;
`;

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	span {
		font-size: 8.6rem;
		color: #e4f2d9;
		font-weight: 600;
	}

	p {
		font-size: 1.8rem;
		line-height: 1.2;
	}
`;

const ImgBox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 30%;
		z-index: 2;
	}

	&::before,
	&::after {
		content: "";
		display: block;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&::before {
		width: 60%;

		/* 60% of Parent width */
		padding-bottom: 60%;
		background-color: #fdf2e9;
		/* z-index: -1; */
	}

	&::after {
		width: 45%;

		/* 60% of Parent width */
		padding-bottom: 45%;
		background-color: #fae5d3;
		/* z-index: -2; */
	}
`;

const JoinUsSection = styled.div`
	padding: 9.6rem 0;
	background-color: #f3f9ee;
`;

const HeaderContainer = styled.div`
	/* 1140px */
	max-width: 100%;
	margin: 4rem auto;
	padding: 0 3.2rem;
`;

const CardsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	/* 1140px */
	max-width: 100%;
	margin: 4rem auto;
	padding: 0 3.2rem;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
`;

const CardImgBox = styled.div`
	img {
		width: 20rem;
		clip-path: circle();
	}
`;

const CardTextBox = styled.div``;
