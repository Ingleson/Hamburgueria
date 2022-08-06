import { useState, useEffect } from 'react';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Main from './Components/Main';
import Product from './Components/Product/index';
import './app.css'

import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';

function App() {

  const [products, setProducts] = useState([]);
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  
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
  function deleteAll() {
    const voidCart = productsOnCart.filter(({name}) => 'é diferent sim carai' === name);
    setProductsOnCart(voidCart);
    toast.success('Carrinho esvaziado!')
  }
  function filterProd(inputValue) {
    
    const arrayFilter = products.filter(({name}) => name.toLowerCase().includes(inputValue.toLowerCase()));
    
    arrayFilter.length > 0 ? setProductsFiltered(arrayFilter) : setProductsFiltered(products);
  }
  

  useEffect(() => { 
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
    .then(response => response.json())
    .then(response => {
      setProducts(response);
      setProductsFiltered(response);
    })
    .catch(error => console.log(error));
  }, [])

  const totalValue = productsOnCart.reduce((acc, {price}) => acc + price, 0)

  return (
    
    <div className="App">
      <Header filterProd={filterProd}  />
      <Main>
        <Product productsFiltered={productsFiltered} addCart={addCart} />
        <Cart productsOnCart={productsOnCart} totalValue={totalValue} deleteCard={deleteCard} deleteAll={deleteAll} />
      </Main>
      
    </div>
  );
}

export default App;
