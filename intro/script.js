const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

const cashInRegister = 100
const orderQueue = []

let nextOrderId = 1

function addNewPizza(pizza) {
    menu.push(pizza)
}

function placeOrder( pizzaName ) {
    let pizzaIndex = menu.indexOf(pizzaName)
    cashInRegister += menu[pizzaIndex].price
    let newOrder = {
        id: nextOrderId++,
        pizza: menu[pizzaIndex].name,
        status: "ordered"
    }
    orderQueue.push(newOrder)
    return newOrder
}


function completeOrder(orderId) {
    let order = orderQueue.find( el => el.id === orderId )
    order.status = "completed"
    return order
}

