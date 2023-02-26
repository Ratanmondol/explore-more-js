const phones = [
    { name: 'samsung', price: 30000, storage: '120 gb' },
    { name: 'oppo', price: 25000, storage: '120 gb' },
    { name: 'MI', price: 27000, storege: '120 gb' },
    { name: 'walton', price: 20000, storege: '120 gb' },

];


function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelect = cheapestPhone(phones);
console.log(mySelect);
