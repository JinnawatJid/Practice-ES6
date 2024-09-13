function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        var sequence = [];
    
        if (n >= 1) {
            sequence.push(0);
        }
        
        if (n >= 2) {
            sequence.push(1); 
        }
    
        for (var i = 2; i < n; i++) {
            var nextNumber = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextNumber);
        }
    
        //Return an array of fibonacci numbers starting from 0.
        return sequence;
    
    //Do NOT change any of the code below 👇
    }
    
    