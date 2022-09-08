import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer idProd={1} />
    </>
  );
}

export default App;
