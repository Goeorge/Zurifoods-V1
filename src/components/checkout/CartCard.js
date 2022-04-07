import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//ICONS
import { IconContext } from "react-icons";
import {
	AiOutlinePlusCircle,
	AiOutlineDelete,
	AiOutlineExclamationCircle,
	AiOutlineMinusCircle,
} from "react-icons/ai";

function CartCard(props) {
	const username = "OB";
	const {
		cart,
		onRemoveFromCart,
		onOrderIncrement,
		onOrderDecrement,
		restaurant,
	} = props;

	if (cart.length <= 0)
		return (
			<CartCardMessage>
				<span className="message info-msg">
					Your Order(s) is empty! Add a meal.
				</span>
				<IconContext.Provider value={{ className: "icon exclamation-icon" }}>
					<AiOutlineExclamationCircle />
				</IconContext.Provider>
			</CartCardMessage>
		);

	return (
		<CartCardTable>
			<table>
				<thead>
					<th>Item</th>
					<th>Qty</th>
					<th></th>
					<th></th>
					<th></th>
				</thead>
				<tbody className="cart-card">
					{cart.map((order) => (
						<tr key={order.item.id}>
							<td>{order.item.name}</td>
							<td>{order.qty}</td>
							<td>
								<IconContext.Provider value={{ className: "icon group-icon" }}>
									<AiOutlinePlusCircle
										onClick={() => onOrderIncrement(order)}
									/>
								</IconContext.Provider>
							</td>
							<td>
								<IconContext.Provider value={{ className: "icon group-icon" }}>
									<AiOutlineMinusCircle
										onClick={() => onOrderDecrement(order)}
									/>
								</IconContext.Provider>
							</td>
							<td>
								<IconContext.Provider value={{ className: "icon delete-icon" }}>
									<AiOutlineDelete onClick={() => onRemoveFromCart(order)} />
								</IconContext.Provider>
							</td>
							<td>Ksh.{order.qty * order.item.price}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Link to={`/checkout/${new Date().getTime()}${username}`}>
				<Button className="btn">Checkout</Button>
			</Link>
		</CartCardTable>
	);
}

export default CartCard;

const CartCardTable = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	width: 100%;
`;

const CartCardMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	width: 250px;
	text-align: center;

	span {
		width: 150px;
		text-align: center;
		overflow-wrap: break-word;
	}
`;

const Button = styled.button`
	width: 100%;
	background-color: #79bc42;
	color: #fff;

	&:hover,
	&:active {
		background-color: #5f8b3c;
	}
`;
