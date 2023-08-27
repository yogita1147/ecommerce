import React, { useState } from "react";
import { BrowserRouter,Routes,Route,useNavigate} from "react-router-dom";

function Element({apiDataArray,apiArrayDuplicate,Navigation})
{
    const navigation=useNavigate();
   
        return(
            <>
        {
            apiArrayDuplicate.map((user)=>{
             const {image,price,id,category,description,title}=user;
             return(
                <div key={id} className='elementBox'>
                    <img  className='elementImg'src={image}/>
                    <div className="elementBoxContent">
                    <h2 style={{color:'rgb(227, 71, 43)',cursor:"pointer"}}><u>{title}</u></h2>
                    <br/><br/>
                    <h6 className="boxDescription" style={{cursor:"pointer"}}>{description}</h6>
                    <h4 style={{marginTop:"70px" ,cursor:"pointer"}}>&#8377;{price}</h4>
                    <button onClick={()=>navigation(`/description/${id}`)}>Description</button>
                   
                    </div>
                    </div>
             )
            })
        }
        </>
        )
}
export default Element;



 {/* {apiArray.map((data)=>
        {
            return(
            <div>

            {/* <h6>{data.id}</h6> */}
            {/* <h2>{data.title}</h2>
            <h5>{data.price}</h5>
            <h4>{data.category}</h4>
            <img src={data.image} alt='img'/>
            </div>) */}
        // })} */}
        