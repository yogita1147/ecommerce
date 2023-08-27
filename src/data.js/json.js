import React, { useEffect, useState } from "react";
import styles from "./index.module.css"
import image from './logo192.png'
const C = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setdata(json));

    console.log(data);
  },[]);

  return (
    <>
      {data.map((jsondata) => (
        <>
        <div className={styles.outer}>
          <div className={styles.im}><img src={jsondata.url}  width='500px' height='500px'/></div>
            <div id='cont1' className={styles.diviv} >
            <div><h4>{jsondata.id}</h4></div>
            <div><h3>{jsondata.albumId}</h3></div>
            <div><p>{jsondata.title}</p></div>
            <div><h5>{jsondata.thumbnailUrl}</h5></div>
            <div><h3>{jsondata.id}</h3></div>
            </div>
            </div>
        </>
      ))}
    </>
  );
};
export default C;
