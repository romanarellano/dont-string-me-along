function missingNum(str){

  var excludedNum=[];

  for(var i=0;i<10;i++){
    if(str.indexOf(i)===-1){
        excludedNum.push(i);
  }

    }
  return excludedNum;
}




