class ProductInfo {
    constructor(){
        this.pid=''   
        this.pbase=''
        this.pname=''   
        this.desc=''
    }
}

const handler = {
    
    set(target, prop,value) {
        str1=pid.value
        console.log(prop)
        console.log(value)
        //if(str1.substring(0, 4)!='Prd-')
        if(prop=='pid'){
            if(value.substring(0, 4)!='Prd-')
            {
            //alert("product id must start with Prd-")
            throw new Error("product id must start with Prd-")
            }else{
            target[prop] = value;
             return true;

            }
       
        }
        if(prop=='pbase'){
            if(isNaN(value)){
                    //alert("Product price must be nymeric")
                    throw new Error("Product price must be numeric")
                }else{
                    target[prop] = value;
                    return true
                }
        }

        if(prop=='desc' ){
            if(value==''){
                    //alert("Product price must be nymeric")
                    throw new Error("Enter description of Product")
                }else{
                    target[prop] = value;
                    return true
                }
        }

        if( prop=='pname'){
            if(value==''){
                    //alert("Product price must be nymeric")
                    throw new Error("Enter Product Name")
                }else{
                    target[prop] = value;
                    return true
                }
        }
        
    },
};



const user = new ProductInfo();
const productProxy = new Proxy(user,handler);

function GetUserInfo(){
    productProxy.pid=document.getElementById('pid').value    
    productProxy.pname=document.getElementById('pname').value      
    productProxy.desc=document.getElementById('desc').value  
    productProxy.pbase=document.getElementById('bprice').value
    console.log(productProxy.pbase)
}

// try{
//     GetUserInfo();
// }catch(e){
//     console.log(e.message);
// }