var main = function () {
    "use strict";

    var exercise1 = function (arr_nums) {
        var arrAverage, sumArray = 0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            sumArray = sumArray + value;
         });
         arrAverage = (sumArray)/arr_nums.length;
         return arrAverage;
    };
document.getElementById("exercise1").innerHTML = exercise1([12,45,65,22,30,78,44]);

    var exercise2 = function (arr_nums) {
        var arr_Max = arr_nums[0], sumArray = 0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            if (value >= arr_Max) {
                arr_Max = value;
            };
         });
         return arr_Max;
    };
document.getElementById("exercise2").innerHTML = exercise2([12,45,65,22,30,78,44]);

   var exercise3 =  function (arr_nums) {
        var even_check = 0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            if (value%2 == 0) {
                even_check = 1;}       
         });
         if (even_check == 1)
         {return true};
         {return false}
    };
document.getElementById("exercise3").innerHTML = exercise3([12,45,65,22,30,78,44]);

    var exercise4 = function (arr_nums) {
        var even_check = 0;
        //Loop over the array, adding the array elements.
         arr_nums.forEach(function(value){
            if (value%2 != 0) {
                even_check = 1;}       
         });
         if (even_check == 1)
         {return false;}
         {return true;}
};
document.getElementById("exercise4").innerHTML = exercise4([12,45,65,22,30,78,44]);    

    var arrayContains = function (arr_String, match_String) {
        var string_Check = 0;
        var len = arr_String.length;
        //Loop over the array, adding the array elements.
         for (var i = 0; i < len; i++) {
            if (arr_String[i].localeCompare(match_String) ==true) {
                string_Check = 1;}       
         };
         if (string_Check == 1)
         {return true;}
         {return false;}
};

document.getElementById("arrayContains").innerHTML = arrayContains(["hello","world"],"hello");


    var arrayContainstwo = function (arr_String, match_String) {
        var count_Char = 0;
        var len = arr_String.length;
        //Loop over the array, adding the array elements.
         for (var i = 0; i < len; i++) {
            if (arr_String[i].localeCompare(match_String) ==true) {
                count_Char=count_Char+1 ;}       
         };
         if (count_Char >= 2)
         {return true;}
         {return false;}
};

document.getElementById("arrayContainstwo").innerHTML = arrayContainstwo(["a","c","e","g","c","a", "g"],"e");
};

$(document).ready(main);