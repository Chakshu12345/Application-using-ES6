class DataUtility {
    
constructor(){
    this.products = [];
}

getData(){
    let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products',{
        method:'GET',
    });
    return response;
}

getRec(val){
    let response = fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${val}`,{
        method:'GET',
    });
    console.log(response)
    return response;
}

postData(prd){
//console.log(JSON.stringify(prd))
    
    let response = fetch('https://apiapptrainingnewapp.azurewebsites.net/api/Products',{
        method:'POST',
        body: JSON.stringify(prd),
        headers:{
            'Content-Type':'application/json'
        }
    });
    return response;
}

putData(prd,val){
    console.log(prd)
        
        fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${val}`,{
            method:'PUT',
            body: JSON.stringify(prd),
            headers:{
                'Content-Type':'application/json'
            }
        });
        //return response;
    }

    deleteData(val)
    {
        let response = fetch(`https://apiapptrainingnewapp.azurewebsites.net/api/Products/${val}`,{
            method:'DELETE'
        });
        return response;
    }


   
}

        