"use strict";

/*
    GTA 5 CHEATS HUB
    JavaScript puro
    Dados oficiais de cheats por telefone
    para Story Mode / PS4 / PS5.

    Os dados personalizados do admin ficam
    somente no localStorage.
*/


/* =========================================================
   DADOS PRINCIPAIS
========================================================= */

const defaultCheats = [

    /* PERSONAGEM */

    {
        id: "invincibility",
        name: "Invencibilidade",
        icon: "🛡️",
        description: "Torna o personagem invencível temporariamente.",
        phone: "1-999-7246-545-537",
        category: "character"
    },

    {
        id: "health-armor",
        name: "Vida + Colete",
        icon: "❤️",
        description: "Enche a vida e o colete do personagem.",
        phone: "1-999-887-853",
        category: "character"
    },

    {
        id: "fast-run",
        name: "Correr rápido",
        icon: "🏃",
        description: "Aumenta a velocidade de corrida.",
        phone: "1-999-2288-463",
        category: "character"
    },

    {
        id: "fast-swim",
        name: "Nadar rápido",
        icon: "🏊",
        description: "Aumenta a velocidade de natação.",
        phone: "1-999-4684-4557",
        category: "character"
    },

    {
        id: "super-jump",
        name: "Super pulo",
        icon: "🦘",
        description: "Permite saltos muito mais altos.",
        phone: "1-999-467-8648",
        category: "character"
    },

    {
        id: "special",
        name: "Recarregar habilidade especial",
        icon: "⚡",
        description: "Recarrega a habilidade especial do personagem.",
        phone: "1-999-769-3787",
        category: "character"
    },

    {
        id: "parachute",
        name: "Paraquedas",
        icon: "🪂",
        description: "Entrega um paraquedas ao personagem.",
        phone: "1-999-759-3483",
        category: "character"
    },

    {
        id: "skyfall",
        name: "Skyfall",
        icon: "☁️",
        description: "Coloca o personagem no céu em queda livre.",
        phone: "1-999-759-3255",
        category: "character"
    },


    /* POLÍCIA */

    {
        id: "wanted-up",
        name: "Aumentar nível de procurado",
        icon: "🚨",
        description: "Aumenta o nível de procurado.",
        phone: "1-999-3844-8483",
        category: "police"
    },

    {
        id: "wanted-down",
        name: "Diminuir nível de procurado",
        icon: "🚔",
        description: "Reduz o nível de procurado.",
        phone: "1-999-5299-3787",
        category: "police"
    },


    /* MUNDO */

    {
        id: "weather",
        name: "Mudar clima",
        icon: "🌦️",
        description: "Alterna entre diferentes condições climáticas.",
        phone: "1-999-625-348-7246",
        category: "world"
    },

    {
        id: "moon-gravity",
        name: "Gravidade lunar",
        icon: "🌙",
        description: "Reduz a gravidade do mundo.",
        phone: "1-999-356-2837",
        category: "world"
    },

    {
        id: "slippery",
        name: "Carros escorregadios",
        icon: "🛞",
        description: "Reduz a aderência dos veículos.",
        phone: "1-999-766-9329",
        category: "world"
    },

    {
        id: "slow-motion",
        name: "Câmera lenta",
        icon: "🐌",
        description: "Ativa o efeito de câmera lenta.",
        phone: "1-999-756-966",
        category: "world"
    },

    {
        id: "slow-aim",
        name: "Mira em câmera lenta",
        icon: "🎯",
        description: "Diminui o tempo enquanto mira.",
        phone: "1-999-332-3393",
        category: "world"
    },


    /* VEÍCULOS */

    {
        id: "bmx",
        name: "BMX",
        icon: "🚲",
        description: "Gera uma bicicleta BMX.",
        phone: "1-999-226-348",
        category: "vehicles"
    },

    {
        id: "buzzard",
        name: "Buzzard",
        icon: "🚁",
        description: "Gera o helicóptero de ataque Buzzard.",
        phone: "1-999-289-9633",
        category: "vehicles"
    },

    {
        id: "caddy",
        name: "Caddy",
        icon: "🏌️",
        description: "Gera um veículo Caddy.",
        phone: "1-999-4653-461",
        category: "vehicles"
    },

    {
        id: "comet",
        name: "Comet",
        icon: "🏎️",
        description: "Gera o carro esportivo Comet.",
        phone: "1-999-266-38",
        category: "vehicles"
    },

    {
        id: "duster",
        name: "Duster",
        icon: "✈️",
        description: "Gera o avião agrícola Duster.",
        phone: "1-999-359-77729",
        category: "vehicles"
    },

    {
        id: "limo",
        name: "Limo",
        icon: "🚘",
        description: "Gera uma limusine.",
        phone: "1-999-846-39663",
        category: "vehicles"
    },

    {
        id: "pcj",
        name: "PCJ-600",
        icon: "🏍️",
        description: "Gera a motocicleta PCJ-600.",
        phone: "1-999-762-538",
        category: "vehicles"
    },

    {
        id: "rapid-gt",
        name: "Rapid GT",
        icon: "🏎️",
        description: "Gera o carro esportivo Rapid GT.",
        phone: "1-999-727-4348",
        category: "vehicles"
    },

    {
        id: "sanchez",
        name: "Sanchez",
        icon: "🏍️",
        description: "Gera uma motocicleta Sanchez.",
        phone: "1-999-633-7623",
        category: "vehicles"
    },

    {
        id: "stunt-plane",
        name: "Stunt Plane",
        icon: "🛩️",
        description: "Gera um avião acrobático.",
        phone: "1-999-2276-78676",
        category: "vehicles"
    },

    {
        id: "trashmaster",
        name: "Trashmaster",
        icon: "🚛",
        description: "Gera o caminhão de lixo Trashmaster.",
        phone: "1-999-872-433",
        category: "vehicles"
    },


    /* VEÍCULOS ESPECIAIS */

    {
        id: "duke",
        name: "Duke O'Death",
        icon: "🚘",
        description: "Gera o Duke O'Death após o desbloqueio necessário.",
        phone: "1-999-3328-4227",
        category: "other"
    },

    {
        id: "kraken",
        name: "Kraken",
        icon: "🌊",
        description: "Gera o submarino Kraken após o desbloqueio necessário.",
        phone: "1-999-282-2537",
        category: "other"
    },

    {
        id: "dodo",
        name: "Dodo",
        icon: "🛩️",
        description: "Gera o hidroavião Dodo após o desbloqueio necessário.",
        phone: "1-999-398-4628",
        category: "other"
    }

];


