const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// const hideElements = (selectors) => {
//     for (const eachSelector of selectors) {
//         $(eachSelector).classList.add("visually-hidden");
//     }
// };

// const showElements = (selectors) => {
//     for (const eachSelector of selectors) {
//         $(eachSelector).classList.remove("visually-hidden");
//     }
// };

const renderPokemon = ({ name, sprites, types, id } = data) => {
    let newcard = `<div id='${id}' class="card" style="width: 10rem;">
    <img src="${sprites.front_default}" class="card-img-top" alt="pokemon">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p>Types = ${getTypes(types)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    $("#tarjetitas").innerHTML += newcard;
    $(`#${id}`).addEventListener("mouseover", () => {
        newcard
            .querySelector(".card-img-top")
            .setAttribute("src", `${sprites.back_default}`);
    });
};

// const view = (id) => {
//     $(`#${id}`).classList.add("visually-hidden");
//     $$(".card-img-back").forEach((e) => {
//         e.classList.remove("visually-hidden");
//     });
// };

// const noview = (id) => {
//     $$(".card-img-top").forEach((e) => {
//         e.classList.remove("visually-hidden");
//     });
//     $$(".card-img-back").forEach((e) => {
//         e.classList.add("visually-hidden");
//     });
// };

const getTypes = (types) => {
    let tipos = [];
    types.forEach((tipo) => {
        tipos.push(tipo.type.name);
    });
    return tipos.join(", ");
};

// [...$$(".card")].forEach((card) => {
//     card.addEventListener("mouseover", () => hideElements(".card-img-top"));
// });
// [...$$(".card")].forEach((card) => {
//     card.addEventListener("mouseout", () => showElements(".card-img-back"));
// });
