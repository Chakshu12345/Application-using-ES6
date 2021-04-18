

class UIGenerator {
    selectUI(dataSource){
        // return select
    }
    
    
    generateCat(cat){
            //console.log(cat)
        var data=''
        data+=`<select name="group" id="pcat">`
        let i
        for(i in cat){
        data+=`<option value=${cat[i]}>${cat[i]}</option>`    
        }
        //console.log(val)
        data+=`</select>`
        //console.log(data)
        return data
    }

     ShowAllData(data){
        //console.log(data)
        if(data === undefined){
            return '<div>Invalid Data Source</div>';
        }
        if(data.length === 0 ){
            return '<div>No Records</div>';
        }
        // logic for generating the table
        var table="";
        // get all keys for the 0th record
        var headers = Object.keys(data[0]);
        table+= "<table  class='table table-bordered '>";
        table += "<thead><tr>"
        for(var c=0;c<headers.length;c++){
            table+= "<th >"+headers[c]+"</th>"; 
        }   
        table+="<th>Delete</th>" 
        table+="</tr></thead>";
        table+="<tbody>";
        for(let row=0;row<data.length;row++){
            let cat_name=data[row]['CategoryName']
            let ProductRowId=data[row]['ProductRowId']
            table+=`<tr value='${cat_name}' id=${ProductRowId}  onmouseover=getrow('${cat_name}',${ProductRowId}) >`; // each row is a JSON object from JSON Array
            for(var d=0;d<headers.length;d++){
                // dataSource[row][headers[d]], for every row in data source, read every property (key) value 
                table+= "<td >"+data[row][headers[d]]+"</td>"; 
            }  
            table+= `<td><button class="btn btn-outline-danger" id='delete_p' onClick='DeleteProduct(${data[row]['ProductRowId']})'>Delete</button></td>`
            table+=`</tr>`;
        }
        table+="</tbody>";
        table+="</table>";
        return table;
        //return table;

    }

    generateMan(man){
        //console.log(cat)
        var data=''
        data+=`<select name="group" id="pman" >`
        let i
        for(i in man){
        data+=`<option value=${man[i]}>${man[i]}</option>`    
        }
        //console.log(val)
        data+=`</select>`
        //console.log(data)
        return data
    }

   

    PDropdown(dataSource){
        //console.log(dataSource)
        
        let data=''
        
        for(let row=0;row<dataSource.length;row++){ 
            //console.log(row)
            //console.log(dataSource[row]['ProductName']) 
            data+=`<option value=${dataSource[row]['ProductRowId']}>${dataSource[row]['ProductName']}(${dataSource[row]['ProductId']})</option>`   
        }
        //console.log(val)
        
        //console.log(data)
        return data
    }

   

    
}
