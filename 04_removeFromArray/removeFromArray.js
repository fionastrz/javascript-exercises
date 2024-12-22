const removeFromArray = function(array, item1, item2 = "", item3 = "", item4 = "") {
    newArray="";
    if (array.includes(item1) || array.includes(item2) || array.includes(item3) || array.includes(item4)){
        newArray = array.filter((elements) => elements !== item1 && elements !== item2 && elements !== item3 && elements !== item4);
    }
    else {
        newArray = array;
    }
    return newArray;        
};

// Do not edit below this line
module.exports = removeFromArray;
