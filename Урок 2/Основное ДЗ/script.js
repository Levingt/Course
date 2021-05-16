money = prompt(`Ваш бюджет?`);
shopName = prompt(`Название вашего магазина?`);
let shopProduct = [];
shopProduct[0] = prompt(`Что будем продавать?`);
shopProduct[1] = prompt(`Что будем продавать?`);
shopProduct[2] = prompt(`Что будем продавать?`);
let myShop = {
    Money: money,
    ShopName: shopName,
    shopProduct: [0,1,2],
    personal: {},
    open: false
}
console.log(myShop);

