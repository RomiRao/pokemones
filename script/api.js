const urlApi = "https://pokeapi.co/api/v2/pokemon";

const pokemones = () => {
    for (let i = 1; i < 50; i++) {
        fetch(`${urlApi}/${i}`)
            .then((res) => res.json())
            .then((data) => renderPokemon(data));
    }
};

pokemones();
