type Pizza = {
    name: string
    price: number
}
/**
 * Challenge: using literal types and unions, update the Order status so that
 * it can only ever be "ordered" or "completed"
 */
type OrderStatus = "ordered" | "completed"

type Order = {
    id: number
    pizza: Pizza
    status: OrderStatus
}

const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]
 
let cashInRegister = 100
let nextOrderId = 1
const orderHistory: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderHistory.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderHistory.find(order => order.id === orderId)
    if (order?.status === undefined) {
        console.error(`${order?.status} is undefined`);
        return
    } 
    order.status = "completed"
    return order
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderHistory)

export {}