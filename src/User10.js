import React from "react";

function User10(props)
{
return(
    <>
    <h2>{props.name}</h2>
    <button onClick={props.data}>data from parent component</button>
    </>
)
}
export default User10;