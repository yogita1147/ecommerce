import React, { useEffect, useState } from "react";


const C1 = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setdata(json))

    },[])
    return (
    <>
    {data.map((jsonData)=>
    (<>
        <h1>{jsonData.userId}</h1>
        <h2>{jsonData.id}</h2>
        <h3>{jsonData.title}</h3>
        </>
        )
    )}

    
    </>
    )
    }

export default C1 ;