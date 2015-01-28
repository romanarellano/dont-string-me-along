function missingNum(str){

  var excludedNum=[];
  var start = str.substr(0,2);
  var end = str.substr(-3);
  for(var i=start;i<parseInt(end);i++){
    if(str.indexOf(i)===-1){
      excludedNum.push(i);
    }
  }
  return excludedNum;
}
console.log('MISSING NUM IS: ',missingNum('9899100101103104105'));

function swapFun(str){
  var regMe = new RegExp(/\s/);
  var split = str.split(regMe);   
  var rev =  split.reverse(function(x,y){
    return y-x;
});
    
  return rev.join(", ");
}
console.log('SWAPPED:',swapFun('Jaywon'));

function isPartOf(str1,str2){
  var checker = new RegExp(str2);
  var matchcheck = checker.test(str1.concat(str1));
 
  return matchcheck;   
}
console.log('Is it inside? ',swapFun('wong','Jaywon'));

function palindrome(str){

  var splitarr = str.split('');
  /* splitarr.reverse(function(x,y){
    return y-x;
  });*/
  splitarr.reverse();
  var combinearr = splitarr.join('');
  console.log(combinearr);
  console.log(str);
  return combinearr === str;

}
console.log('Is it a palindrome? ',palindrome('rasd'));
console.log('Is it a palindrome? ',palindrome('racecar'));


function miniPalindrome(str){
  var splitarr = str.split('').reverse();
  var combinedrev = splitarr.join('');
  var checkstring;
  var storage = [];

  for (i=0;i<str.length;i++){
    for (j=1;j<str.length;j++){
      checkstring = new RegExp(str.substr(i,j));
      var matchcheck = checkstring.test(combinedrev);
      if (matchcheck === true ){
      storage.push(checkstring);
      }
    }
  }
  // STILL NEED TO DO A PALINDROME CHECK IN HERE USING REGEX
  return storage;
}
console.log('The palindromes in the string are',miniPalindrome('nomorenono'));




