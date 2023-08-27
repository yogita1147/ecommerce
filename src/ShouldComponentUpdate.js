import React from "react";

class ShouldComponentUpdate extends React.Component{
    constructor()
    {
        super();
        this.state={count:0};
    }
    componentDidMount()
    {
        console.log('cdm');
    }
    componentDidUpdate(preProp,preState,snapshot)
    {
        console.log('cdu',preState.count);
        

    }
    shouldComponentUpdate() 
    {
        //prevent rerendering....
        console.log('scu',this.state.count);
        if(this.state.count>5 && this.state.count<10)
        {return true;}
        else 
        return false
    }
    render()
    {
        return(
            <>
            <h2>SHOULD COMPONENT DID MOUNT{this.state.count}</h2>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
            </>
        )
    }
}
export default ShouldComponentUpdate;