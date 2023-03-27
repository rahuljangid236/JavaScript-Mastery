let array1 = ["item1", "item2"];
let array2 = [...array1, "item3", "item4"];
let array3 = [...array1, ...array2];
console.log(array2);
console.log(array3);