/* =========================================================
   ESTADO
========================================================= */

let cheats = [];
let activeFilter = "all";
let favoritesOnly = false;
let currentModalCheat = null;


/* =========================================================
   LOCAL STORAGE
========================================================= */

function loadData() {

    const custom =
        JSON.parse(
            localStorage.getItem("gta5_custom_cheats")
        ) || [];

    const favorites =
        JSON.parse(
            localStorage.getItem("gta5_favorites")
        ) || [];

    cheats = [
        ...defaultCheats,
        ...custom
    ];

    return favorites;
}


let favorites = loadData();


function saveFavorites() {

    localStorage.setItem(
        "gta5_favorites",
        JSON.stringify(favorites)
    );

    updateFavoriteCounter();
}


function saveCustomCheats(custom) {

    localStorage.setItem(
        "gta5_custom_cheats",
        JSON.stringify(custom)
    );
}


/* =========================================================
   ELEMENTOS
========================================================= */

const grid =
    document.getElementById("cheatGrid");

const searchInput =
    document.getElementById("searchInput");

const emptyState =
    document.getElementById("emptyState");

const codeCounter =
    document.getElementById("codeCounter");

const favoriteCounter =
    document.getElementById("favoriteCounter");

const toast =
    document.getElementById("toast");

const modal =
    document.getElementById("modal");

const mobileMenu =
    document.getElementById("mobileMenu");


/* =========================================================
   CATEGORIAS
========================================================= */

const categoryNames = {

    vehicles: "Veículos",

    character: "Personagem",

    police: "Polícia",

    world: "Mundo",

    other: "Outros"

};


/* =========================================================
   RENDER
========================================================= */

