// Only change code below this line
    var myPet = {
        species: "cat",
        name: "Maci",
        legs: 4,
        friends: ["Kiki", "Kviki"]
    }
    function myFunction(myObj) {
        return myObj;
    }
    console.log(myFunction(myPet))
// Only change code above this line
console.log(myFunction()); // Change this line
module.exports = { myPet, myFunction }