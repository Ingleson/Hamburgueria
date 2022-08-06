import ValueTotal from "../ValueTotal";
import { ContainerCart, VoidCart } from "./style";

function Cart({productsOnCart, totalValue, deleteCard, deleteAll}) {

  return(
    <ContainerCart productsOnCart={productsOnCart}>
      <div className="green-head">
        <span>Carrinho de compras</span>
      </div>
      <ul className="gray-cart">
        {productsOnCart.length > 0 ? 
          productsOnCart.map(({ id, name, img, category}) => (
            <VoidCart key={id}>
              <div>
                <img src={img} alt="item do carrinho" />
                <div className="name-category-box">
                  <h4>{name}</h4>
                  <span>{category}</span>
                </div>
                <button onClick={() => deleteCard(id)}>Remover</button>
              </div>
            </VoidCart>
          ))
          :
          <>
            <span>Sua sacola está vazia</span>
            <p>Adicione itens</p>
          </>
        }
        
      </ul>
      {productsOnCart.length > 0 && <ValueTotal totalValue={totalValue} deleteAll={deleteAll}/>}
    </ContainerCart>
  )

}

export default Cart;