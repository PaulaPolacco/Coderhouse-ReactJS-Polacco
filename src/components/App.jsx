import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import PromosCombos from './PromosCombos';
import Personalizados from './Personalizados';
import CartWidget from './CartWidget';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
         {/*  <Route path="/" element={<Galeria/>}></Route> */}
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/detalles/:id" element={ <ItemDetailContainer />}></Route>
          <Route path="/categoria/:id" element={ <ItemDetailContainer />}></Route>
          <Route path="/promosycombos" element={<PromosCombos/>}></Route>
          <Route path="/personalizados" element={<Personalizados/>}></Route>
          <Route path="/cart" element={<CartWidget/>}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
