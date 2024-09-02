function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        //live unitl 90;
        
        var yearRemaining = 90 - age;
        var dayRemaining = yearRemaining * 365;
        var weekRemaining = yearRemaining * 52;
        var monthRemaining = yearRemaining * 12;
        
        console.log("You have " + dayRemaining + " days, " + weekRemaining + " weeks," + 
        " and " + monthRemaining + " months left.")
        
        
    /*************Don't change the code below**********/
    }
    
    