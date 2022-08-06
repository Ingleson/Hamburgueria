import { AllValue } from "./style";

function ValueTotal({totalValue, deleteAll}) {
  return(
    <AllValue>
      <div>
        <p>Total</p>
        <span>R$ {totalValue.toFixed(2)}</span>
      </div>
      <button onClick={deleteAll}>Remover todos</button>
    </AllValue>
  )
}

export default ValueTotal;