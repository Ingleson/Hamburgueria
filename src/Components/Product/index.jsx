import { CardProduct, ContainerProduct } from "./style.js";

function Product({products, addCart}) {

  return(
    <ContainerProduct>
      {products.map(({id, img, name, category, price}) => (
        <CardProduct key={id} >
          <figure>
            <img src={img} alt="img-product" />
          </figure>
          <div>
            <h3>{name}</h3>
            <span>{category}</span>
            <p>R$ {price}</p>
            <button onClick={() => {addCart(id)}}>Adicionar</button>
          </div>
        </CardProduct>
      ))}
    </ContainerProduct>
  )
}

export default Product;
