"use strict";
/**
 * Challenge: Fix the TS warnings about orderHistory!
 */
Object.defineProperty(exports, "__esModule", { value: true });
var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderHistory = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderHistory.find(function (order) { return order.id === orderId; });
    if ((order === null || order === void 0 ? void 0 : order.status) === undefined) {
        console.error("".concat(order === null || order === void 0 ? void 0 : order.status, " is undefined"));
        return;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderHistory);
