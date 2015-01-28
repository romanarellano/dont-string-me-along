


function missingNum(str){


var excludedNum=[];
for(var i=0;i<10;i++){
if(str.indexOf(i)===-1){
    excludedNum.push(i);
}

}
return excludedNum;

}



function swapFun(str){
  var regMe = new RegExp(/\s/);
     var split = str.split(regMe);
     
  var rev=  split.reverse(function(x,y){
        
        return y-x;
        
    });
    
    return rev.join(", ");

}






