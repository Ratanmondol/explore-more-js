const shopingCart = [
    { Name: 'shoe', price: 1200, quantity: 3 },
    { name: 'shirt', price: 800, quantity: 5 },
    { name: 'pent', price: 1500, quantity: 4 },
    { name: 'belt', price: 500, quantity: 2 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;

}

const expense = totalCost(shopingCart);
console.log(expense);