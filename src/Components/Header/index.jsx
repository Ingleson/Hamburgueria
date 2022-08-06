import {HeadPage} from './style.js'

function Header({filterProd}) {
  return(
    <HeadPage>
      <div className='base'>
        <div className='logo'>
          <h2>Burguer</h2>
          <h5>kenzie</h5>
        </div>
        <form className='search'>
          <input type="text" 
          placeholder='Digitar Pesquisa'
          onChange={event => filterProd(event.target.value.trim())}
          />
          <button type='submit' onClick={(e) => e.preventDefault()}>Pesquisar</button>
        </form>
      </div>

    </HeadPage>
  )
}

export default Header;