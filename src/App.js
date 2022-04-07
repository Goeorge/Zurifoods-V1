import React, { useState } from "react";
import "./App.css";
import "./AppQueries.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENTS
import Home from "./components/Home";
import Listings from "./components/Listings";
import Restaurant from "./components/Restaurant";
import Register from "./components/Register";
import RegisterRestaurant from "./components/RegisterRestaurant";
import RegisterRider from "./components/RegisterRider";
import Checkout from "./components/checkout/Checkout";
import DeliveryMap from "./components/locations/DeliveryMap";

//SERVICES:DATA
import { getRestaurants } from "./services/fakeRestaurantService";

// //ICONS
// import { GrOrderedList } from "react-icons/gr";

function App() {
	//Actions, States Booleans
	const [login, setLogin] = useState(false);
	const [showMenu, setMenuNavBar] = useState(false);

	// Data Flow
	const [restaurants, setRestaurants] = useState(getRestaurants());
	const [cart, setCart] = useState([]);
	const [orderSummary, setOrderSummary] = useState([]);
	// const username = "OB";

	// function randomId() {
	// 	return `${new Date().getTime()}${username}`;
	// }

	// FUNCTIONS
	const handleModuleClick = (login) => {
		setLogin(!login);
		console.log(login);
	};

	const handleShowMenuBar = (showMenu) => {
		setMenuNavBar(!showMenu);
	};

	const handleAddToCart = (meal, num = 1) => {
		const orders = [...cart];
		const order = { item: meal, qty: num };
		orders.push(order);
		console.log(`Add to Cart:${orders}`);
		setCart(orders);
	};

	const handleRemoveFromCart = (order) => {
		const cartCopy = [...cart];
		const newCart = cartCopy.filter(
			(orderItem) => orderItem.item.id !== order.item.id
		);
		console.log(`Remove from Cart:${newCart}`);
		setCart(newCart);
	};

	const handleOrderIncrease = (order) => {
		const cartCopy = [...cart];
		const index = cartCopy.indexOf(order);
		// cartCopy[index] = { ...cart };
		cartCopy[index].qty++;
		console.log(`Order Increase:${cartCopy[index].qty}`);
		setCart(cartCopy);
	};

	const handleOrderDecrement = (meal) => {
		const cartCopy = [...cart];
		const index = cartCopy.indexOf(meal);
		// cartCopy[index] = { ...cart };
		//check if qty is zero
		if (!(cartCopy[index].qty <= 1)) {
			cartCopy[index].qty--;
		}
		console.log(`Order Increase:${cartCopy[index].qty}`);
		setCart(cartCopy);
	};

	const handleMealLiked = (meal) => {
		meal.liked = !meal.liked;
		console.log(`Meal Liked :${meal.liked}`);
	};

	const handleCartSumTotals = (cart) => {
		let sumTotal = 0;
		cart.map((order) => (sumTotal = sumTotal + order.qty * order.item.price));
		console.log(`Cart Total:${sumTotal}`);

		return sumTotal;
	};

	const handleOrderPlacement = (cart) => {
		console.log("Preparing Your Order..");
		let sumTotal = handleCartSumTotals(cart);
	};

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path={"/restaurant/:id"}>
						<Restaurant
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
							restaurants={restaurants}
							onAddToCart={handleAddToCart}
							onRemoveFromCart={handleRemoveFromCart}
							onOrderIncrement={handleOrderIncrease}
							onOrderDecrement={handleOrderDecrement}
							onMealLiked={handleMealLiked}
							cart={cart}
							onCartSumTotal={handleCartSumTotals}
							onOrder={handleOrderPlacement}
						/>
					</Route>
					<Route path={"/checkout/:orderId"}>
						<Checkout
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
							onAddToCart={handleAddToCart}
							onRemoveFromCart={handleRemoveFromCart}
							onOrderIncrement={handleOrderIncrease}
							onOrderDecrement={handleOrderDecrement}
							onCartSumTotal={handleCartSumTotals}
							onOrder={handleOrderPlacement}
							cart={cart}
						/>
					</Route>
					<Route path={"/delivery/:orderId"}>
						<DeliveryMap
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
							onAddToCart={handleAddToCart}
							onRemoveFromCart={handleRemoveFromCart}
							onOrderIncrement={handleOrderIncrease}
							onOrderDecrement={handleOrderDecrement}
							onCartSumTotal={handleCartSumTotals}
							cart={cart}
						/>
					</Route>
					<Route path={"/listings"}>
						<Listings
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
							restaurants={restaurants}
							onSetRestaurant={setRestaurants}
							onAddToCart={handleAddToCart}
							onRemoveFromCart={handleRemoveFromCart}
							onOrderIncrement={handleOrderIncrease}
							onOrderDecrement={handleOrderDecrement}
							onMealLiked={handleMealLiked}
							onCartSumTotal={handleCartSumTotals}
							cart={cart}
						/>
					</Route>
					<Route path={"/register"}>
						<Register
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
						/>
					</Route>
					<Route path={"/register-rider"}>
						<RegisterRider
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
						/>
					</Route>
					<Route path={"/register-restaurant"}>
						<RegisterRestaurant
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
						/>
					</Route>
					{/* <Route path={"/slider"}>
						<SliderSample />
					</Route> */}
					<Route path={"/"}>
						<Home
							login={login}
							onModuleClick={handleModuleClick}
							showMenu={showMenu}
							onShowMenu={handleShowMenuBar}
							cart={cart}
						/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
