let A=10;

var B = 0


if(A <=0 && A <= 100000){
if(A > 0 && B > 0){
    if(A < B){
        var ans = Math.pow(A,2) +  Math.pow(B,2)
        if(ans === A){
            console.log(A,B)
        }
        else{
            console.log(0)
        }
    }
}
}


function squareSum(num) {
    var a = 0;
    while (a * a < num) {
      var b = 0;
      while (b * b < num) {
        if (a * a + b * b == num) {
          if (a <= b) {
            console.log(a + "," + b);
          }
        }
        b += 1;
      }
      a += 1;
  
    }
  }
  
  
  
  squareSum(50);
  