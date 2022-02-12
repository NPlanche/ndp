        

function max(arg1, arg2, arg3) {
    "use strict";
    var maxresult = Math.max(arg1, arg2, arg3);
            
    document.getElementsByName('maxOutput')[0].value = maxresult;
}
        
function min(arg1, arg2, arg3) {
    "use strict";        
    var minresult = Math.min(arg1, arg2, arg3);
    document.getElementsByName('minOutput')[0].value = minresult;
}
        
function average(arg1, arg2, arg3) {
    "use strict";
    var n1 = parseInt(arg1, 10),
        n2 = parseInt(arg2, 10),
        n3 = parseInt(arg3, 10),
        
        avgresult = ((n1 + n2 + n3) / 3);
            
    document.getElementsByName('avgOutput')[0].value = avgresult;
}

function median(arg1, arg2, arg3) {
    "use strict";
    var a = parseInt(arg1, 10),
        b = parseInt(arg2, 10),
        c = parseInt(arg3, 10),
        medianresult;
          
    // find the middle
    if ((a < b && b < c) || (c < b && b < a)) 
        medianresult = b;
  
        else if ((b < a && a < c) || (c < a && a < b)) 
        medianresult =  a; 

        else
        medianresult = c; 
            
    document.getElementsByName('medianOutput')[0].value = medianresult;
}        
        
function range(arg1, arg2, arg3) {
    "use strict";
    var a = parseInt(arg1, 10),
        b = parseInt(arg2, 10),
        c = parseInt(arg3, 10),
        
        biggest = Math.max(a, b, c),
        smallest = Math.min(a, b, c),
        rangeResuslt = biggest - smallest;
            
            
    document.getElementsByName('rangeOutput')[0].value = rangeResuslt;
}


function getInput() {
    "use strict";
    var num1 = document.getElementsByName('input1')[0].value,
        num2 = document.getElementsByName('input2')[0].value,
        num3 = document.getElementsByName('input3')[0].value;
           
    max(num1, num2, num3);
    min(num1, num2, num3);
    average(num1, num2, num3);
    median(num1, num2, num3);
    range(num1, num2, num3);
}

