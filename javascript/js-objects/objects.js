let obj = {
    name : "Raj",
    address :{
        pin : 2342,
        place : "Roorkee",
        loc : {
            lat : 2.43,
            lng : 45.6
        }
    }
}

console.log(obj.address.loc.lng);

//destructuring
let {lat,lng} = obj.address.loc;
console.log(lat);
console.log(lng);