
let objgen = new UIGenerator()
var obj  =new DataUtility();

class ProductLogic{
    #products=[];
    #categories = [];
    constructor(){

        
        this.#products = [];       
        this.catdata = ['Electronics','Chemical','IT','Food','Home'];
        this.mandata = ['DELL','Samsung','Plantronics','TATA','Bajaj'];
        this.#products.push({ProductId:1, ProductName:'Laptop', CategoryName:'ECT', Price:10000});
    }
    
    getCategories(){
        
    document.getElementById('cat_data').innerHTML=objgen.generateCat(this.catdata);
        
    }
    getManifacturior(){
        //return this.#products;       
        document.getElementById('man_data').innerHTML=objgen.generateMan(this.mandata);
    }

    getProductTable()
    {
        obj.getData().then((response)=>{
            // this is a promise object
            return response.json();
        }).then((data)=>{
            document.getElementById('pdata').innerHTML=objgen.ShowAllData(data);
            document.getElementById('pname_dropdown').innerHTML=objgen.PDropdown(data);
            
        }).catch((error)=>{
            console.log('Error Occured');
        });
    }

    setProductData()
    {
        obj.postData(prd).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(JSON.stringify(data));
            
            
        }).catch((error)=>{
            console.log('Error Occured');
        });
    }

    getRecord(p_id){
        //console.log(p_id)
        obj.getRec(p_id).then((response)=>{
                        // this is a promise object
            return response.json();
        }).then((data)=>{
            
            document.getElementById('pRowId').value=data['ProductRowId']
           document.getElementById('pid').value =  data['ProductId']
            document.getElementById('pname').value =  data['ProductName']
            document.getElementById('pman').value  = data['Manufacturer']
           
             //options = document.getElementById("pcat").options;
            //console.log(data['Manufacturer'])
            
            document.getElementById('pcat').value  = data['CategoryName']
            document.getElementById('desc').value  = data['Description']
            document.getElementById('bprice').value =data['BasePrice']

            //console.log(data['ProductId'])
        }).catch((error)=>{
            console.log('Error Occured');
        });
    }


}
function addP(){
    document.getElementById('mod_lab').style.display='none'
    document.getElementById('p_dropdown').style.display ='none'
    
    
    
    
   
}
function modP(){
    document.getElementById('mod_lab').style.display='block'
    document.getElementById('p_dropdown').style.display = 'block'
    document.getElementById('save_p').style.display ='none'
    document.getElementById('modify_p').style.display = 'block'
   
    
}

function loadData(){  
     pobj = new ProductLogic
    console.log("in load")    
     

    pobj.getCategories()
    pobj.getManifacturior()
    pobj.getProductTable()

    document.getElementById('pname_dropdown').addEventListener('change',getPdata,false);
    document.getElementById('save_p').addEventListener('click',AddProduct,false);
    document.getElementById('add_p').addEventListener('click',addP,false);
     document.getElementById('mod_p').addEventListener('click',modP,false);
     
    document.getElementById('pname_dropdown').addEventListener('change',getPdata,false);
    document.getElementById('modify_p').addEventListener('click',ModifyProduct,false);
    
     
       
        
    

}
function getPdata(){
    //console.log("in det data")
let p_id=document.getElementById('pname_dropdown').value
pobj.getRecord(p_id)

//console.log(p_id)


}



function AddProduct(){
    //return this.#products;  
    //console.log("in add") 
    try{
    GetUserInfo()
    pid=document.getElementById('pid').value   
    pname=document.getElementById('pname').value   
    pcat=document.getElementById('pcat').value   
    pman=document.getElementById('pman').value   
    pdesc=document.getElementById('desc').value   
    pbase=document.getElementById('bprice').value   
   // ProductRowId	ProductId	ProductName	Manufacturer	CategoryName	Description	BasePrice
   product_d={ProductId:pid,ProductName:pname,Manufacturer:pcat,CategoryName:pman,Description:pdesc,BasePrice:pbase}
   res_post=obj.postData(product_d)
   if(res_post)
   {
    let msg=`<span>Product Data Saved..<span>`
    document.getElementById('Message_fail').style.display='none'
    document.getElementById('Message_succ').style.display='block'
    document.getElementById('Message_succ').innerHTML=msg

   document.getElementById('pid').value  =''     
    document.getElementById('pname').value  =''      
       
    document.getElementById('desc').value=''   
    document.getElementById('bprice').value  =''


   }

    }
    catch(e)
    {
        //console.log(e.message)
        let msg=`<span>${e.message}<span>`
        document.getElementById('Message_fail').style.display='block'
        document.getElementById('Message_fail').innerHTML=msg
    }

    
}

function ModifyProduct(){
    
    pRowId=document.getElementById('pRowId').value
    pid=document.getElementById('pid').value   
    pname=document.getElementById('pname').value   
    pcat=document.getElementById('pcat').value   
    pman=document.getElementById('pman').value   
    pdesc=document.getElementById('desc').value   
    pbase=document.getElementById('bprice').value  
    //console.log("Hi")
    //console.log(pRowId)
    product_d={ProductRowId:pRowId,ProductId:pid,ProductName:pname,Manufacturer:pcat,CategoryName:pman,Description:pdesc,BasePrice:pbase}
    //console.log(product_d)
    
    obj.putData(product_d,pRowId).then((response)=>{
        return response.json(); 
    }).catch((e)=>{
        console.log("e.message");
    });
   

}

function DeleteProduct(val){
    del_res=obj.deleteData(val)
    if(del_res)
    {
        let msg=`<span>Product Deleted..!<span>`
        document.getElementById('Message_del').style.display='block'
        document.getElementById('Message_del').innerHTML=msg
        
    }

}

function getrow(val1,val2)
{
    let cat_name= val1
    if(cat_name=='Electronics'){

        let tr=document.getElementById(val2)
        
        tr.className = 'table-danger';
    }

    if(cat_name=='Home')
    {
        let tr=document.getElementById(val2)
        
        tr.className = 'table-info';
    }

    if(cat_name=='IT')
    {
        let tr=document.getElementById(val2)
        
        tr.className = 'table-success';    
    }
    if(cat_name=='Food')
    {
        let tr=document.getElementById(val2)
        
        tr.className = 'table-primary';
        
    }
    if(cat_name=='Furniture')
    {
        let tr=document.getElementById(val2)
        
        tr.className = 'table-warning';
        
    }
    if(cat_name=='ECL')
    {
        let tr=document.getElementById(val2)
        
        tr.className = 'table-success';
        
    }
    if(cat_name=='Bajaj')
    {
        let tr=document.getElementById(val2)
        
        tr.className = 'table-secondary';
        
    }
    document.getElementById(val2).addEventListener('mouseleave',function(){
        this.className='';
    },false);

    
    
}
//Dtatutility



