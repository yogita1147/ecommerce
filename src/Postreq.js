import React, { useState } from "react";
 
function Postreq()
{
    const url='https://jsonplaceholder.typicode.com/posts';
    const [data,setData]=useState([])
    const data1={userId:11,id:101,title:"1111111111111111",body:"1212121212122222"};
   const params={
          method:'post',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(data1),
    }
    fetch(url,params).then(response=>response.json()).then(data1=>console.log(data1));
    fetch(url).then(response=>response.json()).then(setData(data))
    return(
        <>
        <table>
            <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>BODY</th>
            </tr>
                <>
                {
                data.map((filtered)=>
                <tr>
                    <td>{filtered.id}</td>
                    <td>{filtered.title}</td>
                    <td>{filtered.body}</td>
                </tr>
                    
    
                )
    }
                </>
    
            
        </table>
        </>
    )



}
export default Postreq;