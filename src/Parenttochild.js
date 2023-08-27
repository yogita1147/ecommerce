import React from "react";

function Parenttochild(props)
{
    return(
        <>
        <h3>child component...NAME:::{props.data.name}  AGE:::{props.data.age}</h3>
        </>
    )
}

export default Parenttochild;