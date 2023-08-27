import React from "react";

class ComponentDidMount1 extends React.Component
{
    constructor()
    {
        console.warn("Constructor Called..");
        super();
        this.state={
            name:"ria",
        }
    }
    componentDidMount()
    {
        console.warn("componentDidMOunt");
    }
    render()
    {
       console.warn('render called');
       return(
        <>
        {/* {this.setState({name:'puja'})} ....due to this render is called infinite timez*/}
        <h1>ComponentDidMOunt</h1>
        <h2>{this.state.name}</h2>
        <button onClick={()=>this.setState({name:"pooja"})}>Click Me</button>
        </>
       )
    }
}

export default ComponentDidMount1;