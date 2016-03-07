var main = function () {
    "use strict";

    var exercise1 = function (arr_nums) {
        var arrAverage, sumArray = 0;
        //var arrElemts =0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            sumArray = sumArray + value;
         });
         arrAverage = float(sumArray)/arr_nums.length;
         return arrAverage;
    };
         exercise1([12,45,65,22,30,78,44]);

    var exercise2 = function (arr_nums) {
        var arr_Max = arr_nums[0], sumArray = 0;
        //var arrElemts =0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            if (value >= arr_Max) {
                arr_Max = value;
            };
         });
         return arr_Max;
    };
         exercise2([12,45,65,22,30,78,44]);

   var exercise3 = function (arr_nums) {
        var arr_Max = arr_nums[0], sumArray = 0;
        //var arrElemts =0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            if (value >= arr_Max) {
                arr_Max = value;
            };
         });
         return arr_Max;
    };
         exercise3([12,45,65,22,30,78,44]);      

    var exercise4 = function (arr_nums) {
        var arr_Max = arr_nums[0], sumArray = 0;
        //var arrElemts =0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            if (value >= arr_Max) {
                arr_Max = value;
            };
         });
         return arr_Max;
    };
         exercise4([12,45,65,22,30,78,44]);
    



};

$(document).ready(main);