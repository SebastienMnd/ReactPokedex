
import { useState } from "react"
import Button from "../components/Button"
import LinePokemon from "../components/LinePokemon"

function ListPokemons({ pokemons, changeCurrentPokemon, previousPage, getPreviousPage, nextPage, getNextPage }) {


	return (
		<div className="pokemons" >
			<Button
				text="Page précédente"
				disabled={(previousPage ? false : true)}
				action={getPreviousPage}
			/>
			

			<div className="list">
				{pokemons.map(pokemon => {
					return <LinePokemon key={pokemon.name} changeCurrentPokemon={changeCurrentPokemon} pokemon={pokemon} />
				})}
			</div>

				<Button
					text="Page suivante"
					disabled={(nextPage ? false : true)}
					action={getNextPage}
				/>
		</div>
	)
}

export default ListPokemons