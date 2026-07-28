// --- OBTÉM AS MAGIAS DO ESCOPO GLOBAL ---
const magias = window.magias || [];

// --- ESTADO DA APLICAÇÃO ---
let favoritas = JSON.parse(localStorage.getItem("magias_favoritas")) || [];
let mostrarApenasFavoritas = false;

// --- ELEMENTOS DO DOM ---
const containerMagias = document.getElementById("container-magias");
const campoBusca = document.getElementById("campo-busca");
const filtroClasse = document.getElementById("filtro-classe");
const filtroNivel = document.getElementById("filtro-nivel");
const btnFavoritas = document.getElementById("btn-favoritas");
const btnTema = document.getElementById("btn-tema");

// --- RENDERIZAÇÃO DOS CARDS ---
function renderizarMagias(listaMagias) {
    containerMagias.innerHTML = "";

    if (!listaMagias || listaMagias.length === 0) {
        containerMagias.innerHTML = `
            <div class="sem-resultados">
                <p>🐉 Nenhuma magia encontrada.</p>
            </div>
        `;
        return;
    }

    listaMagias.forEach(magia => {
        const ehFavorita = favoritas.includes(magia.id);
        
        const card = document.createElement("div");
        card.classList.add("card-magia");

        card.innerHTML = `
            <img class="card-imagem" src="${magia.imagem}" alt="${magia.nome}" onerror="this.src='https://via.placeholder.com/300x160/1a1d2d/9d4edd?text=D%26D+5e'">
            <div class="card-conteudo">
                <div class="card-header-info">
                    <h3 class="card-titulo">${magia.nome}</h3>
                    <button class="btn-favorito-card" onclick="alternarFavorito('${magia.id}')">
                        ${ehFavorita ? "⭐" : "☆"}
                    </button>
                </div>
                <p class="card-meta">
                    ${magia.nivel === 0 ? "Truque" : magia.nivel + "º Nível"} • ${magia.escola}
                </p>
                <p class="card-descricao">${magia.descricao}</p>
                <div class="card-detalhes">
                    <strong>Classes:</strong> ${Array.isArray(magia.classes) ? magia.classes.join(", ") : magia.classes}<br>
                    ${magia.detalhes}
                </div>
            </div>
        `;

        containerMagias.appendChild(card);
    });
}

// --- LÓGICA DE FILTRAGEM ---
function aplicarFiltros() {
    const textoBusca = campoBusca.value.toLowerCase();
    const classeSelecionada = filtroClasse.value;
    const nivelSelecionado = filtroNivel.value;

    const magiasFiltradas = magias.filter(magia => {
        const bateuNome = magia.nome.toLowerCase().includes(textoBusca);
        const bateuClasse = classeSelecionada === "todas" || (Array.isArray(magia.classes) && magia.classes.includes(classeSelecionada));
        const bateuNivel = nivelSelecionado === "todos" || magia.nivel.toString() === nivelSelecionado;
        const bateuFavorito = !mostrarApenasFavoritas || favoritas.includes(magia.id);

        return bateuNome && bateuClasse && bateuNivel && bateuFavorito;
    });

    renderizarMagias(magiasFiltradas);
}

// --- GERENCIAR FAVORITOS ---
function alternarFavorito(idMagia) {
    if (favoritas.includes(idMagia)) {
        favoritas = favoritas.filter(id => id !== idMagia);
    } else {
        favoritas.push(idMagia);
    }

    localStorage.setItem("magias_favoritas", JSON.stringify(favoritas));
    aplicarFiltros();
}

// --- EVENTOS ---
if (campoBusca) campoBusca.addEventListener("input", aplicarFiltros);
if (filtroClasse) filtroClasse.addEventListener("change", aplicarFiltros);
if (filtroNivel) filtroNivel.addEventListener("change", aplicarFiltros);

if (btnFavoritas) {
    btnFavoritas.addEventListener("click", () => {
        mostrarApenasFavoritas = !mostrarApenasFavoritas;
        btnFavoritas.classList.toggle("ativo", mostrarApenasFavoritas);
        btnFavoritas.textContent = mostrarApenasFavoritas ? "❌ Mostrar Todas" : "⭐ Ver Minhas Favoritas";
        aplicarFiltros();
    });
}

if (btnTema) {
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
}

// --- INICIALIZAÇÃO DA PÁGINA ---
function inicializarApp() {
    const listaMagias = window.magias || (typeof magias !== "undefined" ? magias : []);
    
    if (listaMagias && listaMagias.length > 0) {
        renderizarMagias(listaMagias);
    } else {
        containerMagias.innerHTML = "<p class='sem-resultados'>🐉 Nenhuma magia encontrada.</p>";
    }
}

// Executa assim que o HTML e os Scripts carregarem
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarApp);
} else {
    inicializarApp();
}