function render() {

    const query =
        searchInput.value
            .trim()
            .toLowerCase();

    const filtered = cheats.filter(cheat => {

        const matchesCategory =
            activeFilter === "all" ||
            cheat.category === activeFilter;

        const matchesFavorite =
            !favoritesOnly ||
            favorites.includes(cheat.id);

        const searchable = `
            ${cheat.name}
            ${cheat.description}
            ${cheat.phone}
            ${categoryNames[cheat.category]}
        `.toLowerCase();

        const matchesSearch =
            searchable.includes(query);

        return (
            matchesCategory &&
            matchesFavorite &&
            matchesSearch
        );

    });


    grid.innerHTML = "";

    codeCounter.textContent =
        filtered.length;


    emptyState.classList.toggle(
        "hidden",
        filtered.length !== 0
    );


    filtered.forEach(
        (cheat, index) => {

            const card =
                document.createElement("article");

            card.className = "cheat-card";

            card.style.animationDelay =
                `${Math.min(index * .025, .3)}s`;

            const isFavorite =
                favorites.includes(cheat.id);


            card.innerHTML = `

                <div class="card-top">

                    <div class="card-icon">
                        ${cheat.icon || "🎮"}
                    </div>

                    <button
                        class="favorite ${isFavorite ? "active" : ""}"
                        data-favorite="${escapeHTML(cheat.id)}"
                        aria-label="Favoritar">

                        ${isFavorite ? "★" : "☆"}

                    </button>

                </div>


                <h4>
                    ${escapeHTML(cheat.name)}
                </h4>


                <p class="card-description">
                    ${escapeHTML(cheat.description)}
                </p>


                <span class="card-category">
                    ${escapeHTML(
                        categoryNames[cheat.category] ||
                        "Outros"
                    )}
                </span>


                <div class="code-box">

                    <code>
                        ${escapeHTML(cheat.phone || "Sem telefone")}
                    </code>

                    <button
                        class="copy-button"
                        data-copy="${escapeHTML(
                            cheat.phone || ""
                        )}">

                        COPIAR

                    </button>

                </div>


                <div class="platform">
                    🎮 PlayStation 4 / 5 • 📱 Telefone
                </div>

            `;


            card.addEventListener(
                "click",
                event => {

                    if (
                        event.target.closest(".favorite") ||
                        event.target.closest(".copy-button")
                    ) {
                        return;
                    }

                    openModal(cheat);

                }
            );


            const favoriteButton =
                card.querySelector(".favorite");


            favoriteButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    toggleFavorite(cheat.id);

                }
            );


            const copyButton =
                card.querySelector(".copy-button");


            copyButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    copyCode(cheat.phone);

                }
            );


            grid.appendChild(card);

        }
    );

}


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }

    saveFavorites();

    render();

    playClick();

}


function updateFavoriteCounter() {

    favoriteCounter.textContent =
        favorites.length;

}


/* =========================================================
   COPIAR
========================================================= */

async function copyCode(code) {

    if (!code) {

        showToast(
            "Este código não possui telefone."
        );

        return;
    }


    try {

        await navigator.clipboard.writeText(code);

    } catch {

        const textarea =
            document.createElement("textarea");

        textarea.value = code;

        document.body.appendChild(textarea);

        textarea.select();

        document.execCommand("copy");

        textarea.remove();

    }


    showToast("Código copiado!");

    playClick();

}


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 1800);

}


/* =========================================================
   MODAL
========================================================= */

function openModal(cheat) {

    currentModalCheat = cheat;

    document.getElementById("modalIcon")
        .textContent =
        cheat.icon || "🎮";

    document.getElementById("modalTitle")
        .textContent =
        cheat.name;

    document.getElementById("modalDescription")
        .textContent =
        cheat.description;

    document.getElementById("modalPhone")
        .textContent =
        cheat.phone || "Sem código";

    document.getElementById("modalCategory")
        .textContent =
        categoryNames[cheat.category] ||
        "Outros";


    modal.classList.add("open");

    document.body.style.overflow = "hidden";

}


function closeModal() {

    modal.classList.remove("open");

    document.body.style.overflow = "";

    currentModalCheat = null;

}


