import React, { useState,useEffect } from "react";


function Deletereq()
{
const [data,setData]=useState([]);
fetch('https://api.edzipp.com/api/v1/myVideos?user_id=141&npp=10&page=1/').then((res)=>{res.json();console.log(res.json())}).then(data1=>setData(data1.data))

const deleteFunction=(ID)=>{
  //  url='https://api.edzipp.com/api/v1/myVideos?user_id=141&npp=10&page=1/';
  //  JSON.stringify(url);
  // fetch('https://api.edzipp.com/api/v1/myVideos?user_id=141&npp=10&page=1/',{
  //   method:'delete',
  // }).then(res=>res.json()).then(res1=>console.log('deleted '+ID))

}

return(
    <>
    <table>
        <tr>
            <th>ID</th>
            {/* <th>TITLE</th>
            <th>BODY</th>*/
           <th> DELETE</th>}
        </tr>
        {
        data.map(filtered=>
           <>
           <tr>
            <td>{filtered.id}</td>
            {/* <td>{filtered.title}</td>
            <td>{filtered.body}</td> */}
            <td><button onClick={()=>deleteFunction(filtered.id)}>Delete</button></td>
           </tr>
           </> )
        }
    </table>
    </>
)
}
export default  Deletereq;