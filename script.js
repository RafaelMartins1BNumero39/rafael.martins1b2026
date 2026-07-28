// Garante o acesso à variável magias se ela existir
const magias = typeof window.magias !== 'undefined' ? window.magias : (typeof magias !== 'undefined' ? magias : []);
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

    if (listaMagias.length === 0) {
        containerMagias.innerHTML = `
            <div class="sem-resultados">
                <p>🐉 Nenhuma magia encontrada com esses filtros.</p>
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
                    <strong>Classes:</strong> ${magia.classes.join(", ")}<br>
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
        // Filtro por Nome
        const bateuNome = magia.nome.toLowerCase().includes(textoBusca);

        // Filtro por Classe
        const bateuClasse = classeSelecionada === "todas" || magia.classes.includes(classeSelecionada);

        // Filtro por Nível
        const bateuNivel = nivelSelecionado === "todos" || magia.nivel.toString() === nivelSelecionado;

        // Filtro por Favoritas
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

// --- EVENTOS DOS FILTROS E BUSCA ---
campoBusca.addEventListener("input", aplicarFiltros);
filtroClasse.addEventListener("change", aplicarFiltros);
filtroNivel.addEventListener("change", aplicarFiltros);

btnFavoritas.addEventListener("click", () => {
    mostrarApenasFavoritas = !mostrarApenasFavoritas;
    btnFavoritas.classList.toggle("ativo", mostrarApenasFavoritas);
    btnFavoritas.textContent = mostrarApenasFavoritas ? "❌ Mostrar Todas" : "⭐ Ver Minhas Favoritas";
    aplicarFiltros();
});

// --- ALTERNAR TEMA (CLARO / ESCURO) ---
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// --- INICIALIZAÇÃO DA PÁGINA ---
document.addEventListener("DOMContentLoaded", () => {
    if (magias && magias.length > 0) {
        renderizarMagias(magias);
    } else {
        containerMagias.innerHTML = "<p class='sem-resultados'>Erro ao carregar o arquivo magias.js</p>";
    }
});