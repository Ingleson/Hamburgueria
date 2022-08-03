import { useState, useEffect } from 'react';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Main from './Components/Main';
import Product from './Components/Product/index';
import './app.css'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [products, setProducts] = useState([]);
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [filterInput, setFilterInput] = useState('');
  
  function addCart( idCart ) {
    const forCart = products.find(({id}) => idCart === id);
    const haveOrNo = productsOnCart.find(({id}) => forCart.id === id)
    !haveOrNo ? setProductsOnCart([...productsOnCart, forCart ]) 
    :
    toast.error('Produto já existe no carrinho!');
  }
  
  function deleteCard( idCart) {
    const remaining = productsOnCart.filter(({id}) => idCart !== id);
    setProductsOnCart(remaining);
    toast.success('Produto removido!')
  }

  useEffect(() => { 
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
    .then(response => response.json())
    .then(response => setProducts(response))
    .catch(error => console.log(error));
  }, [products])

  const totalValue = productsOnCart.reduce((acc, {price}) => acc + price, 0)

  return (
    
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <ToastContainer />
      <Header filterInput={filterInput} setFilterInput={setFilterInput}/>
      <Main>
        <Product products={products} addCart={addCart} />
        <Cart productsOnCart={productsOnCart} totalValue={totalValue} deleteCard={deleteCard} />
      </Main>
      
    </div>
  );
}

export default App;
