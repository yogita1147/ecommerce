import React from "react";

class User4 extends React.Component
{
render()
{
    console.log(this.props);
    return(
        <>
        <h3>heyy User{this.props.name}</h3>
        <h4>Your age is{this.props.age}</h4>
        <h5>YOur hobby is{this.props.other.hobby}</h5>
        </>
    )
}
}
export default User4;