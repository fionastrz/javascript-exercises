const sumAll = function(min, max) {
    let result = 0;
    if (Number.isInteger(min) && Number.isInteger(max) && min > 0 && max > 0) {

        if ((min < max)) {
            for(i = min; i<=max; i++){
                result += i;
            }
            return result;
        }
        else {
            return sumAll(max, min);
        }
    }
    else {
        return "ERROR";
    }   
};

// Do not edit below this line
module.exports = sumAll;
