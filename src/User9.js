import { useState } from "react";

function User9()
{
    const [userEr,setUserer]=useState(false);
    const [passEr,setPasser]=useState(false);
    function submitHandler(e)
    {
        e.preventDefault();
        if(document.getElementById('nameid').value.length<3||document.getElementById('passid').value.length<3)
        {
            alert('INVALID !!!');
        }
    }//submitHandler function end
    function userHandler(e)
    {
   let len=e.target.value.length;
   if(len<3)
   {
    setUserer(true);
   }
   else{
    setUserer(false);
   }
}
   function passHandler(e)
    {
   let len1=e.target.value.length;
   if(len1<3)
   {
    setPasser(true);
   }
   else{
    setPasser(false);
   }
    }
    return (
        <>
        <div style={{margin:200,background:'skyBlue',padding:22,borderWidth:7,borderColor:'green'}}>
        <h2>Login</h2>
        <input type='text' id='nameid' placeholder="ENTER YOUR NAME" onChange={userHandler}/><br/>{userEr?<span>ENTER VALID USER NAME</span>:""}<br/>
        <input type='text' id='passwordid' placeholder="ENTER YOUR PASSWORD" onChange={passHandler}/><br/>{passEr?<span>ENTER VALID PASSWORD NAME</span>:""}<br/>
        <input type='submit'onClick={submitHandler}/>
         </div>
        
        </>
    )
}

export default User9;