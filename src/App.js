import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContextApi from './context/ContextApi';
import {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Home from './views/Home';
import Description from './views/Description';
import ShoppingBasket from './views/ShoppingBasket';
import NotFound from './views/NotFound';


function App() {

  const [listProduct, setListProduct]= useState([]);
  const [totalPrice, setTotalPrice]= useState(0)
  const url ='/pizzas.json';
  const globalData= {listProduct, totalPrice, setTotalPrice}


  const getDataApi= async ()=>{
    const response= await fetch(window.location.origin+url);
    const getdata= await response.json();
    const newData=getdata?.map((data)=> Object.assign(data,{quantity:0}));
    setListProduct(newData)
  }

  useEffect(()=>{
    getDataApi();
  },[])

  return (
    <div className="App">
      
      <BrowserRouter>
        <ContextApi.Provider value={globalData}>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pizza/:id' element={<Description/>}/>
            <Route path='/carrito' element={<ShoppingBasket/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </ContextApi.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
