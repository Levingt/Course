// 1.
// function calculateProductPrice(isDiscountable, price) {
//     if (isDiscountable) {
//         price = price * 0.8;
//     }  
//     return price;
// }
// calculateProductPrice(true, 1000);


// 2.
// let employers = {};
// const maxEmployer = 4;
// for (let i = 0; i < maxEmployer; i++) {
//  createEmployer(i+1);
// }
// function createEmployer(index) {
//     let employerName = null;
//     do {
//         employerName = prompt("Введите имя сотрудника","Введите имя сотрудника")
//     } while (employerName == null);
//     employers[index] = `${index} - ${employerName}`;  
// }