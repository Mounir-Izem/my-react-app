export default function PokemonCard() {

const pokemon = pokemonList[0];
    return (
        <figure>
            {
                pokemon.imgSrc && pokemon.name ?(
                    <div>
                        <img src ={pokemon.imgSrc} alt={"Photo d'un pokémon"}/> <p>{pokemon.name}</p>
                    </div>
                    
                ) : (
                    <p>???</p>
                )
            }
        </figure>
    )
}

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
