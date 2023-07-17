function isLeap(year) {

   

    /**************Don't change the code above****************/   
    
        // year % 4 ==== 0
    
        // year % 100 === 0
        
        // year % 400 === 0 
    
        //Write your code here.   
    
    if((year % 4) === 0){
    
        if((year % 100) === 0){
    
            if((year % 400) === 0){
    
            console.log("Leap year.");
    
                    } else {
                        console.log("Not leap year.");
                    }    
            
                } else {
                    console.log("Leap year.");
                }
            
            } else {
          console.log("Not leap year.");
        }
    
    
    
       
    
    
    
    /**************Don't change the code below****************/   
    
    
    
    }

    isLeap(1948);
    isLeap(1965);
    isLeap(2020);