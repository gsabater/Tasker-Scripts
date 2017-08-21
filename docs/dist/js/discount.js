 //

var price = prompt("Give me price");
var discounts = {
    60: 60,
    70: 70
};

price = price.replace(",", ".");
price = parseFloat(price,2);

// Segunda unidad al 60%
discounts[60] = (price * (100-60)) /100;
discounts[60] = discounts[60] + price;
discounts[60] = discounts[60] / 2;

// Segunda unidad al 70%
discounts[70] = (price * (100-70)) /100;
discounts[70] = discounts[70] + price;
discounts[70] = discounts[70] / 2;

// 3x2
discounts["3x2"] = (price * 2) /3;

console.log("Precio: ", price);
console.log("Unitario si 2nd al 60%: ", discounts[60].toFixed(2) +"€", "ahorrado "+ (price - discounts[60]).toFixed(2) +" €");
console.log("Unitario si 2nd al 70%: ", discounts[70].toFixed(2) +"€", "ahorrado "+ (price - discounts[70]).toFixed(2) +" €");
console.log("Unitario si 3x2: ", discounts["3x2"].toFixed(2) +"€", "ahorrado "+ (price - discounts["3x2"]).toFixed(2) +" €");
