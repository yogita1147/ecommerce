import { useState } from "react";
//checkbox display .....

function User6()
{
    const [print,setprint]=useState(false);
    const [data,setdata]=useState([]);
    function valueGet()
    {
        let arr1=[];
        let chk1=document.getElementById('playID');
        let chk2=document.getElementById('eatID');
        let chk3=document.getElementById('sleepID');
        if(chk1.checked==true)
        {
            arr1.push(chk1.value);
            
        }
        if(chk2.checked==true)
        {
            arr1.push(chk2.value);
        }
        if(chk3.checked==true)
        {
            arr1.push(chk3.value);
        }
        console.log(arr1);
        setdata(arr1);
        
    }
    

return(
    <>
    <div>{print?<h1>{data.map((ele)=>{return ele+" "} )}</h1>:null}</div>
    <label htmlFor='playID'>PLAY</label>
    <input  id='playID'type='checkbox'value='play'/><br/>
    <label htmlFor='sleepID'>SLEEP</label>
    <input  id='sleepID'type='checkbox' value='sleep'/><br/>
    <label htmlFor='eatID'>EAT</label>
    <input id='eatID' type='checkbox' value='eat'/><br/>
    <button onClick={()=>(valueGet(),setprint(true))}>Insert Value</button>
</>)
}
export default User6;