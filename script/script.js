const renderPokemon = ({ name, sprites, types, id } = data) => {
    const card = document.createElement("div");

    card.id = id;
    card.className = "card m-3 p-2 shadow";
    card.style.width = "15rem";
    card.style.height = "22rem";

    card.innerHTML = `
    <img src="${
        sprites.front_default
    }" class="card-img-top image mx-auto p-2" alt="pokemon">
    <h5 class="card-title h5 text-center">${name.toUpperCase()}</h5>
    <div class="card-body p-1 d-flex flex-column justify-content-around">
       <div class='d-flex justify-content-around'>
            ${getTypes(types)}
       </div>
    </div>`;

    $("#tarjetitas").appendChild(card);

    card.addEventListener("mouseover", () => {
        card.querySelector(".card-img-top").setAttribute(
            "src",
            sprites.back_default
        );
        card.querySelector(".card-body").innerHTML = `
        <div class='d-flex justify-content-around'>
            <p>Altura</p>
            <p>Peso</p>
        </div>
        <a href="#" class="btn btn-success">Details</a>`;
    });

    card.addEventListener("mouseout", () => {
        card.querySelector(".card-img-top").setAttribute(
            "src",
            sprites.front_default
        );
        card.querySelector(".card-body").innerHTML = `
            <div class='d-flex justify-content-around'>
                ${getTypes(types)}
            </div>`;
    });
};

const getTypes = (types) => {
    let tipos = [];
    types.forEach((tipo) => {
        tipos.push(
            `<p class='fs-6 px-3 text text-center rounded-5  ${
                tipo.type.name
            }'>${tipo.type.name.toUpperCase()}</p>`
        );
    });
    return tipos.join("");
};

$("#left").addEventListener("click", () => {
    if (i1 >= 21) {
        i1 = i1 - 20;
        i2 = i2 - 20;
    }
    pokemones();
});

$("#right").addEventListener("click", () => {
    if (i1 >= 1) {
        i1 = i1 + 20;
        i2 = i2 + 20;
    }
    pokemones();
});
