 function User3(props)
 {
    return(
        <>
        <div style={{backgroundColor:'skyblue',margin:10}}>
        <h2>Hey User {props.name}</h2>
        <h3>Your Age is {props.age}</h3>
        <h4>YOur address is {props.other.address}</h4>
        <h4>Your hobby is{props.other.hobby}</h4>
        </div>
        </>
    )
 }

 export default User3;