import { useState } from "react";

function User5(){
    const [data,setdata]=useState('');
    function getValue(val)
    {
        console.log(document.getElementById('inputid').value);
        setdata(val.target.value);
    }
    
return(
    <>
    <h1>{data}</h1>
    <input id='inputid' type='text' onChange={getValue}/>
    <button onClick={()=>{console.log(data);alert(data)}}>update Value </button>
    </>
)
}

export default User5;