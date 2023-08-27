import React from "react";
import './Clothing.css'
import LOGO from './logo.png'

 function Header()
{
    return(
        <>
        <div className='logo'>
    <img src={LOGO}  style={{width:'70px',display:"inline",marginTop:"-8px"}}/> <br/><br/>
     <h2 style={{display:'inline',cursor:"pointer"}}> Y'Z PRODUCTS..</h2>
     </div>
     <hr/>
     </>
    )
}
export default Header;