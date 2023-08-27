import React, { useState } from "react";

function FetchData()
{
    const [data,setData]=useState([]);
   let  url='https://jsonplaceholder.typicode.com/posts';
fetch(url).then(response=>response.json()).then(fetchData=>setData(fetchData));
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

export default FetchData;