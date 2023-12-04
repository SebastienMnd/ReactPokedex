import { useEffect, useState } from "react"
import InformationPokemon from "./layouts/InformationPokemon"
import ListPokemons from "./layouts/ListPokemons"

function App() {

  // États
  const [pokemons, setPokemons] = useState([])
  const [nextPage, setNextPage] = useState('')
  const [previousPage, setPreviousPage] = useState('')

  const [currentPokemon, setCurrentPokemon] = useState({})

  // Chargement initial
  useEffect(() => {
    loadData('https://pokeapi.co/api/v2/pokemon/?offset=200&limit=20')
    loadPokemon('https://pokeapi.co/api/v2/pokemon/1')
  }, [])

  // Chargement des données
  const loadData = (page) => {
    fetch(page)
      .then(r => r.json())
      .then(data => {
        setPokemons(data.results)
        setNextPage(data.next)
        setPreviousPage(data.previous)
      })
  }

  const loadPokemon = (url) => {
    fetch(url)
      .then(r => r.json())
      .then(data => 
        setCurrentPokemon(data)
      )
  }

  // Actions des boutons
  const getNextPage = () => (loadData(nextPage))
  const getPreviousPage = () => (loadData(previousPage))
  const changeCurrentPokemon = (url) => {
    loadPokemon(url)
  }

  return (
    <div className="application">
      <ListPokemons
        pokemons={pokemons} changeCurrentPokemon={changeCurrentPokemon}
        previousPage={previousPage} getPreviousPage={getPreviousPage}
        nextPage={nextPage} getNextPage={getNextPage}
      />

      <InformationPokemon
        pokemon={currentPokemon}
      />
    </div>
  )
}

export default App