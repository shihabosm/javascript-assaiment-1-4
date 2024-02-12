function calculateMoney(ticketSale) {
    if(ticketSale<0){
        return 'Invalid Number';
    }
        const perTicket=ticketSale*120;
        const gard=500;
        const staff=8*50;
        const perDay=perTicket -(gard+staff);
        return perDay;
    }
  

    function checkName(name) {
        if(typeof name !== 'string'){
            return 'invalid';
        }
        else{ const len=name.length-1;
            const nameLastLetter=name[len].toLowerCase();      
            const lastLetter=['a','y','i','e','o','u','w'];
           
                if(lastLetter.includes(nameLastLetter)){
                    return 'Good Name';
                }else{
                    return 'Bad Name';
                }
          
        }     
        }
        console.log(checkName('Saddey'))


        function deleteInvalids(array) {
            if(Array.isArray(array) ===false){
                return 'Invalid Array';
            }       
                let numberArray=[];
                for(const arr of array){
                    if (!isNaN(arr) && typeof arr === 'number') {
                        numberArray.push(arr);
                    }
                }
                return numberArray ;        
            }
        

            function password(obj) {
                if(obj.birthYear.toString().length < 4 || Object.keys(obj).length < 3){
                    return 'invalid';
                }
                  const siteFirst=obj.siteName.charAt(0).toUpperCase();
                 const first=obj.siteName.slice(1);
                 const siteUpperCaseName=siteFirst.concat(first);
                 console.log(siteUpperCaseName);
                 const password=`${siteUpperCaseName}#${obj.name}@${obj.birthYear}`;
                 return password;
            }


            function monthlySavings(arr , livingCost) {
                if(Array.isArray(arr) ===false || typeof livingCost !=='number'){
                    return 'invalid input'
                }
                let sum =0;
                for (const num of arr ){
                    
                    if(num>=3000){
                        const tax =num *20/100;
                        sum-=tax;
                    }
                    sum=sum+num;
                }
                sum-=livingCost;
                if(sum<0){
                    return 'earn more';
                }
                    return sum;
                
                }
            

                