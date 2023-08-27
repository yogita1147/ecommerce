import { useState } from "react";
//form action
function User8()
{
    const [data,setdata]=useState({name:'',age:0,city:''})
    function onSubmit()
    {
      setdata(data.name=document.getElementById('nameid').value,data.age=document.getElementById('ageid').value,data.city=document.getElementById('cityid').value);
      alert('hey'+data.name+"\nYour age is "+data.age+"\n Your city is "+data.city);
      
    }
    return(
        <>
        <form >
            <br/><input id='nameid' type='text' placeholder="Enter your name"/><br/><br/><br/>
            <input id='ageid'type='text' placeholder="Enter Your age"/><br/><br/><br/>
            <input id='cityid'type='text' placeholder="Enter Your City"/><br/><br/><br/>
            <button onClick={()=>onSubmit()}>Click Me</button>
        </form>
        </>
    )
}
export default User8;