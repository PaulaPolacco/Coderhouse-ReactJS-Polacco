import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import PromosCombos from './PromosCombos';
import Personalizados from './Personalizados';
import CartListContainer from './CartListContainer';
import Checkout from './Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/detalles/:id" element={ <ItemDetailContainer />}></Route>
          <Route path="/categoria/:categoria" element={ <ItemListContainer />}></Route>
          <Route path="/promosycombos/:categoria" element={<ItemListContainer/>}></Route>
          <Route path="/filtro/:filtro" element={<ItemListContainer />}></Route>
          <Route path="/destacados/:destacados" element={<ItemListContainer/>}></Route>
          <Route path="/cart" element={<CartListContainer/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
