const urlApi = "https://pokeapi.co/api/v2/pokemon";
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let i1 = 1;
let i2 = 20;

const pokemones = () => {
    $("#tarjetitas").innerHTML = "";
    for (let i = i1; i < i2; i++) {
        fetch(`${urlApi}/${i}`)
            .then((res) => res.json())
            .then((data) => renderPokemon(data));
    }
};

window.onload = pokemones();
