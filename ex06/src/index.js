// Create lion object here
var lion = {
    name: 'Simba',
    legs: 4,
    tails: 1
}
// End of lion object

function myFunction(newProperty, propertyValue) { // Change this line
// Only change code below this line
lion[newProperty] = propertyValue;
return lion;    
// Only change code above this line
}
myFunction('roar', 'roar-roar'); // Change this line
module.exports = myFunction;