import { useParams } from "react-router-dom";
function User()
{
    const params=useParams();
    const {name}=params;
    return(
        <>
        <h3>USER PAGE....{name}</h3>
        </>
    )
}

export default User;