const shopingCart = [
    { Name: 'shoe', price: 1200 },
    { name: 'shirt', price: 800 },
    { name: 'pent', price: 1500 },
    { name: 'belt', price: 500 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;

}

const expense = totalCost(shopingCart);
console.log(expense);