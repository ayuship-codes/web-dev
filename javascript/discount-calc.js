function discountCalc(discount){
    return function(price){
        return price - price *(discount / 100);
    }
}

let ten = discountCalc(10);
let fifteen = discountCalc(15);
console.log(ten(2300));
console.log(fifteen(2300));

