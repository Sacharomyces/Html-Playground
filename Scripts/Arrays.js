var arr = [1, 2, 3, 4, 5];
var arr1 = ["a", "b", "c", "d"];
// push() -  add an element to an end
//pop() - removes an element fromend and returns it
// unshift() - add an alament to the beginning
//shift() - removes an element from the beggining and returns it

//concat() - join two arrays
var combined = arr.concat(arr1); // additional parameters to add more then one array

//slice() - creates new array and returns it array.slice(start index(included in new array), (optional) end index) | negative values => from start index to the beggining

var sliced = combined.slice(5)// result same as arr1

//splice() - removes or add a certain number of elements from a certain index. splice( i, n, (o)item1,...) 
// i- index of items to add or remove, n - number of items to remove from i (sholud be 0 if adding only), item1 - optional item to add.

combined.splice(2, 1, "item", "item1"); // removes one element from index 2 and add two items there

//sort() - if no parameters are passed than it coverts all elements from an array to string and sort them alphabetically. A custom compare function can be passed.

combined.sort(function (a, b) {
    if (isNaN(a) || isNaN(b)) return 0;
    if (a === b) return 0;
    if (a > b) return 1;
    if (a < b) return -1;
});

//indexOf() - returns index number of first occurance of passed item
//lastindexOf() - return index number of last occurance of passed item


//find() - search an element int he array and returns it. It use a passed custom function.

combined.find(function(item, index, array) {// second and third paaramether are optional
    if (item === b) return true;
    return false;
});

//findIndex() - works like find() but returns an index of specified element.


