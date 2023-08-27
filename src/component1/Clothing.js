import React, { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Element from "./Element";
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Description from "./Description";
import './Clothing.css';
import Header  from "./Header";


function Clothing()
{
  const [apiArray,setApiArray]=useState([]);
  const [apiArrayDuplicate,setApiArrayDuplicate]=useState([]);
   const [heading,setHeading]=useState('');



  
  useEffect(()=>{

    const fetchApi=async ()=>{
      const res =  await fetch("https://fakestoreapi.com/products")
      const data = await res.json();
      console.log(data)
      setApiArray(data)
      setApiArrayDuplicate(data);
      console.log(apiArray,'apiIN');
    }
    fetchApi()
  },[])
  console.log(apiArray,'apiOUt');
  const transfer=()=>
  {
    console.log('transer');
  }

  const filtering=(CATEGORY)=>
  {
     const UpdatedList=apiArray.filter(
         (dataEach)=>{
             return dataEach.category===CATEGORY;
         }
     
     )
     console.log('inside filterinh');
     setApiArrayDuplicate(UpdatedList)
     setHeading(CATEGORY);
     console.log(apiArrayDuplicate);
  }
  const Navigation=()=>{
    const Navigate=useNavigate();
    Navigate('/description')
    console.log('function');
  }
  return(
   
    <>
    <Header/>
    
     < Navbar apiDataArray={apiArray} heading={heading} filtering={filtering} apiArrayDuplicate={apiArrayDuplicate} tranfer={transfer}/>
     <hr/>
     <h3 style={{color:'rED',textAlign:'center',cursor:"pointer"}}><u>{heading.toUpperCase()}</u></h3>
     <Element apiDataArray={apiArray}  apiArrayDuplicate={apiArrayDuplicate} Navigation={Navigation}/>
     </>
  )
}

export default Clothing;