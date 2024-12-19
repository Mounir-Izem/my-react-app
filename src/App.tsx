import { useState } from "react";
import PokemonCard from "./Components/PokemonCard";

function App() {
	const pokemonList = [
		{
			name: "bulbasaur",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
		},
		{
			name: "charmander",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
		},
		{
			name: "squirtle",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
		},
		{
			name: "pikachu",
			imgSrc:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
		},
		{
			name: "mew",
		},
	];

	const [pokemonIndex, setPokemonIndex] = useState(0);

	const changePokemon =(i) =>{
		setPokemonIndex(i)
		
	}
	console.log(pokemonIndex)

	return (
		<div>
			<nav>
				{pokemonList.map((pokemon, i) => (<button type="button" key={pokemon.name} onClick={() => changePokemon(i)}>{pokemon.name}</button>))}
			</nav>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
		</div>
	);
}

export default App;
