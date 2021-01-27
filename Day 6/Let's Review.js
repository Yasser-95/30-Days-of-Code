function processData(input) {
        
      var myarr = input.split("\n").slice(1);
      
        myarr.forEach(function(v){
            var evenStr = '';
            var oddStr = '';
         for(var i=0;i<v.length;i++){
            if(i%2==0){
                evenStr += v[i];
             } else if(i%2==1) {
                oddStr += v[i];
             } else{
                 return;
             }
          }
              console.log(`${evenStr} ${oddStr}`);
         });   
  
 } 

 
