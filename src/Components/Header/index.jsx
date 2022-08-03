import {HeadPage} from './style.js'

function Header({filterInput, setFilterInput}) {
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
          value={filterInput}
          onChange={event => setFilterInput(event.target.value)}
          />
          <button type='submit'>Pesquisar</button>
        </form>
      </div>

    </HeadPage>
  )
}

export default Header;