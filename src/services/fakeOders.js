const orders = [];

export function getOrders() {
	return orders;
}

export function getOrder(id) {
	return orders.find((o) => o.id === id);
}

export function addOrder(meal) {
	orders.push(meal);
}
