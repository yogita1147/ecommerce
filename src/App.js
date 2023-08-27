import logo from './logo.svg';
// import './App.css';
import Card from './module1';
import S1 from './module2'; 
import logo1 from './images.jpg'
import I from './module3';
import { useState } from 'react';
import C from './data.js/json';
import C1 from './data.js/json1'
import C3 from './data.js/json2';
import User from './User1'
import User3 from './User3';
import User4 from './User4';
import User5 from './User5';
import User6 from './User6';
import User10 from './User10';
import Axios1 from './Axios1'
import Form from './data.js/Form';
import User11 from './User11';
import Axios2 from './Axios2';
import FetchData from './FetchData';
import Postreq1 from './Postreq1';
import Deletereq from './Deletereq';
import ComponentDidMount1 from './ComponentDidMount1';
import ComponentDidUpdate1 from './ComponentDidUpdate1';
import ShouldComponentUpdate from './ShouldComponentUpdate';
import ComponentWillMount from './ComponentWillMount';
import User12 from './User12';
import Tut34 from './Tut34';
import Parenttochild from './Parenttochild';
import { Navbar } from 'react-bootstrap';
import  style1 from './style.css'
import Tut35 from './Tut35';
import Tut36 from './Tut36';
import Childtoparent from './Childtoparent';
import { BrowserRouter, Route, Routes,Link, Navigate,Switch} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Navbar1 from './component/Navbar';
import ContactUs from './component/ContactUs';
import Page404 from './component/Page404';
import User1 from './component/User';
import Filter from './component/Filter';
import Props1 from './Props1';
import Clothing from './component1/Clothing';
import Description from './component1/Description';


let var1='q';

function App() {
 return(
  <>
    <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Clothing/>}/>
    <Route path='/description/:id' element={<Description/>}/>
    <Route path='/*' element={<h1 style={{position:"relative",top:"400px",left:'400px',color:'red'}}>404 PAGE NOT FOUND!!!</h1>}/>
    </Routes>
   </BrowserRouter>
  </>
 )
}

export default App;
