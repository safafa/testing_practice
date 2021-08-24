const calculator = {
    add: function(num1, num2){
        if(isNaN(Number(num1)) || isNaN(Number(num2)))
         throw("Only numbers are allowed");
        else
         return Number(num1) + Number(num2)
    },

    substract: function(num1,num2){
        if(isNaN(Number(num1)) || isNaN(Number(num2)))
         throw("Only numbers are allowed");
        else
         return Number(num1) - Number(num2)
    },

    multiply : function(num1,num2){
        if(isNaN(Number(num1)) || isNaN(Number(num2)))
         throw("Only numbers are allowed");
        else
         return Number(num1) * Number(num2)
    },

    divide : function(num1,num2){
        if(isNaN(Number(num1)) || isNaN(Number(num2))){
            throw("Only numbers are allowed");
        } else if(Number(num2) === 0){
            throw("Can't divide on O");
        } else
         return Number(num1) * Number(num2)
    }
};

module.exports = calculator;