module.exports = function getZerosCount(number, base) {
  var mnoz = [];
  var i = 1;
  do{
    i=1;
    do{
      i++;
    }while(base%i!=0);
    base=base/i;
    mnoz.push(i);
  }while(base!=1);
  //console.log(mnoz);
  /*var maxMn = [];
  var k = 0;
  maxMn.push(mnoz[0]);
  for(i=1;i<mnoz.length;i++){
    if(mnoz[i-1]==mnoz[i]){
      maxMn[k] = maxMn[k]*mnoz[i-1];
    }
    else{
      k++;
      maxMn[k]=mnoz[i];
    }
  }*/
  var unique =[];
  unique.push(mnoz[0]);
  var tmp=mnoz[0];
  for(i=0;i<mnoz.length;i++){
    if(mnoz[i]!=tmp){
      unique.push(mnoz[i]);
      tmp=mnoz[i];
    }
  }
  var uniqueCount =[];
  var ucl=0;
  var t=0;
  for(i=0;i<mnoz.length;i++){
    if(mnoz[i]==unique[ucl]){
      t++;
    }
    else{
      uniqueCount.push(t);
      ucl++;
      i--;
      t=0;
    }
  }
  uniqueCount.push(t);
  /*console.log(unique);
  console.log(uniqueCount);
  console.log(maxMn);
  console.log(maxMn.sort(function(x,y){
    return y-x;
  }));*/
  var res = [];
  var n=number;
  for(i=0;i<unique.length;i++){
    var c = unique[i];
    //console.log(c);
    var s = 0;
    number = n;
    do{
      s+=Math.floor(number/c);
      number=Math.floor(number/c);
  
    }while(number!=0);

    res.push(Math.floor(s/uniqueCount[i]));

  }
   res.sort(function(x,y){
    return x-y;
  });
  //console.log(res);
  return res[0];
}