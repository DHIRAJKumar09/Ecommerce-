import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import { Nav } from './component/Nav/Nav.js';
import SignUp from './component/Signup/Signup';
import { PrivateComponents } from './component/PrivateComponents';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav></Nav>
    <Routes>
    <Route element={<PrivateComponents/>}>
      <Route path='/' element={<h1>E-dashboard</h1>}></Route>
      <Route path='/add' element={<h1>E-dashboard Add product</h1>}></Route>
      <Route path='/update' element={<h1>E-dashboard Update Product </h1>}></Route>
      <Route path='/delete' element={<h1>E-dashboard Delete Product</h1>}></Route>
      <Route path='/profile' element={<h1>E-dashboard Profile</h1>}></Route>
      <Route path='/logout' element={<h1>E-dashboard Logout</h1>}></Route>
    </Route>
      <Route path='/signup' element={<SignUp/>}></Route>

    </Routes>
   
    
   

    </BrowserRouter>
   
    
    </div>
  );
}

export default App;
