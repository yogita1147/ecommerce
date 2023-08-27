import {Link} from 'react-router-dom';


function Navbar()
{
    return(
        <>
        <Link to='/'>HOME </Link>
        <Link to='/About'>About </Link>
        <Link to='/ContactUs'>Contact us </Link>
        <Link to='/User/anil'>Anil</Link> 
        <Link to='/User/peter'>Peter</Link>
        <Link to='/Filter'>Filter</Link>
        </>

    )
}
export default Navbar;