const prompt = require('prompt-sync')();

const categories = ["Employee Pay","Cost of Goods","Maintanence Cost","Utilities","Taxes"]
let expense_map = new Map();
let index_map = new Map();

categories.forEach(element => {
    expense_map.set(element,0);
});

var i = 1;
categories.forEach(element => {
    index_map.set(i,element);

});

console.log("Welcome to the expense tracker for XYZ company");

function printMenu(categories){
    var i = 1;
    categories.forEach(element => {
        console.log(i + ". " + element);
        i += 1;
    });
    
    console.log("-1. Exit");
    var selection = prompt("Enter the Serial Number of Expense: ");
    return selection;
}


while (true) {
console.log("Please select the item you want to enter the expenses for,");

selection = printMenu(categories);
selection = Number(selection);

var debug = false;

if(debug){
console.log("Entered "+ selection);    
}

if(selection == -1){
  console.log("Exiting the program.");
  break;
}

if(!index_map.has(selection)){
  console.log("Error Invalid Selection, kindly select a valid selection.");
  continue;
}

var new_cost = prompt("Enter the new expense for " + index_map.get(selection) + ": ");
new_cost = Number(new_cost)

var item = index_map.get(selection);
var current_cost = Number(expense_map.get(item));

if(debug){
    for (const [k, v] of index_map.entries()) {
        console.log(k, v)
      }
      for (const [k, v] of expense_map.entries()) {
        console.log(k, v)
      }

    console.log("selection " + selection);
    console.log("item " + item);
    console.log("current_cost " + current_cost);
    console.log(current_cost + new_cost)

}

expense_map.set(item, current_cost + new_cost);
console.log("The expense for the item "+ item + "is " + expense_map.get(item) );
console.log("\n");
}