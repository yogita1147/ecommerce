import React from "react";

function Tut34()
{
    const items=[{name:'y',email:'y@'},{name:'p',email:'p@'},{name:'q',email:'q@'}]
    return(
     <table border={2}>
        <tr>
            <td>NAME</td>
            <td>EMAIL</td>
        </tr>
        <tr>
            {
                items.map((item)=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    </tr>)
            }
        </tr>
     </table>
    )
}
export default Tut34;