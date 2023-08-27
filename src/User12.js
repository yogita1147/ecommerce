import React from "react";
 
class User12 extends React.Component
{
constructor()
{
    super();
    this.state={
        count:0,
    }

}
f1()
{
    this.setState(prevState=>({count:prevState.count+1}),(prevState)=>console.log(this.state.count))
}
f3()
{
    this.setState(prevState=>({count:prevState.count-1}))
}

f2()
{
    this.f1();//1  3
    this.f1();//2  3
    this.f1();//3   3
}
render()
{
    return(
        <>
        <h2>{this.state.count}</h2>
        <button onClick={()=>this.f1()}>Increment</button>
        <button onClick={()=>this.f3()}>Decrement</button>
        </>
    )
}
}

export default User12;