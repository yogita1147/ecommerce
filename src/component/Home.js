import React, { useState } from "react";
import { useLocation } from "react-router-dom";


class Home extends React.PureComponent
{
    constructor()
    {
        super();
        this.state={
            counter:1,
        }
    }

    
    render()
    {
        // const location=useLocation();
        // console.log(location);
        return(
            <>
            <h2>    PURE COMPOENT....{this.state.counter}</h2>
            <button onClick={this.setState({counter:this.counter+1})}>Click me</button>
            </>
        )

    }
    
   
}

export default Home;