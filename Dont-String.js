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

console.log(missingNum('9899100101103104105'));

function swapFun(str){
  var regMe = new RegExp(/\s/);
  var split = str.split(regMe);   
  var rev =  split.reverse(function(x,y){
        
  return y-x;
});
    
  return rev.join(", ");
}

function isPartOf(str1,str2){
  var checker = new RegExp(str2);
  var matchcheck = checker.test(str1.concat(str1));
 
  return matchcheck;   
}


function palindrome(str){
  var splitarr = str.split('');

  splitarr.reverse(function(x,y){
    return y-x;
  });
  var combinearr = splitarr.join('');
  console.log(combinearr);
  console.log(str);
  return combinearr === str;

}

console.log(palindrome('racecar'));



