const listaMagiasContainer = document.getElementById('lista-magias');
const inputBusca = document.getElementById('input-busca');
const selectClasse = document.getElementById('select-classe');
const selectNivel = document.getElementById('select-nivel');
const btnFavoritas = document.getElementById('btn-favoritas');

// Carregar favoritos do LocalStorage
let favoritos = JSON.parse(localStorage.getItem('dnd_magias_favoritas')) || [];
let mostrarApenasFavoritas = false;

// Função principal para exibir as magias na tela
function renderizarMagias() {
    listaMagiasContainer.innerHTML = '';

    const buscaTexto = inputBusca.value.toLowerCase();
    const classeSelecionada = selectClasse.value;
    const nivelSelecionado = selectNivel.value;

    const magiasFiltradas = magiasDB.filter(magia => {
        const bateNome = magia.nome.toLowerCase().includes(buscaTexto);
        const bateClasse = classeSelecionada === 'todas' || magia.classes.includes(classeSelecionada);
        const bateNivel = nivelSelecionado === 'todos' || magia.nivel.toString() === nivelSelecionado;
        const bateFavorito = !mostrarApenasFavoritas || favoritos.includes(magia.id);

        return bateNome && bateClasse && bateNivel && bateFavorito;
    });

    if (magiasFiltradas.length === 0) {
        listaMagiasContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Nenhuma magia encontrada com estes filtros.</p>';
        return;
    }

    magiasFiltradas.forEach(magia => {
        const ehFavorito = favoritos.includes(magia.id);
        const article = document.createElement('article');
        article.classList.add('magia-card');

        article.innerHTML = `
            <div>
                <header class="magia-card-header">
                    <h3>${magia.nome}</h3>
                    <button class="btn-fav" onclick="alternarFavorito('${magia.id}')">
                        ${ehFavorito ? '⭐' : '☆'}
                    </button>
                </header>

                <figure class="magia-imagem-container">
                    <img src="${magia.imagem}" alt="${magia.nome}" class="magia-img" loading="lazy" onerror="this.src='https://via.placeholder.com/400x200?text=Sem+Imagem'">
                    <figcaption>${magia.nivel === 0 ? 'Truque' : magia.nivel + 'º Nível'} • ${magia.escola}</figcaption>
                </figure>

                <p class="magia-descricao">${magia.descricao}</p>
            </div>

            <details>
                <summary>Detalhes & Regras</summary>
                <p><strong>Classes:</strong> ${magia.classes.join(', ')}</p>
                <p>${magia.detalhes}</p>
            </details>
        `;

        listaMagiasContainer.appendChild(article);
    });
}

// Função para favoritar e desfavoritar
function alternarFavorito(idMagia) {
    if (favoritos.includes(idMagia)) {
        favoritos = favoritos.filter(id => id !== idMagia);
    } else {
        favoritos.push(idMagia);
    }
    localStorage.setItem('dnd_magias_favoritas', JSON.stringify(favoritos));
    renderizarMagias();
}

// Escutadores de Eventos (Filtros em tempo real)
inputBusca.addEventListener('input', renderizarMagias);
selectClasse.addEventListener('change', renderizarMagias);
selectNivel.addEventListener('change', renderizarMagias);

btnFavoritas.addEventListener('click', () => {
    mostrarApenasFavoritas = !mostrarApenasFavoritas;
    btnFavoritas.textContent = mostrarApenasFavoritas ? '🔍 Ver Todas as Magias' : '⭐ Ver Minhas Favoritas';
    renderizarMagias();
});

// Inicialização da tela
renderizarMagias();
<img src="${magia.imagem}" onerror="this.src='https://via.placeholder.com/300x200?text=D%26D+Magia'" alt="${magia.nome}">
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});