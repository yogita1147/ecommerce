import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import "./Clothing.css";
function Description() {
  const params = useParams();
  const { id } = params;
  console.log(id, "id");
  const [apiArray, setApiArray] = useState([]);
  const [apiArrayDuplicate, setApiArrayDuplicate] = useState([]);
  const [apiArrayDuplicate1, setApiArrayDuplicate1] = useState([]);
  const [heading, setHeading] = useState("");
  const [getId,setGetId]=useState([]);

  const [ele, setEle] = useState([]);

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        return response.json()
      }).then(data => {
        setApiArray(data)
      })
  }
  console.log(apiArray, "apiout");
  const transfer = () => {
    console.log("transer");
  };

  const filtering = (CATEGORY) => {
    
    const UpdatedList = apiArray.filter((dataEach) => {
      return dataEach.category === CATEGORY;
    });

    console.log("inside filterinh");
    setApiArrayDuplicate(UpdatedList);
    setHeading(CATEGORY);
    console.log(apiArrayDuplicate);
  };
  const elementFilter = () => {
  
   const filteredId=apiArray.filter((t)=>{return t.id ==id})
   setEle(filteredId);
  
  };
  const Navigate = useNavigate();
  const Navigation = () => {
   
    Navigate("/description");
    console.log("function");
  };
  console.log(apiArray, "iiiii");
console.log(ele);
  return (
    <>
      <Header />
      <Navbar
        apiDataArray={apiArray}
        heading={heading}
        filtering={filtering}
        apiArrayDuplicate={apiArrayDuplicate}
      />
<button onClick={()=>elementFilter()}>DESCRIPTION</button><button onClick={()=>Navigate('/')}>HOME</button>
      {ele.map((each) => {
        return (
          <div className='elementBox'>
          <div className="elementBoxContent">
            {/* <h2>{each.id}</h2> */}
            <h1 style={{color:'rgb(227, 71, 43)',cursor:"pointer"}}>{each.title}</h1>
            <img  src={each.image}/>
            <h3 className="boxDescription" style={{cursor:"pointer"}}>{each.description}</h3>
          </div>
          </div>
        );
      })} 

      <hr />
    </>
  );
}
export default Description;
