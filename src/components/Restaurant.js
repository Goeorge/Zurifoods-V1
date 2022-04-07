import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import LocationHeader from "./listings/LocationHeader";
import Footer from "./footers/Footer";
import CartCard from "./checkout/CartCard";
import styled from "styled-components";

import { IconContext } from "react-icons";
// import { AiOutlineClose, AiFillCloseCircle } from "react-icons/ai";
import {
	AiFillPlusCircle,
	AiOutlinePlusCircle,
	AiFillHeart,
	AiOutlineHeart,
} from "react-icons/ai";
import { GrSchedule } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";

function Restaurant(props) {
	const { id } = useParams();
	const {
		login,
		onModuleClick,
		showMenu,
		onShowMenu,
		restaurants,
		onAddToCart,
		onRemoveFromCart,
		onOrderIncrement,
		onOrderDecrement,
		onMealLiked,
		onOrder,
		cart,
	} = props;

	//console.log(id);
	// console.log(restaurants);
	const restaurant = restaurants.find((res) => res.id == id);
	const menuCategories = restaurant.menu[0].categories;

	// menuCategories.map((cat) => {
	// 	console.log(`To string ${cat}`);
	// 	return restaurant.menu[1][cat].map((meal) => console.log(meal));
	// });

	return (
		<RestaurantContainer>
			<LocationHeader
				login={login}
				onModuleClick={onModuleClick}
				showMenu={showMenu}
				onShowMenu={onShowMenu}
				cart={cart}
			/>
			<RestaurantWrapper>
				<Banner>
					<img src="/img/meals/header-banner.png" alt="Restaurant banner" />
				</Banner>
				<RestaurantContent>
					<Info>
						<RestaurantInfo>
							<Div>
								<RHeader>{restaurant.name}</RHeader>
								<p>Main Cuisines:{restaurant.cuisine_type}</p>
								<p>Opening Time - Closing Time</p>
								<p>Ratings: {restaurant.ratings}</p>

								<Actions>
									<GroupOrder>
										<IconContext.Provider
											value={{ className: "icon group-icon" }}
										>
											<VscAccount />
										</IconContext.Provider>
										<span>Group Order</span>
									</GroupOrder>
									<Schedule>
										<IconContext.Provider
											value={{ className: "icon calender-icon" }}
										>
											<GrSchedule />
										</IconContext.Provider>
										<span>Schedule</span>
									</Schedule>
									<Favorite>
										<IconContext.Provider
											value={{ className: "icon like-icon" }}
										>
											<AiOutlineHeart />
										</IconContext.Provider>
										<span>Like</span>
									</Favorite>
								</Actions>
							</Div>
							<Blank></Blank>
						</RestaurantInfo>
						<MenuContent>
							<Sidebar>
								<RHeading>Menu</RHeading>
								<MenuFilter>
									{menuCategories.map((menu) => (
										<Link to={`#${menu}`}>
											<Filter>
												<h4 className="filter-h">{menu}</h4>
												<FilterIcon>
													<ion-icon name="chevron-down-outline"></ion-icon>
												</FilterIcon>
											</Filter>
										</Link>
									))}
								</MenuFilter>
							</Sidebar>
							<MenuListings>
								{menuCategories.map((cat) => (
									<MenuCategory>
										<RHeadingtwo>{cat}</RHeadingtwo>
										<Meals>
											{restaurant.menu[1][cat].map((meal) => (
												<MealCard key={meal.id}>
													<CartActions>
														<IconContext.Provider
															value={{ className: "icon like-icon" }}
														>
															<AiOutlineHeart
																onClick={() => onMealLiked(meal)}
															/>
														</IconContext.Provider>
														<IconContext.Provider
															value={{ className: "icon group-icon" }}
														>
															<AiFillPlusCircle
																onClick={() => onAddToCart(meal)}
															/>
														</IconContext.Provider>
													</CartActions>
													<img src={meal.imgUrl} alt="" />
													<MealInfo>
														<p className="meal-name">{meal.name}</p>
														<span className="meal-price">Ksh.{meal.price}</span>
													</MealInfo>
												</MealCard>
											))}
										</Meals>
									</MenuCategory>
								))}
								;
							</MenuListings>
						</MenuContent>
					</Info>
					<OrderCardInfo>
						<CartCard
							cart={cart}
							onRemoveFromCart={onRemoveFromCart}
							onOrderIncrement={onOrderIncrement}
							onOrderDecrement={onOrderDecrement}
							onOrder={onOrder}
							restaurant={restaurant}
						/>
					</OrderCardInfo>
				</RestaurantContent>
			</RestaurantWrapper>
			<Footer />
		</RestaurantContainer>
	);
}

