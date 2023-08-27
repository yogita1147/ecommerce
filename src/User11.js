import React from "react";
class User11 extends React.Component {
  constructor() {
    super();
    console.log(this.state);
    console.log("222");
    this.state = {
      email:'abc@gmail.com',
    };
   
  }
   
  render() {
  
    console.warn("Your render");
    return (
      <>
        <h1>{this.state.name}</h1>
        <h3>{this.props.age}</h3>
        <button onClick={()=>this.setState({email:'aaa@gmail.com'})}>STATE CHANGER</button>
      </>
    );
  }
}
export default User11;
