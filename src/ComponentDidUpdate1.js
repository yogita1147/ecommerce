import React from "react";

class ComponentDidUpdate1 extends React.Component
{
    constructor()
    {
        super();
        this.state={
            count:0,
        }
    }
    componentDidMount()
    {
        console.log('componentDidMOunt');

    }
    componentDidUpdate(preProp,preState,snapshot)
    {
        console.log('CDU',preState.count);
    }

    render()
    {
        return(
            <>
            <h2>ComponentDidUpdate{this.state.count}</h2>
            <button onClick={()=>this.setState({count:1})}>Click Me</button>
            </>
        )
    }
 
}
export default ComponentDidUpdate1;