export default Restaurant;

const RestaurantContainer = styled.div`
	position: relative;
`;

const RestaurantContent = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	column-gap: 3rem;
`;
const RestaurantWrapper = styled.div``;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	column-gap: 2rem;

	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const Banner = styled.div`
	img {
		width: 100%;
		height: 200px;
	}
`;
const RestaurantInfo = styled.div`
	display: grid;
	grid-template-columns: 4.5fr 1.5fr;
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin: 2rem;
	padding: 2rem;
	border-radius: 15px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
	}
`;

const Blank = styled.div``;

const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	margin-top: 2rem;

	span {
		margin: 1rem;
	}
`;
const Schedule = styled.div`
	background-color: #f9f9f9;
	padding: 8px 10px;
	border-radius: 25px;
	cursor: pointer;

	&:hover {
		background-color: #f1f0f0;
	}
`;
const Favorite = styled(Schedule)``;

const GroupOrder = styled(Schedule)``;

const OrderCardInfo = styled.div`
	position: fixed;
	top: 1;
	right: 0;
	width: 36rem;
	padding: 2rem;
	text-align: center;
	margin-top: 3rem;
	margin-bottom: 8rem;
	border-radius: 15px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
	}
`;

const MenuContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 3.5fr 1.5fr;
	grid-auto-columns: auto;
	//grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
	margin-bottom: 3rem;
`;
const Sidebar = styled.div`
	margin: 2rem 1rem;
	margin-left: 2rem;
	padding: 2rem;
	border-radius: 15px;
	// box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	// transition: 0.3s;

	// &:hover {
	// 	box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
	// }
`;

const MenuFilter = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
`;

const Filter = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	align-items: center;
`;

const FilterIcon = styled.div``;

const MenuListings = styled.div`
	margin: 2rem;

	padding: 2rem;
	border-radius: 15px;
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;

	&:hover {
		box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
	}
`;

const MenuCategory = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.6rem;
	justify-content: center;
`;
const Meals = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 3rem;
	row-gap: 2rem;
	align-items: center;
`;
const MealCard = styled.div`
	box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px;

	&:hover {
		box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);
	}
	img {
		width: 200px;
	}
`;
const MealInfo = styled.div`
	background-color: #f9f9f9;
	padding: 0.8rem 0.5rem;

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
`;
const CartActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding: 0.5rem 0.3rem;

	border-top-left-radius: 5px;
	border-top-right-radius: 5px;

	background-color: #f9f9f9;
`;

const RHeading = styled.h2`
	font-weight: 600;
	color: #50433e;
	letter-spacing: -0.5px;
	font-size: 3rem;
	line-height: 1.05;
	margin: 4.2rem 0.2rem;
	text-align: left;
`;

const RHeader = styled.h1`
	font-weight: 600;
	color: #50433e;
	letter-spacing: -0.5px;

	font-size: 3.8rem;
	line-height: 2.8rem;
	margin-bottom: 1.6rem;
	text-align: left;
`;

const RHeadingtwo = styled(RHeading)`
	margin-bottom: 1rem;
	font-size: 2.4rem;
	text-transform: capitalize;
`;
