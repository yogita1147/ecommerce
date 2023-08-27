import React from "react";
import { useState,useEffect } from "react";
import image from './user.webp';
import styles from './index.module.css'


const C3=()=>
{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => setdata(json))},[]);

  
   const filtereddata=data.filter((apidata=>apidata.postId==0));
    return (
        <>
        {filtereddata.map((jss)=>
        (
          <>
          <h3>{jss.postId}</h3>
          <h4>{jss.name}</h4>
          <h5>{jss.mail}</h5>
          </>
        ))
        

        }
        </>

    )

}

export default C3;