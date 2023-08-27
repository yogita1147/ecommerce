import React, { useState } from "react";

function Postreq1() {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState([]);
  const [show,setshow]=useState(false)
  const addData = () => {
    const params = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, body }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", params)
      .then((res) => res.json())
      .then(() => console.log("response" + id + title + body));
  };

  function showData() {
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setData(data))
  }

  return (
    <>
      <h2>POST REQUEST</h2>
      ID
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <br />
      <br />
      TITLE
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      BODY
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <br />
      <br />
      <button value="add"  onClick={() => addData()}>addData</button>
      <button value="showData" onClick={() => setshow(true)}>
        showData
      </button>
      {show?    <>
      {showData()} 
        
        
          <table id="tableId" border={2}>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>body</th>
              
            </tr>

            {data.map((filtering) => {
              const { userId, id, title, body } = filtering;
              return (
                <>
                  <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{body.slice(0, 50).toUpperCase()}</td>
                  </tr>
                </>
              );
            })}
          </table>
        </>
    :null}
    </>
  );
}
export default Postreq1;
