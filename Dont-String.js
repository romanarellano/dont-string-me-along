/* FUNCTION TESTS CHECKS NUMBERS IN A SEQUENCE AND PUSHES MISSING SEQUENCES INTO A NEW ARRAY.
  IT GRABS THE FIRST 2 NUMBERS IN THE STRING AND ADDS TO IT TO CHECK THE INTEGRITY OF THE
  PREDICTED SEQUENCE WITH ITS INDEX. ANY NUMBERS MISSING ARE ADDED INTO AN ARRAY. */
function missingNum(str){

  var excludedNum=[];
  var start = str.substr(0,2);

  var end = str.substr(-3);
 // ending position of the for loop


  for(var i=start;i<=parseInt(end);i++){
    if(str.indexOf(i)===-1){
      excludedNum.push(i);
    }
  }
  return excludedNum;
}
console.log('MISSING NUM IS: ',missingNum('9899100101103104105'));

/* FUNCTION TURNS STRING INTO A REG EXPRESSION THEN SPLITS THE STRING AND SWAPS THEM AROUND */
function swapFun(str){
  var regMe = new RegExp(/\s/);
  var split = str.split(regMe);   
  var rev =  split.reverse(function(x,y){
    return y-x;
  });
  return rev.join(", ");
}
console.log('SWAPPED:',swapFun('Jaywon'));

/* FUNCTION CHECKS TO SEE IF THE 2nd STRING IS IN THE 1st STRING WHEN IN A CIRCULAR VARIATION.
  WE TESTED IT BY DOUBLING UP THE 1st STRING TO SIMULATE THIS TEST CASE. */
function isPartOf(str1,str2){
  var checker = new RegExp(str2);
  var matchcheck = checker.test(str1.concat(str1));
 
  return matchcheck;   
}
console.log('Is it inside? ',swapFun('wong','Jaywon'));

/* FUNCTION TURNS A STRING INTO AN ARRAY THAT IS THEN REVERSED AND JOINED BACK TOGETHER INTO A STRING.
  THE RESULTING REVERSED STRING IS THEN COMPARED TO ITSELF TO SEE IF IT IS A PALINDROME */
function palindrome(str){
  var splitarr = str.split('');
  splitarr.reverse();
  var combinearr = splitarr.join('');
  
  return combinearr === str;
}
console.log('Is it a palindrome? ',palindrome('rasd'));
console.log('Is it a palindrome? ',palindrome('racecar'));

/* FUNCTION TESTS FOR MINI PALINDROME-LIKE WORDS IN A STRING.
  CREATES A TEST STRING WHICH IS THEN TESTED VIA OUR PALINDROME FUNCTION TO CHECK IF IT IS A PALINDROME.
  IT THEN STORES THE VALUE INTO A NEW ARRAY IF THE TEST IS TRUE. */
function palindromy(str){
  var array=[];
  var arr =str.match(/\w/g);

  for(var i=0;i<=arr.length-2;i++){

    for(var j=i+2;j<=arr.length;j++){
        
      var string = arr.slice(i,j).join("");
        
      if(palindrome(string)){
        array.push(string);
      }
    }
  }
  return array;
}

console.log(palindromy("nonomore"));
console.log(palindrome('racecar'));




