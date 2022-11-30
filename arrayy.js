const item = [
    { name: 'Bike', price: 100 }, 
    { name: 'TV', price: 200 }, 
    { name: 'Album', price: 10 }, 
    { name: 'Book', price: 5 }, 
    { name: 'Phone', price: 500 }, 
    { name: 'Computer', price: 1000 },
];

function cheap_one(array) {

    let less = array[0].price;
    let cheapName=array[0].name;

    for (let i=0; i<array.length; i++){

        if (array[i].price <= less){
            less = array[i].price;
        cheapName=array[i].name;
        }

    }
    
    return `The cheapest item is ${cheapName} costs ${low}.`;
}



function fullprice(array){
    let total = 0;

    for (let i=0; i<array.length; i++){

        total += array[i].price;

    }

    return `The total cost is ${total}.`;
}

function totalpriceaboveten(array){
    let total = 0;

    for (let i=0; i<array.length; i++){
        if (array[i].price < 10){
            continue;
        }

        else {
            total += array[i].price;
        }
    }

    return `The total cost of products above $10 is ${total}`;
}
function expensive(array) {
    let most = array[0].price;
    let expename=array[0].name;

    for (let i=0; i<array.length; i++){

        if (array[i].price >= most){
            most = array[i].price;
             expename=array[i].name;
        }

    }
    
    return `The most expensive item is ${expename} costs ${high}.`;

console.log(cheap_one(item));
console.log(expensive(item));
console.log(fullprice(item));
console.log(totalpriceaboveten(item));