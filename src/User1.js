//Functional component with state

import { useState } from "react"


function User1()
{
    const [data,setdata]=useState('default ');
    function apple()
    {
        setdata('updated');
    }
    return (
        <>
        <h1>{data}</h1>
        <button onClick={apple}>Click me</button>
        </>
    )
}
export default User1;