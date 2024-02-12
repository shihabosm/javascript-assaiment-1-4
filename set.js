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