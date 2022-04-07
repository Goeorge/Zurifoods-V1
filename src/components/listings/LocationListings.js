import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ICOS PACK

import { IconContext } from "react-icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import {
	AiFillPlusCircle,
	AiOutlinePlusCircle,
	AiOutlineClose,
	AiFillCloseCircle,
	AiFillHeart,
	AiOutlineHeart,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io";

function LocationListings(props) {
	//Data Flow
	const {
		restaurants,
		onAddToCart,
		onRemoveFromCart,
		onOrderIncrement,
		onOrderDecrement,
		cart,
	} = props;

	return (
		<Main>
			<ShopCategory>
				<CategoryListing>
					<Category>
						<img src="./img/meals/icons/deals.png" alt="" />
						<span>Top Deals</span>
					</Category>
					<Category>
						<img src="./img/meals/icons/coffeeandtea.png" alt="" />
						<span>coffe & tea</span>
					</Category>
					<Category>
						<img src="./img/meals/icons/indian.png" alt="" />
						<span>Mboga kienyeji</span>
					</Category>
					<Category>
						<img src="./img/meals/icons/bbq.png" alt="" />
						<span>Kuku Kienyeji</span>
					</Category>
					<Category>
						<img src="./img/meals/icons/sushi.png" alt="" />
						<span>Fish</span>
					</Category>
					<Category>
						<img src="./img/meals/icons/bbq.png" alt="" />
						<span>Meat</span>
					</Category>
					<Category>
						<img src="./img/meals/icons/top_eats.png" alt="" />
						<span>Fruites</span>
					</Category>
				</CategoryListing>
			</ShopCategory>
			<ListingSection>
				<ListingsFilter>
					<h3 className="">All Restuarants</h3>
					<SortFilter>
						<FilterHeader>
							<h4 className="filter-h">Sort</h4>
							<FilterIcon>
								<ion-icon name="chevron-down-outline"></ion-icon>
							</FilterIcon>
						</FilterHeader>
						<SortList>
							<div className="filter">
								<input
									type="radio"
									id="huey"
									name="drone"
									value="picked"
									defaultChecked
								/>
								<label htmlFor="picked">Picked for you</label>
							</div>

							<div className="filter">
								<input type="radio" value="popular" />
								<label htmlFor="popular">Most popular</label>
							</div>

							<div className="filter">
								<input type="radio" value="rating" />
								<label htmlFor="rating">Rating</label>
							</div>
							<div className="filter">
								<input type="radio" value="time" />
								<label htmlFor="time">Delivery time</label>
							</div>
						</SortList>
					</SortFilter>
					<PriceFilter>
						<FilterHeader>
							<h4 className="filter-h">Price Range</h4>
							<FilterIcon>
								<ion-icon name="chevron-down-outline"></ion-icon>
							</FilterIcon>
						</FilterHeader>
						<PriceRange>
							<div className="filter">
								<input type="radio" id="huey" name="drone" value="100-200" />
								<label htmlFor="100-200">Ksh.100 - Ksh.200</label>
							</div>

							<div className="filter">
								<input type="radio" value="200-380" />
								<label htmlFor="200-380">Ksh.200 - Ksh.380</label>
							</div>

							<div className="filter">
								<input type="radio" value="380-500" />
								<label htmlFor="380-500">Ksh.380 - Ksh.500</label>
							</div>
							<div className="filter">
								<input type="radio" value="500-3000" />
								<label htmlFor="500-3000 ">Ksh.500 - </label>
							</div>
						</PriceRange>
					</PriceFilter>
					<DietaryFilter>
						<FilterHeader>
							<h4 className="filter-h">Dietary</h4>
							<FilterIcon>
								<ion-icon name="chevron-down-outline"></ion-icon>
							</FilterIcon>
						</FilterHeader>
						<DietaryList>
							<div className="filter">
								<input type="radio" id="huey" name="drone" value="vegeterian" />
								<label htmlFor="vegeterian">Vegeterian</label>
							</div>

							<div className="filter">
								<input type="radio" value="vegan" />
								<label htmlFor="vegan">Vegan</label>
							</div>

							<div className="filter">
								<input type="radio" value="gluton-free" />
								<label htmlFor="gluton-free">Gluton free</label>
							</div>
						</DietaryList>
					</DietaryFilter>
				</ListingsFilter>
				<RestaurantListings>
					<RestaurantCategory>
						<ListingHeader>
							<h2>When you are Hunagry now</h2>
							<ListingNavigation>
								<span>View all</span>
								<div>
									<IconContext.Provider
										value={{ className: "icon arrow-icon" }}
									>
										<a href="#cta">
											<AiOutlineArrowLeft />
										</a>
									</IconContext.Provider>
									<IconContext.Provider
										value={{ className: "icon arrow-icon" }}
									>
										<a href="#cta">
											<AiOutlineArrowRight />
										</a>
									</IconContext.Provider>
								</div>
							</ListingNavigation>
						</ListingHeader>
						<Listings>
							{restaurants &&
								restaurants.map((restaurant) => (
									<Link to={`/restaurant/${restaurant.id}`}>
										<ResturantItem key={restaurant.id}>
											<ResturantDetails>
												<TextBox>
													<h4>{restaurant.name}</h4>

													<p>Delivery fee: 0</p>
												</TextBox>
											</ResturantDetails>

											<img
												src="./img/gallery/gallery-8.jpg"
												alt="Meal Sample"
											/>

											<MealActions>
												<IconContext.Provider
													value={{ className: "icon like-icon" }}
												>
													<AiOutlineHeart />
												</IconContext.Provider>
												<span>
													<IconContext.Provider
														value={{ className: "icon body-icon" }}
													>
														<AiFillStar />
													</IconContext.Provider>
													{restaurant.ratings}
												</span>
											</MealActions>
										</ResturantItem>
									</Link>
								))}
						</Listings>
					</RestaurantCategory>
					<RestaurantCategory>
						<ListingHeader>
							<h2>Today's Offers</h2>
							<ListingNavigation>
								<span>View all</span>
								<div>
									<IconContext.Provider
										value={{ className: "icon arrow-icon" }}
									>
										<a href="#cta">
											<AiOutlineArrowLeft />
										</a>
									</IconContext.Provider>
									<IconContext.Provider
										value={{ className: "icon arrow-icon" }}
									>
										<a href="#cta">
											<AiOutlineArrowRight />
										</a>
									</IconContext.Provider>
								</div>
							</ListingNavigation>
						</ListingHeader>
						<Listings>
							{restaurants &&
								restaurants.map((restaurant) => (
									<Link to={`/restaurant/${restaurant.id}`}>
										<ResturantItem key={restaurant.id}>
											<ResturantDetails>
												<TextBox>
													<h4>{restaurant.name}</h4>

													<p>Delivery fee: 0</p>
												</TextBox>
											</ResturantDetails>

											<img
												src="./img/gallery/gallery-8.jpg"
												alt="Meal Sample"
											/>

											<MealActions>
												<IconContext.Provider
													value={{ className: "icon like-icon" }}
												>
													<AiOutlineHeart />
												</IconContext.Provider>
												<span>
													<IconContext.Provider
														value={{ className: "icon body-icon" }}
													>
														<AiFillStar />
													</IconContext.Provider>
													{restaurant.ratings}
												</span>
											</MealActions>
										</ResturantItem>
									</Link>
								))}
						</Listings>
					</RestaurantCategory>
					<RestaurantCategory>
						<ListingHeader>
							<h2>Popular near You</h2>
							<ListingNavigation>
								<span>View all</span>
								<div>
									<IconContext.Provider
										value={{ className: "icon arrow-icon" }}
									>
										<a href="#cta">
											<AiOutlineArrowLeft />
										</a>
									</IconContext.Provider>
									<IconContext.Provider
										value={{ className: "icon arrow-icon" }}
									>
										<a href="#cta">
											<AiOutlineArrowRight />
										</a>
									</IconContext.Provider>
								</div>
							</ListingNavigation>
						</ListingHeader>
						<Listings>
							{restaurants &&
								restaurants.map((restaurant) => (
									<Link to={`/restaurant/${restaurant.id}`}>
										<ResturantItem key={restaurant.id}>
											<ResturantDetails>
												<TextBox>
													<h4>{restaurant.name}</h4>

													<p>Delivery fee: 0</p>
												</TextBox>
											</ResturantDetails>

											<img
												src="./img/gallery/gallery-8.jpg"
												alt="Meal Sample"
											/>

											<MealActions>
												<IconContext.Provider
													value={{ className: "icon like-icon" }}
												>
													<AiOutlineHeart />
												</IconContext.Provider>
												<span>
													<IconContext.Provider
														value={{ className: "icon body-icon" }}
													>
														<AiFillStar />
													</IconContext.Provider>
													{restaurant.ratings}
												</span>
											</MealActions>
										</ResturantItem>
									</Link>
								))}
						</Listings>
					</RestaurantCategory>
				</RestaurantListings>
			</ListingSection>
		</Main>
	);
}

