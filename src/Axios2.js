import axios from "axios";
import { useEffect,useState} from "react";

function Axios2()
 {
   const [data,setdata]=useState([]);
  useEffect(async()=>{
    const abc=await axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{setdata(res.data.slice(0,12))})
  })
    
  const clickedFunction=(value)=>{
       console.log(value);

        setdata(data.filter(el=> value!=el.id ));
      
        
       }

       return(
           <>
            <table id='tableId' border={2}>
               <tr >
                
                   <th>ID</th>
                   <th>TITLE</th>
                   <th>body</th>
                   <th>Button</th>
               </tr>
        
           {data.map((filtering)=>{
           const {userId,id,title,body}=filtering;
           return(
               <>
               <tr><td>{id}</td><td>{title}</td><td>{body.slice(0,50).toUpperCase()}</td><td><button onClick={()=>clickedFunction(id)}>Delete</button></td></tr></>)
           })}
           </table>
           </>
       )
   }
   export default Axios2;