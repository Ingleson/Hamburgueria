import { AllValue } from "./style";

function ValueTotal({totalValue, deleteCard}) {
  return(
    <AllValue>
      <div>
        <p>Total</p>
        <span>R$ {totalValue}</span>
      </div>
      <button onClick={deleteCard}>Remover todos</button>
    </AllValue>
  )
}

export default ValueTotal;