/* =========================================================
   PESQUISA
========================================================= */

searchInput.addEventListener(
    "input",
    render
);


document.getElementById(
    "clearSearch"
).addEventListener(
    "click",
    () => {

        searchInput.value = "";

        render();

        searchInput.focus();

    }
);


/* =========================================================
   FILTROS
========================================================= */

document.querySelectorAll(
    ".filter"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document.querySelectorAll(
                ".filter"
            ).forEach(
                item => item.classList.remove("active")
            );

            button.classList.add("active");

            activeFilter =
                button.dataset.filter;

            render();

        }
    );

});


/* =========================================================
   FAVORITOS ONLY
========================================================= */

document.getElementById(
    "favoritesOnly"
).addEventListener(
    "click",
    event => {

        favoritesOnly =
            !favoritesOnly;

        event.currentTarget.classList.toggle(
            "active",
            favoritesOnly
        );

        render();

    }
);


/* =========================================================
   MODAL EVENTS
========================================================= */

document.getElementById(
    "closeModal"
).addEventListener(
    "click",
    closeModal
);


document.querySelector(
    ".modal-backdrop"
).addEventListener(
    "click",
    closeModal
);


document.getElementById(
    "modalCopy"
).addEventListener(
    "click",
    () => {

        if (currentModalCheat) {

            copyCode(
                currentModalCheat.phone
            );

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

document.getElementById(
    "menuButton"
).addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle(
            "open"
        );

    }
);


/* =========================================================
   NAVEGAÇÃO
========================================================= */

document.querySelectorAll(
    "[data-scroll]"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const target =
                document.getElementById(
                    button.dataset.scroll
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

            mobileMenu.classList.remove(
                "open"
            );

        }
    );

});


/* =========================================================
   CONFIGURAÇÕES
========================================================= */

const savedTheme =
    localStorage.getItem(
        "gta5_theme"
    );

if (savedTheme === "light") {

    document.body.classList.add("light");

}


document.getElementById(
    "themeButton"
).addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );

        const isLight =
            document.body.classList.contains(
                "light"
            );

        localStorage.setItem(
            "gta5_theme",
            isLight ? "light" : "dark"
        );

    }
);


/* SOUND */

const soundToggle =
    document.getElementById(
        "soundToggle"
    );

const savedSound =
    localStorage.getItem(
        "gta5_sound"
    );

soundToggle.checked =
    savedSound !== "off";


soundToggle.addEventListener(
    "change",
    () => {

        localStorage.setItem(
            "gta5_sound",
            soundToggle.checked
                ? "on"
                : "off"
        );

    }
);


/* ANIMATIONS */

const animationToggle =
    document.getElementById(
        "animationToggle"
    );


const savedAnimations =
    localStorage.getItem(
        "gta5_animations"
    );


if (savedAnimations === "off") {

    animationToggle.checked = false;

    document.body.classList.add(
        "no-animations"
    );

}


animationToggle.addEventListener(
    "change",
    () => {

        const enabled =
            animationToggle.checked;

        document.body.classList.toggle(
            "no-animations",
            !enabled
        );

        localStorage.setItem(
            "gta5_animations",
            enabled ? "on" : "off"
        );

    }
);


/* =========================================================
   LIMPAR FAVORITOS
========================================================= */

document.getElementById(
    "clearFavorites"
).addEventListener(
    "click",
    () => {

        if (!favorites.length) {

            showToast(
                "Nenhum favorito para apagar."
            );

            return;
        }


        favorites = [];

        saveFavorites();

        render();

        showToast(
            "Favoritos apagados!"
        );

    }
);


/* =========================================================
   ADMIN LOCAL
========================================================= */

const adminForm =
    document.getElementById(
        "adminForm"
    );

const adminId =
    document.getElementById(
        "adminId"
    );

const adminName =
    document.getElementById(
        "adminName"
    );

const adminDescription =
    document.getElementById(
        "adminDescription"
    );

const adminPhone =
    document.getElementById(
        "adminPhone"
    );

const adminCategory =
    document.getElementById(
        "adminCategory"
    );

const cancelEdit =
    document.getElementById(
        "cancelEdit"
    );


