function getRelationship(x, y) {
    var isXNum = (typeof(x) === "number" && !Number.isNaN(x));
    var isYNum = (typeof(y) === "number" && !Number.isNaN(y));
    if(!isXNum && !isYNum) return "Can't compare relationships because " + x + " and " + y + " are not numbers";
    if(!isXNum) return "Can't compare relationships because " + x + " is not a number";
    if(!isYNum) return "Can't compare relationships because " + y + " is not a number";
    if(x>y) return ">";
    if(x<y) return "<";
    if(x===y) return "=";
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

var x = NaN;
console.log(x);
var bool = Number.isNaN(x);
console.log(bool);