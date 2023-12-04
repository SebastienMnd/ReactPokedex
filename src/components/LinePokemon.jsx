function LinePokemon( { pokemon, changeCurrentPokemon } ) {
	return (
		<>
			<button className='btn btn-secondary' onClick={() => changeCurrentPokemon(pokemon.url)}> {pokemon.name} </button>
		</>
	)
}

export default LinePokemon