import { useSearchParams } from "react-router-dom";
function Filter()
{
    const [searchParam,setSearchParam]=useSearchParams();
    console.warn(searchParam.get('age'))
    return(
        <>
        <h2>FILTER PAGE...</h2>
        </>
    )
}
export default Filter;