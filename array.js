const country = 'Bangladesh';
const age = 45;
const isIndependent = true;
const student = { id: 45, class: 10, name: "agun" };
const friends = [34, 23, 12, 14, 15, 16, 11, 21];

console.log(typeof country);
console.log(Array.isArray(friends));
//to finding any number is visible on array.
console.log(friends.includes(23));

//concat

const newfriends = [66, 44, 55];
const allfriends = newfriends.concat(friends);
console.log(allfriends);