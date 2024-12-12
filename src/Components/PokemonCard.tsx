export default function PokemonCard({pokemon}) {

    console.log(pokemon);
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

