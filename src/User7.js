import { useState } from "react"

function User7()
{
    function f1()
    {
        if(visible)
        {
            document.getElementById('div1').style.display='none';
            setvisible(false);
        }
        else{
            document.getElementById('div1').style.display='block';
            setvisible(true);
        }
    }
    const [visible,setvisible]=useState(true);
    return (
        <>
        <div id='div1'>
            HEY MAM ...
        </div>
        <button onClick={()=>f1()}>Click me</button>
        </>
    )
}
export default User7;