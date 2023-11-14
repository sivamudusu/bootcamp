let array = [2, 3, 5, 6, 7, 8, 9];
array = [1, ...array]; // adding element from front
array = [...array, 10]; // adding elemnt from end

array.splice(3, 0, 4); //adding elemnt from specific index

console.log(array);
