import axios from "axios";
import { useEffect,useState} from "react";

// function Axios1()
// {
//     const [data,setdata]=useState([]);
//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{setdata(res.data.slice(0,12))})
//     })
    
//     const clickedFunction=(value)=>{
//         console.log(value);

//         setdata(data.filter(el=> value!=el.id ));
      
        
//     }

//     return(
//         <>
//          <table id='tableId' border={2}>
//             <tr >
                
//                 <th>ID</th>
//                 <th>TITLE</th>
//                 <th>body</th>
//                 <th>Button</th>
//             </tr>
        
//         {data.map((filtering)=>{
//         const {userId,id,title,body}=filtering;
//         return(
//             <>
//             <tr><td>{id}</td><td>{title}</td><td>{body.slice(0,50).toUpperCase()}</td><td><button onClick={()=>clickedFunction(filtering.id)}>Delete</button></td></tr></>)
//         })}
//         </table>
//         </>
//     )
// }
// export default Axios1;

function Axios1() {
    const [apiData,setApiData] = useState([]);
    const [FilterData,setFilter] = useState([]);
    const abc = async () => {
        const response = await fetch("https://api.edzipp.com/api/v1/myVideos?user_id=141&npp=10&page=1");
        var data = await response.json();
        console.log(data.data);
        setApiData(data.data);
    }

    const deletedata=(value)=>{
        console.log(value)
        // console.log(apiData)
        
        setApiData(apiData.filter(el=> value!=el.id ));
        
        
   }
  return (
    <div>
      <button onClick={()=>abc()}>Hellooo</button>
    
    <div>{apiData?.map((item,i)=>(     //?. works when data exit .if not then next code not works
        <div key={item.id}>
        <p>{item.id}</p>
        <button onClick={()=>deletedata(item.id)}>Delete</button>
        </div>
      ))}
    </div>

    
</div>
  )
}

export default Axios1;