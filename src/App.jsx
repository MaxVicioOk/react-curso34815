import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/CartView/CartView';
import Pedido from './components/Pedido/Pedido';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Header/>
        <Routes>
          <Route path= "/" element={<ItemListContainer/>}/>
          <Route path= "/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path= "/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path= "/carrito" element={<CartView/>}/>
          <Route path= "/pedido/:idPedido" element={<Pedido/>}/>
          <Route path= "*" element={<h2>Error 404: Esta página no existe</h2>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