function getCustomCheats() {

    return JSON.parse(
        localStorage.getItem(
            "gta5_custom_cheats"
        )
    ) || [];

}


adminForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const custom =
            getCustomCheats();


        const data = {

            id:
                adminId.value ||
                `custom-${Date.now()}`,

            name:
                adminName.value.trim(),

            description:
                adminDescription.value.trim(),

            phone:
                adminPhone.value.trim(),

            category:
                adminCategory.value,

            icon: "🎮"

        };


        if (adminId.value) {

            const index =
                custom.findIndex(
                    item =>
                        item.id === adminId.value
                );

            if (index !== -1) {

                custom[index] = data;

            }

        } else {

            custom.push(data);

        }


        saveCustomCheats(custom);

        cheats = [
            ...defaultCheats,
            ...custom
        ];


        resetAdmin();

        render();

        renderAdminList();

        showToast(
            "Código salvo localmente!"
        );

    }
);


function resetAdmin() {

    adminForm.reset();

    adminId.value = "";

    cancelEdit.classList.add(
        "hidden"
    );

}


cancelEdit.addEventListener(
    "click",
    resetAdmin
);


function renderAdminList() {

    const container =
        document.getElementById(
            "adminList"
        );

    const custom =
        getCustomCheats();


    container.innerHTML = "";


    if (!custom.length) {

        container.innerHTML = `
            <div class="empty-state">
                Nenhum código personalizado.
            </div>
        `;

        return;
    }


    custom.forEach(item => {

        const element =
            document.createElement("div");

        element.className =
            "admin-item";


        element.innerHTML = `

            <div>

                <strong>
                    ${escapeHTML(item.name)}
                </strong>

                <p>
                    ${escapeHTML(item.phone || "Sem telefone")}
                    •
                    ${escapeHTML(
                        categoryNames[item.category] ||
                        "Outros"
                    )}
                </p>

            </div>


            <div class="admin-item-actions">

                <button
                    data-edit="${escapeHTML(item.id)}">

                    Editar

                </button>

                <button
                    data-delete="${escapeHTML(item.id)}">

                    Excluir

                </button>

            </div>

        `;


        element.querySelector(
            "[data-edit]"
        ).addEventListener(
            "click",
            () => editCustom(item.id)
        );


        element.querySelector(
            "[data-delete]"
        ).addEventListener(
            "click",
            () => deleteCustom(item.id)
        );


        container.appendChild(element);

    });

}


function editCustom(id) {

    const custom =
        getCustomCheats();

    const item =
        custom.find(
            cheat => cheat.id === id
        );


    if (!item) return;


    adminId.value =
        item.id;

    adminName.value =
        item.name;

    adminDescription.value =
        item.description;

    adminPhone.value =
        item.phone;

    adminCategory.value =
        item.category;


    cancelEdit.classList.remove(
        "hidden"
    );


    document.getElementById(
        "admin"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


function deleteCustom(id) {

    const custom =
        getCustomCheats();


    const updated =
        custom.filter(
            item => item.id !== id
        );


    saveCustomCheats(updated);


    cheats = [
        ...defaultCheats,
        ...updated
    ];


    favorites =
        favorites.filter(
            favorite => favorite !== id
        );


    saveFavorites();

    render();

    renderAdminList();

    showToast(
        "Código removido!"
    );

}


/* =========================================================
   SOM SIMPLES
========================================================= */

function playClick() {

    const enabled =
        localStorage.getItem(
            "gta5_sound"
        ) !== "off";


    if (!enabled) return;


    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) return;


        const context =
            new AudioContext();

        const oscillator =
            context.createOscillator();

        const gain =
            context.createGain();


        oscillator.frequency.value =
            520;

        gain.gain.setValueAtTime(
            .035,
            context.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            .001,
            context.currentTime + .07
        );


        oscillator.connect(gain);

        gain.connect(
            context.destination
        );

        oscillator.start();

        oscillator.stop(
            context.currentTime + .07
        );

    } catch {

        /* Som é opcional. */

    }

}


/* =========================================================
   SEGURANÇA DE TEXTO DO ADMIN
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

render();

renderAdminList();

updateFavoriteCounter();
