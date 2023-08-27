import React from "react";

function Tut35()
{
    const items=[
       { name:'Anil',email:'anil@test.com',address:[{hs:'#11',c1:'noida',cn:'india'},{hs:'#12',c1:'delhi',cn:'india'}]},
       { name:'Ajay',email:'ajay@test.com',address:[{hs:'#11',c1:'noida',cn:'india'},{hs:'#12',c1:'delhi',cn:'india'}]}

    ]
    return(
        <>
        <table>
           <tbody>
            <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            </tr>
                {
                    items.map(
                        (item1)=>(
                            <tr>
                                <td>{item1.name}</td>
                                <td>{item1.email}</td>
                                <table>{item1.address.map((data)=>
                                (
                                    <>
                                    <tr>
                                        <td>{data.hs}</td>
                                        <td>{data.c1}</td>
                                        <td>{data.cn}</td>
                                        </tr>
                                        </>
                                    
                                ))}</table>
                            </tr>
                        )
                    )
                }
            
           </tbody>

        </table>
        </>

    )
}

export default Tut35;