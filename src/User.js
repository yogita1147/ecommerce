import React from "react";

class User extends React.Component
{
    constructor()
    {
        super();
        this.state={data:1};
    }
    update()
    {
      this.setState({data:this.state.data+1});
    }
    render()
    {
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.update()}>Click Me</button>
            </>
        )
    }
}
export default User;