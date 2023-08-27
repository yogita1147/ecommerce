import React from "react";

function Childtoparent(props)
{
    const childVal='yogita';
    return(
        <>
        <h2>User Name</h2>
        <button onClick={()=>props.alert(childVal)}>click</button>

        </>
    )
}
export default Childtoparent;