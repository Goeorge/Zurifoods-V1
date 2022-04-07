import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InnerFooter from "../footers/InnerFooter";
import InnerHeader from "../headers/InnerHeader";

//ICONS
import { IconContext } from "react-icons";
import {
	AiOutlinePlusCircle,
	AiOutlineDelete,
	AiOutlineExclamationCircle,
	AiOutlineMinusCircle,
} from "react-icons/ai";

function Checkout(props) {
	const { orderId } = useParams();
	const {
		cart,
		onRemoveFromCart,
		onOrderIncrement,
		onOrderDecrement,
		onCartSumTotal,
		onOrder,
	} = props;

	const sumTotal = onCartSumTotal(cart);
	const serviceFee = 50;

	return (
		<CheckoutContainer>
			<InnerHeader />
			<h1 className="heading-checkout">Order No: {orderId}</h1>
			<CheckoutContent>
				<OrderDetails>
					<CheckoutLocation>
						<Address>
							<div>Kai Plaza- Bata Tom Mboya Streets</div>
							<Action>Edit</Action>
						</Address>
						<PickupPoint>
							<div>Meet at the Door</div>
							<Action>Edit</Action>
						</PickupPoint>
					</CheckoutLocation>
					<CheckoutDelivery>
						<div className="flex space-btwn">
							<h3 className="heading-Normal">Delivery Estimates</h3>
							<span>20-30min</span>
						</div>
						<div>
							<Filter>
								<input
									type="radio"
									id="now"
									name="drone"
									value="now"
									defaultChecked
								/>
								<label htmlFor="picked">Now</label>
							</Filter>
							<Filter>
								<input
									type="radio"
									id="schedule"
									name="drone"
									value="schedule"
								/>
								<label htmlFor="picked">Schedule</label>
							</Filter>
						</div>
					</CheckoutDelivery>
					<CheckoutPayment>
						<h3 className="heading-Normal">Payment</h3>
						<Payment>
							<div>Cash</div>
							<Action>Edit</Action>
						</Payment>
						<Coupon>
							<div>Add Coupon Code</div>
							<Action>Edit</Action>
						</Coupon>
					</CheckoutPayment>
					<OrderItems>
						<div className="flex space-btwn">
							<h3 className="heading-Normal">Your Order(s)</h3>
							<Action>+ Add Item</Action>
						</div>
						{cart.length <= 0 && (
							<CheckoutMessage>
								<span className="message info-msg">
									Your Order(s) is empty! Add a meal.
								</span>
								<IconContext.Provider
									value={{ className: "icon exclamation-icon" }}
								>
									<AiOutlineExclamationCircle />
								</IconContext.Provider>
							</CheckoutMessage>
						)}

						<OrdersTable>
							{cart.length > 0 && (
								<table>
									<tbody className="checkout-card">
										{cart.map((order) => (
											<tr key={order.item.id}>
												<td>{order.item.name}</td>
												<td>{order.qty}</td>
												<td>
													<IconContext.Provider
														value={{ className: "icon group-icon" }}
													>
														<AiOutlinePlusCircle
															onClick={() => onOrderIncrement(order)}
														/>
													</IconContext.Provider>
												</td>
												<td>
													<IconContext.Provider
														value={{ className: "icon group-icon" }}
													>
														<AiOutlineMinusCircle
															onClick={() => onOrderDecrement(order)}
														/>
													</IconContext.Provider>
												</td>
												<td>
													<IconContext.Provider
														value={{ className: "icon delete-icon" }}
													>
														<AiOutlineDelete
															onClick={() => onRemoveFromCart(order)}
														/>
													</IconContext.Provider>
												</td>
												<td>Ksh.{order.qty * order.item.price}</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</OrdersTable>
						<Filter className="space-btwn">
							<label htmlFor="picked">Request Utensils, straws etc.</label>
							<input
								type="checkbox"
								id="utensils"
								name="utensils"
								value="yes"
							/>
						</Filter>
					</OrderItems>
					<Message>
						<Filter className="textarea">
							<input
								type="text"
								placeholder="Add a Note .."
								id="note"
								name="notes"
								value=""
							/>
						</Filter>
					</Message>
				</OrderDetails>
				<OrderSummary>
					<SummaryHeader>
						<span>
							By placing your Order, you agree to take full responsibility of it
							once delivered.
						</span>
					</SummaryHeader>
					<Subtotal>
						<span>Sub Total</span>
						<span>Ksh.{sumTotal}</span>
					</Subtotal>
					<ServiceFee>
						<span>Service Fee</span>
						<span>Ksh.{serviceFee}</span>
					</ServiceFee>
					<Total>
						<span>Total</span>
						<span>Ksh.{sumTotal + serviceFee}</span>
					</Total>
					<Link to={`/delivery/${orderId}/`}>
						<Button className="btn" onClick={() => onOrder(cart,serviceFee,restaurant)}>
							Place Order
						</Button>
					</Link>
				</OrderSummary>
			</CheckoutContent>
			<InnerFooter />
		</CheckoutContainer>
	);
}

export default Checkout;

const CheckoutContainer = styled.div``;
const CheckoutContent = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	column-gap: 0.5rem;

	margin: 2rem;
	border: 0.2px solid rgba(0, 0, 0, 0.1);
`;
const OrderDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 4rem;
	padding-right: 40rem;
`;
const OrderSummary = styled.div`
  width:100%
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	padding: 4rem;
	padding-right: 10rem;
	background-color: #F9F9F9;
`;
const CheckoutLocation = styled.div``;
const Address = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const PickupPoint = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const CheckoutDelivery = styled.div``;
const CheckoutPayment = styled.div``;
const Payment = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const Coupon = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const OrderItems = styled.div`
	padding: 2rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const CheckoutMessage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;
	text-align: center;

	span {
		width: 100%;
		text-align: center;
		overflow-wrap: break-word;
	}
`;

const OrdersTable = styled.div`
	width: 100%;
	margin-bottom: 1rem;
`;

const Message = styled.div`
	padding: 2rem 0;
	border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const SummaryHeader = styled.div`
	margin-bottom: 2rem;
`;
const Subtotal = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	margin-bottom: 1.6rem;
	padding-top: 2rem;
	border-top: 0.6px solid rgba(0, 0, 0, 0.1);
`;

const ServiceFee = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	margin-bottom: 1rem;
`;
const Total = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;

	margin-bottom: 2rem;
	margin-top: 2rem;
	padding-top: 1rem;
	border-top: 0.6px solid rgba(0, 0, 0, 0.1);

	span {
		font-weight: bold;
	}
`;

const Button = styled.button`
	width: 100%;
	background-color: #79bc42;
	color: #fff;
	border-radius: 2px;
	cursor: pointer;

	&:hover,
	&:active {
		background-color: #5f8b3c;
	}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;

	input {
		font-weight: 500;
		width: 2rem;
	}

	label {
		margin-bottom: 0.2rem;
		font-weight: 500;
	}
`;

const Action = styled.span`
	padding: 0.8rem;
	border-radius: 10px;
	background-color: #efefef;
	cursor: pointer;
`;
