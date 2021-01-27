function processData(input) {
    //Enter your code here
        let str = input.split("\n"); // str here is array 
       var entriesLength = str.splice(0, 1); 
       var entries = str.splice(entriesLength); //put the queries into their own array
 
        // Conver array to array of key,value pair 
       // pass an array which contains another array which contains two values:
       for (var i=0; i<entriesLength; i++){ 
           str[i]= str[i].split(" "); // split name form phone number
       }
        
         // Create our map     
         phoneBook = new Map(str);
          
         entries.map(name => {
              if(phoneBook.has(name)){
                console.log(name + "=" + phoneBook.get(name));
            }else{
                console.log("Not found");
            }
         });
              
 } 

 