export default LocationListings;

const Main = styled.div`
	max-width: 100%;
	margin: 4rem auto;
	padding: 0 3.2rem;
`;

const ShopCategory = styled.div``;

const CategoryListing = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 6.2rem;
`;

const Category = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 8rem;
	img {
		width: 60px;
	}
`;

const ListingSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 4fr;
`;

const ListingsFilter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: top;
	gap: 3rem;
`;

const FilterHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 8px;
`;

const DietaryList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
`;

const PriceRange = styled(DietaryList)``;

const PriceFilter = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
`;

const DietaryFilter = styled(PriceFilter)``;

const SortFilter = styled.div``;

const SortList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
`;

const FilterIcon = styled.div`
	margin-right: 9rem;
`;

const RestaurantListings = styled.div`
	padding-left: 4rem;
`;

const RestaurantCategory = styled.div`
	margin-bottom: 3.8rem;
`;

const ResturantDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.8rem;

	background-color: rgb(227, 226, 226, 0.3);

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	span {
		padding: 0.5rem;
		border-radius: 25px;
		background-color: #f9f9f9;
		cursor: pointer;
	}
	h4 {
		cursor: pointer;
	}
`;

const TextBox = styled.div`
	h4 {
		margin-bottom: 0.8rem;
		color: #50433e;
	}
`;

const Listings = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1.8rem;
`;

const ResturantItem = styled.div`
	width: 230px;
	border-radius: 5px;
	img {
		width: 230px;
		height: 160px;
		border-radius: 4px;
		cursor: pointer;
	}

	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
	}
`;

const MealActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 0.6rem 0;

	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	background-color: #f9f9f9;
`;
const ListingHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

const ListingNavigation = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
