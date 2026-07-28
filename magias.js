
// BANCO DE DADOS COMPLETO - TRUQUES (NÍVEL 0)
window.magias = [
    {
    {
        id: "amizade",
        nome: "Amizade",
        nivel: 0,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/amizade.jpg",
        descricao: "Pela duração, você tem vantagem em todos os testes de Carisma dirigidos a uma criatura à sua escolha que não seja hostil.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "amizade-com-animais",
        nome: "Adestrar Animal (Truque)",
        nivel: 0,
        escola: "Encantamento",
        classes: ["Druida", "Patrulheiro"],
        imagem: "Imagens/adestrar-animal.jpg",
        descricao: "Acalma pequenos animais não hostis com gestos e palavras suaves.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S"
    },
    {
        id: "ataque-certeiro",
        nome: "Ataque Certeiro",
        nivel: 0,
        escola: "Adivinhação",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/ataque-certeiro.jpg",
        descricao: "Você estende a mão e aponta o dedo para um alvo. Seu feitiço concede uma breve intuição sobre as defesas dele, dando vantagem no próximo ataque.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: S | Duração: Concentração, até 1 rodada"
    },
    {
        id: "bordao-místico",
        nome: "Bordão Místico (Shillelagh)",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida"],
        imagem: "Imagens/bordao-mistico.jpg",
        descricao: "A madeira de um cajado ou clava que você segura é imbuída com o poder da natureza, permitindo usar seu atributo de conjuração no ataque.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: Toque | Componentes: V, S, M | Duração: 1 minuto"
    },
    {
        id: "borrifada-acida",
        nome: "Gota de Ácido",
        nivel: 0,
        escola: "Conjuração",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/gota-de-acido.jpg",
        descricao: "Você arremessa uma bolha de ácido. Escolha uma ou duas criaturas a 1,5 metro uma da outra dentro do alcance.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Dano: 1d6 Ácido"
    },
    {
        id: "chama-sagrada",
        nome: "Chama Sagrada",
        nivel: 0,
        escola: "Evocação",
        classes: ["Clérigo"],
        imagem: "Imagens/chama-sagrada.jpg",
        descricao: "Radiação semelhante a fogo desce sobre uma criatura que você possa ver dentro do alcance, causando dano radiante.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Dano: 1d8 Radiante"
    },
    {
        id: "chicote-de-espinhos",
        nome: "Chicote de Espinhos",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida"],
        imagem: "Imagens/chicote-de-espinhos.jpg",
        descricao: "Você cria um chicote longo de vinhas cobertas de espinhos que ataca uma criatura e a puxa até 3 metros em sua direção.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M | Dano: 1d6 Perfurante"
    },
    {
        id: "chicote-eletrico",
        nome: "Chicote Elétrico",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/chicote-eletrico.jpg",
        descricao: "Você cria um chicote de energia elétrica que atinge uma criatura e atrai o alvo para perto de você.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 4,5 metros | Componentes: V, S | Dano: 1d8 Elétrico"
    },
    {
        id: "consertar",
        nome: "Consertar",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Bardo", "Clérigo", "Druida", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/consertar.jpg",
        descricao: "Este feitiço repara uma única quebra ou rasgo em um objeto que você tocar, como um elo quebrado de uma corrente ou uma chave partida.",
        detalhes: "Tempo de Conjuração: 1 minuto | Alcance: Toque | Componentes: V, S, M"
    },
    {
        id: "controlar-chamas",
        nome: "Controlar Chamas",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/controlar-chamas.jpg",
        descricao: "Você escolhe um fogo não mágico dentro do alcance e expande, apaga ou muda sua cor e formato.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: S"
    },
    {
        id: "criar-chamas",
        nome: "Criar Chamas",
        nivel: 0,
        escola: "Conjuração",
        classes: ["Druida"],
        imagem: "Imagens/criar-chamas.jpg",
        descricao: "Uma chama bruxuleante aparece na sua mão. Ela ilumina a área e pode ser arremessada contra um inimigo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (9m para arremesso) | Componentes: V, S | Dano: 1d8 Fogo"
    },
    {
        id: "druidismo",
        nome: "Druidismo",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida"],
        imagem: "Imagens/druidismo.jpg",
        descricao: "Sussurrando aos espíritos da natureza, você cria um efeito natural menor, como prever o tempo, fazer uma flor desabrochar ou acender uma fogueira.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S"
    },
    {
        id: "explosao-elemental",
        nome: "Golpe Elemental",
        nivel: 0,
        escola: "Evocação",
        classes: ["Monge"],
        imagem: "Imagens/golpe-elemental.jpg",
        descricao: "Canaliza o Ki elemental para focar os golpes desarmados com o poder do vento, fogo, terra ou água.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: Ki"
    },
    {
        id: "glapho-de-choque",
        nome: "Toque Chocante",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/toque-chocante.jpg",
        descricao: "Eletricidade dispara da sua mão para causar dano a uma criatura que você tentar tocar e impede que ela reaja.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S | Dano: 1d8 Elétrico"
    },
    {
        id: "golpe-certeiro",
        nome: "Golpe de Esquerda",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/golpe-de-esquerda.jpg",
        descricao: "Cria um golpe rápido de força intangível capaz de empurrar pequenas criaturas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 1,5 metro | Componentes: V, S"
    },
    {
        id: "golpe-verdejante",
        nome: "Lâmina Verdejante (Green-Flame Blade)",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Bruxo", "Guerreiro", "Ladino"],
        imagem: "Imagens/lamina-verdejante.jpg",
        descricao: "Você desfere um ataque com uma arma e chamas verdes saltam do alvo para outra criatura próxima.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 1,5 metro | Componentes: S, M | Dano: Ataque de arma + Fogo"
    },
    {
        id: "gosto-puro",
        nome: "Purificar Pequenos Objetos",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/purificar.jpg",
        descricao: "Remove sujeiras, gostos ruins ou pequenos vestígios de mofo em alimentos e bebidas de uso pessoal.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S"
    },
    {
        id: "iluminar",
        nome: "Luz",
        nivel: 0,
        escola: "Evocação",
        classes: ["Bardo", "Clérigo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/luz.jpg",
        descricao: "Você toca um objeto. Até a magia terminar, o objeto emite luz brilhante num raio de 6 metros e luz penumbrosa por mais 6 metros.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, M | Duração: 1 hora"
    },
    {
        id: "ilusao-menor",
        nome: "Ilusão Menor",
        nivel: 0,
        escola: "Ilusão",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/ilusao-menor.jpg",
        descricao: "Você cria um som ou uma imagem de um objeto dentro do alcance que permanece pela duração da magia.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: S, M | Duração: 1 minuto"
    },
    {
        id: "infestacao",
        nome: "Infestação",
        nivel: 0,
        escola: "Conjuração",
        classes: ["Druida", "Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/infestacao.jpg",
        descricao: "Você invoca ácaros, pulgas e outros parasitas para cobrir uma criatura dentro do alcance, desorientando seus movimentos.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M | Dano: 1d6 Veneno"
    },
    {
        id: "lamina-tronante",
        nome: "Lâmina Tronante (Booming Blade)",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Bruxo", "Guerreiro", "Ladino"],
        imagem: "Imagens/lamina-tronante.jpg",
        descricao: "Você faz um ataque com arma e envolve o alvo em energia sônica. Se ele se mover voluntariamente, sofre dano de trovão.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 1,5 metro | Componentes: S, M | Dano: Ataque de arma + Trovão"
    },
    {
        id: "maos-magicas",
        nome: "Mãos Mágicas",
        nivel: 0,
        escola: "Conjuração",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/maos-magicas.jpg",
        descricao: "Uma mão espectral e flutuante aparece num ponto à sua escolha. Você pode usá-la para manipular objetos, abrir portas ou carregar itens.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S | Duração: 1 minuto"
    },
    {
        id: "mensagem",
        nome: "Mensagem",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Bardo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/mensagem.jpg",
        descricao: "Você aponta o dedo para uma criatura e sussurra uma mensagem. Apenas o alvo ouve e pode responder em um sussurro.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M"
    },
    {
        id: "moldar-agua",
        nome: "Moldar Água",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/moldar-agua.jpg",
        descricao: "Você escolhe uma área de água e pode alterar sua corrente, congelá-la ou criar formas simples nela.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: S"
    },
    {
        id: "moldar-terra",
        nome: "Moldar Terra",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/moldar-terra.jpg",
        descricao: "Você escava, move ou altera a textura de terra e pedra solta num cubo de 1,5 metro.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: S"
    },
    {
        id: "palavra-radiante",
        nome: "Palavra Radiante",
        nivel: 0,
        escola: "Evocação",
        classes: ["Clérigo"],
        imagem: "Imagens/palavra-radiante.jpg",
        descricao: "Você profere uma palavra sagrada e o brilho divino queima todas as criaturas à sua escolha num raio de 1,5 metro.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 1,5 metro | Componentes: V, S | Dano: 1d6 Radiante"
    },
    {
        id: "pouso-suave-menor",
        nome: "Brisa de Queda",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago", "Bardo"],
        imagem: "Imagens/brisa-de-queda.jpg",
        descricao: "Cria uma leve corrente ascendente que reduz pequenos impactos de saltos curtos.",
        detalhes: "Tempo de Conjuração: 1 reação | Alcance: Pessoal | Componentes: V"
    },
    {
        id: "prestidigitacao",
        nome: "Prestidigitação",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/prestidigitacao.jpg",
        descricao: "Cria um efeito mágico simples e inofensivo, como acender uma vela, limpar um objeto, esquentar comida ou criar um aroma suave.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 3 metros | Componentes: V, S | Duração: Até 1 hora"
    },
    {
        id: "protecao-contra-laminas",
        nome: "Proteção contra Lâminas",
        nivel: 0,
        escola: "Adivinhação",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/protecao-contra-laminas.jpg",
        descricao: "Você estende suas mãos e traça um símbolo de proteção no ar. Você ganha resistência a dano concussivo, cortante e perfurante.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: V, S | Duração: 1 rodada"
    },
    {
        id: "raio-de-fogo",
        nome: "Míssil de Fogo (Fire Bolt)",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/missil-de-fogo.jpg",
        descricao: "Você arremessa um feixe de fogo em uma criatura ou objeto dentro do alcance.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S | Dano: 1d10 Fogo"
    },
    {
        id: "raio-de-gelo",
        nome: "Raio de Gelo",
        nivel: 0,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/raio-de-gelo.jpg",
        descricao: "Um raio de luz azul-branquecida dispara em direção a uma criatura, causando dano de frio e reduzindo seu deslocamento em 3 metros.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Dano: 1d8 Frio"
    },
    {
        id: "raio-mistico",
        nome: "Raio Místico (Eldritch Blast)",
        nivel: 0,
        escola: "Evocação",
        classes: ["Bruxo"],
        imagem: "Imagens/raio-mistico.jpg",
        descricao: "Um feixe de energia crepitante dispara em direção a uma criatura dentro do alcance, causando dano de força.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S | Dano: 1d10 Força"
    },
    {
        id: "raio-solar-menor",
        nome: "Guia Divino",
        nivel: 0,
        escola: "Adivinhação",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/guia-divino.jpg",
        descricao: "Você toca uma criatura voluntária. Uma vez antes da magia terminar, o alvo pode rolar um d4 e adicionar o número ao teste de habilidade.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S | Duração: Concentração, até 1 minuto"
    },
    {
        id: "rasgo-de-vento",
        nome: "Rajada de Vento (Gust)",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/rajada-de-vento.jpg",
        descricao: "Você capta o ar e cria uma pequena rajada de vento capaz de empurrar uma criatura Média ou empurrar objetos leves.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S"
    },
    {
        id: "resistencia",
        nome: "Resistência",
        nivel: 0,
        escola: "Adivinhação",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/resistencia.jpg",
        descricao: "Você toca uma criatura. Uma vez antes da magia terminar, o alvo pode rolar um d4 e adicionar ao teste de resistência.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "risco-místico",
        nome: "Símbolo Místico",
        nivel: 0,
        escola: "Conjuração",
        classes: ["Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/simbolo-mistico.jpg",
        descricao: "Desenha uma marca brilhante e inofensiva numa superfície para servir como sinal ou identificador.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: S"
    },
    {
        id: "soar-dos-mortos",
        nome: "Badalar dos Mortos (Toll the Dead)",
        nivel: 0,
        escola: "Necromancia",
        classes: ["Clérigo", "Bruxo", "Mago"],
        imagem: "Imagens/badalar-dos-mortos.jpg",
        descricao: "Você aponta para uma criatura e o som de um sino lúgubre ecoa ao redor dela, causando dano necrótico.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Dano: 1d8 (ou 1d12 se machucado) Necrótico"
    },
    {
        id: "sopro-de-gelo",
        nome: "Sopro de Gelo (Frostbite)",
        nivel: 0,
        escola: "Evocação",
        classes: ["Druida", "Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/sopro-de-gelo.jpg",
        descricao: "Cria uma geada entorpecente sobre uma criatura, causando dano de frio e impondo desvantagem no próximo ataque dela.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Dano: 1d6 Frio"
    },
    {
        id: "taumaturgia",
        nome: "Taumaturgia",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Clérigo"],
        imagem: "Imagens/taumaturgia.jpg",
        descricao: "Você manifesta uma pequena maravilha divina, como fazer sua voz ressoar, fazer chamas tremerem ou portas baterem.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V | Duração: Até 1 minuto"
    },
    {
        id: "toque-sombrio",
        nome: "Toque Macabro (Chill Touch)",
        nivel: 0,
        escola: "Necromancia",
        classes: ["Feiticeiro", "Mago", "Bruxo", "Guerreiro", "Ladino"],
        imagem: "Imagens/toque-macabro.jpg",
        descricao: "Você cria uma mão esquelética fantasmagórica que ataca o alvo, causando dano necrótico e impedindo-o de curar pontos de vida.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S | Dano: 1d8 Necrótico"
    },
    {
        id: "truque-de-corda-menor",
        nome: "Nó Mágico",
        nivel: 0,
        escola: "Transmutação",
        classes: ["Bardo", "Mago"],
        imagem: "Imagens/no-magico.jpg",
        descricao: "Faz com que uma corda se amarre ou desamarre sozinha sob o seu comando vocal.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S"
    },
    {
        id: "trovao",
        nome: "Grito de Trovão (Thunderclap)",
        nivel: 0,
        escola: "Evocação",
        classes: ["Bardo", "Druida", "Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/grito-de-trovao.jpg",
        descricao: "Você cria um estalo de trovão audível a até 30 metros. Todas as criaturas a 1,5 metro de você sofrem dano de trovão.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 1,5 metro | Componentes: S | Dano: 1d6 Trovão"
    },
    {
        id: "zombaria-viciosa",
        nome: "Zombaria Viciosa",
        nivel: 0,
        escola: "Encantamento",
        classes: ["Bardo"],
        imagem: "Imagens/zombaria-viciosa.jpg",
        descricao: "Você desencadeia uma série de insultos imbuídos de magia em uma criatura. Ela sofre dano psíquico e desvantagem no próximo ataque.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V | Dano: 1d4 Psíquico"
    }
];// --- MAGIAS DE 1º NÍVEL ---
    {
        id: "abrigar-se",
        nome: "Santuário",
        nivel: 1,
        escola: "Abjuração",
        classes: ["Clérigo"],
        imagem: "Imagens/santuario.jpg",
        descricao: "Protege uma criatura contra ataques. Qualquer inimigo que tentar atacar o alvo deve passar num teste ou escolher outro alvo.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: 9 metros | Componentes: V, S, M"
    },
    {
        id: "alarme",
        nome: "Alarme",
        nivel: 1,
        escola: "Abjuração",
        classes: ["Mago", "Patrulheiro", "Guerreiro", "Ladino"],
        imagem: "Imagens/alarme.jpg",
        descricao: "Você cria um aviso sonoro ou mental para proteger uma área contra intromissões indesejadas.",
        detalhes: "Tempo de Conjuração: 1 minuto (Ritual) | Alcance: 9 metros | Componentes: V, S, M"
    },
    {
        id: "amizade-animal",
        nome: "Amizade Animal",
        nivel: 1,
        escola: "Encantamento",
        classes: ["Bardo", "Druida", "Patrulheiro"],
        imagem: "Imagens/amizade-animal.jpg",
        descricao: "Convence uma besta de que você não representa ameaça nem intenção de machucá-la.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M"
    },
    {
        id: "armadura-arcana",
        nome: "Armadura Arcana",
        nivel: 1,
        escola: "Abjuração",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/armadura-arcana.jpg",
        descricao: "Um campo de força invisível cerca uma criatura sem armadura, definindo sua CA base para 13 + modificador de Destreza.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: 8 horas"
    },
    {
        id: "armadura-de-agathys",
        nome: "Armadura de Agathys",
        nivel: 1,
        escola: "Abjuração",
        classes: ["Bruxo"],
        imagem: "Imagens/armadura-de-agathys.jpg",
        descricao: "Uma força mágica e gélida cobre você, concedendo 5 PV temporários e causando 5 de dano de frio a quem atingir você em combate corpo a corpo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: V, S, M"
    },
    {
        id: "bencao",
        nome: "Bênção",
        nivel: 1,
        escola: "Encantamento",
        classes: ["Clérigo", "Paladino"],
        imagem: "Imagens/bencao.jpg",
        descricao: "Abençoa até três criaturas. Sempre que fizerem um ataque ou teste de resistência, adquirem +1d4 de bônus no resultado.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "bruxaria",
        nome: "Bruxaria (Hex)",
        nivel: 1,
        escola: "Encantamento",
        classes: ["Bruxo"],
        imagem: "Imagens/bruxaria.jpg",
        descricao: "Rogai uma maldição sobre uma criatura. Você causa 1d6 de dano necrótico extra sempre que atingir o alvo com um ataque.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: 27 metros | Componentes: V, S, M"
    },
    {
        id: "comando",
        nome: "Comando",
        nivel: 1,
        escola: "Encantamento",
        classes: ["Clérigo", "Paladino"],
        imagem: "Imagens/comando.jpg",
        descricao: "Diga uma palavra de ordem a uma criatura (ex: Pare, Caia, Fuga). Ela deve obedecer no próximo turno se falhar no teste.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V"
    },
    {
        id: "compreender-idiomas",
        nome: "Compreender Idiomas",
        nivel: 1,
        escola: "Adivinhação",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/compreender-idiomas.jpg",
        descricao: "Pela duração, você compreende o sentido literal de qualquer idioma falado ou escrito que ouvir ou ler.",
        detalhes: "Tempo de Conjuração: 1 ação (Ritual) | Alcance: Pessoal | Componentes: V, S, M"
    },
    {
        id: "curar-ferimentos",
        nome: "Curar Ferimentos",
        nivel: 1,
        escola: "Evocação",
        classes: ["Bardo", "Clérigo", "Druida", "Paladino", "Patrulheiro"],
        imagem: "Imagens/curar-ferimentos.jpg",
        descricao: "Uma criatura tocada por você recupera vida igual a 1d8 + modificador de habilidade de conjuração.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S"
    },
    {
        id: "detectar-magia",
        nome: "Detectar Magia",
        nivel: 1,
        escola: "Adivinhação",
        classes: ["Bardo", "Clérigo", "Druida", "Feiticeiro", "Mago", "Paladino", "Patrulheiro"],
        imagem: "Imagens/detectar-magia.jpg",
        descricao: "Sinta a presença de auras mágicas a até 9 metros de você e identifique a escola da magia presente.",
        detalhes: "Tempo de Conjuração: 1 ação (Ritual) | Alcance: Pessoal | Componentes: V, S"
    },
    {
        id: "escudo-magico",
        nome: "Escudo Mágico",
        nivel: 1,
        escola: "Abjuração",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/escudo-magico.jpg",
        descricao: "Uma barreira invisível surge como reação a um ataque, concedendo +5 de bônus na CA até o seu próximo turno.",
        detalhes: "Tempo de Conjuração: 1 reação | Alcance: Pessoal | Componentes: V, S"
    },
    {
        id: "fogo-das-fadas",
        nome: "Fogo das Fadas",
        nivel: 1,
        escola: "Evocação",
        classes: ["Bardo", "Druida"],
        imagem: "Imagens/fogo-das-fadas.jpg",
        descricao: "Delineia alvos num cubo de 6 metros com luz colorida. Ataques contra os alvos afetados têm vantagem.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V"
    },
    {
        id: "maos-flamejantes",
        nome: "Mãos Flamejantes",
        nivel: 1,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/maos-flamejantes.jpg",
        descricao: "Uma lâmina fina de fogo brota dos seus dedos num cone de 4,5 metros, causando 3d6 de dano de fogo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Cone de 4,5m) | Componentes: V, S"
    },
    {
        id: "marca-do-cacador",
        nome: "Marca do Caçador",
        nivel: 1,
        escola: "Adivinhação",
        classes: ["Patrulheiro"],
        imagem: "Imagens/marca-do-cacador.jpg",
        descricao: "Escolha uma presa. Você causa 1d6 de dano extra a ela com seus ataques e tem vantagem para rastreá-la.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: 27 metros | Componentes: V"
    },
    {
        id: "misseis-magicos",
        nome: "Mísseis Mágicos",
        nivel: 1,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/misseis-magicos.jpg",
        descricao: "Cria três dardos de força mágica brilhantes. Cada dardo atinge um alvo automaticamente causando 1d4 + 1 de dano.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S"
    },
    {
        id: "palavra-curativa",
        nome: "Palavra Curativa",
        nivel: 1,
        escola: "Evocação",
        classes: ["Bardo", "Clérigo", "Druida"],
        imagem: "Imagens/palavra-curativa.jpg",
        descricao: "Sua voz carrega cura imediata a uma criatura à vista, restaurando 1d4 + modificador de vida à distância.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: 18 metros | Componentes: V"
    },
    {
        id: "onda-de-trovao",
        nome: "Onda de Trovão",
        nivel: 1,
        escola: "Evocação",
        classes: ["Bardo", "Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/onda-de-trovao.jpg",
        descricao: "Uma onda de força estrondosa emana de você num cubo de 4,5m. Causa dano de trovão e empurra inimigos 3 metros.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Cubo de 4,5m) | Componentes: V, S"
    },
    {
        id: "repreensao-infernal",
        nome: "Repreensão Infernal",
        nivel: 1,
        escola: "Evocação",
        classes: ["Bruxo"],
        imagem: "Imagens/repreensao-infernal.jpg",
        descricao: "Como reação ao sofrer dano, encharque o atacante em chamas infernais causando 2d10 de dano de fogo.",
        detalhes: "Tempo de Conjuração: 1 reação | Alcance: 18 metros | Componentes: V, S"
    },
    {
        id: "riso-histerico",
        nome: "Riso Histérico de Tasha",
        nivel: 1,
        escola: "Encantamento",
        classes: ["Bardo", "Mago", "Ladino"],
        imagem: "Imagens/riso-histerico.jpg",
        descricao: "Faz a vítima cair no chão dando gargalhadas incontroláveis, deixando-a incapacitada enquanto durar a magia.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M"
    }// --- MAGIAS DE 2º NÍVEL ---
    {
        id: "alterar-se",
        nome: "Alterar-se",
        nivel: 2,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/alterar-se.jpg",
        descricao: "Você altera sua forma física, podendo adquirir adaptação aquática, armas naturais ou mudar sua aparência completamente.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: V, S | Duração: Concentração, até 1 hora"
    },
    {
        id: "arma-espiritual",
        nome: "Arma Espiritual",
        nivel: 2,
        escola: "Evocação",
        classes: ["Clérigo"],
        imagem: "Imagens/arma-espiritual.jpg",
        descricao: "Você cria uma arma mágica flutuante e espectral que ataca seus inimigos sob seu comando verbal.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: 18 metros | Componentes: V, S | Duração: 1 minuto"
    },
    {
        id: "arrefecer-metal",
        nome: "Esquentar Metal",
        nivel: 2,
        escola: "Transmutação",
        classes: ["Bardo", "Druida"],
        imagem: "Imagens/esquentar-metal.jpg",
        descricao: "Aquece um objeto de metal até ficar em brasa. Criaturas segurando ou vestindo o objeto sofrem dano de fogo e podem ter que largá-lo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "cativar",
        nome: "Cativar",
        nivel: 2,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro"],
        imagem: "Imagens/cativar.jpg",
        descricao: "Você tece uma rapsódia de palavras cativantes que distrai as criaturas à sua escolha dentro do alcance.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S"
    },
    {
        id: "cegueira-surdez",
        nome: "Cegueira/Surdez",
        nivel: 2,
        escola: "Necromancia",
        classes: ["Bardo", "Clérigo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/cegueira-surdez.jpg",
        descricao: "Uma maldição que impede o alvo de enxergar ou ouvir enquanto a magia durar.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V | Duração: 1 minuto"
    },
    {
        id: "crescer-espinhos",
        nome: "Crescer Espinhos",
        nivel: 2,
        escola: "Transmutação",
        classes: ["Druida", "Patrulheiro"],
        imagem: "Imagens/crescer-espinhos.jpg",
        descricao: "Transforma o solo de uma área num terreno difícil coberto de espinhos pontiagudos que causam dano a quem caminhar sobre ele.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 45 metros | Componentes: V, S, M"
    },
    {
        id: "despedacar",
        nome: "Despedaçar (Shatter)",
        nivel: 2,
        escola: "Evocação",
        classes: ["Bardo", "Feiticeiro", "Mago", "Bruxo", "Guerreiro", "Ladino"],
        imagem: "Imagens/despedacar.jpg",
        descricao: "Um ruído ensurdecedor e doloroso surge num ponto à sua escolha, causando dano de trovão em área.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M"
    },
    {
        id: "escuridao",
        nome: "Escuridão",
        nivel: 2,
        escola: "Evocação",
        classes: ["Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/escuridao.jpg",
        descricao: "Uma esfera de escuridão mágica de 4,5 metros de raio surge num ponto. Visão no escuro não consegue penetrá-la.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, M | Duração: Concentração, até 10 minutos"
    },
    {
        id: "imobilizar-pessoa",
        nome: "Imobilizar Pessoa",
        nivel: 2,
        escola: "Encantamento",
        classes: ["Bardo", "Clérigo", "Druida", "Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/imobilizar-pessoa.jpg",
        descricao: "Escolha um humanoide. O alvo fica paralisado pela duração se falhar num teste de resistência de Sabedoria.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "invisibilidade",
        nome: "Invisibilidade",
        nivel: 2,
        escola: "Ilusão",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/invisibilidade.jpg",
        descricao: "Uma criatura tocada por você fica totalmente invisível até que a magia termine, ataque ou conjure um feitiço.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: Concentração, até 1 hora"
    },
    {
        id: "passo-nebuloso",
        nome: "Passo Nebuloso",
        nivel: 2,
        escola: "Conjuração",
        classes: ["Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/passo-nebuloso.jpg",
        descricao: "Brevemente coberto por névoa, você se teleporta instantaneamente até 9 metros para um espaço desocupado visível.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: Pessoal | Componentes: V"
    },
    {
        id: "raio-ardente",
        nome: "Raio Ardente",
        nivel: 2,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/raio-ardente.jpg",
        descricao: "Você dispara três raios de fogo em alvos dentro do alcance, rolando um ataque individual para cada raio.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S"
    },
    {
        id: "reflexos",
        nome: "Imagem Espelhada",
        nivel: 2,
        escola: "Ilusão",
        classes: ["Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/imagem-espelhada.jpg",
        descricao: "Três duplicatas ilusórias de você surgem, confundindo os inimigos que tentarem desferir ataques contra você.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: V, S | Duração: 1 minuto"
    },
    {
        id: "restauracao-menor",
        nome: "Restauração Menor",
        nivel: 2,
        escola: "Abjuração",
        classes: ["Bardo", "Clérigo", "Druida", "Paladino", "Patrulheiro"],
        imagem: "Imagens/restauracao-menor.jpg",
        descricao: "Você toca uma criatura e cura uma doença ou uma condição que a esteja afetando (cego, surdo, paralisado ou envenenado).",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S"
    },
    {
        id: "sugestao",
        nome: "Sugestão",
        nivel: 2,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/sugestao.jpg",
        descricao: "Você sugere um curso de atividade razoável para uma criatura, que se falhar no teste seguirá suas instruções.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, M | Duração: Concentração, até 8 horas"
    },
    {
      id: "visao-no-escuro",
        nome: "Visão no Escuro",
        nivel: 2,
        escola: "Transmutação",
        classes: ["Druida", "Feiticeiro", "Mago", "Patrulheiro", "Guerreiro", "Ladino"],
        imagem: "Imagens/visao-no-escuro.jpg",
        descricao: "Concede a uma criatura disposta a capacidade de enxergar no escuro num raio de 18 metros.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: 8 horas"
    ];// --- MAGIAS DE 3º NÍVEL ---
    {
        id: "amizade-com-espiritos",
        nome: "Falar com os Mortos",
        nivel: 3,
        escola: "Necromancia",
        classes: ["Bardo", "Clérigo"],
        imagem: "Imagens/falar-com-os-mortos.jpg",
        descricao: "Você concede um semblante de vida a um cadáver à sua escolha, permitindo que ele responda a até 5 perguntas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 3 metros | Componentes: V, S, M"
    },
    {
        id: "andar-na-agua",
        nome: "Andar na Água",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Clérigo", "Druida", "Patrulheiro", "Feiticeiro"],
        imagem: "Imagens/andar-na-agua.jpg",
        descricao: "Garante a até 10 criaturas voluntárias a capacidade de se mover sobre superfícies líquidas como se fossem solo firme.",
        detalhes: "Tempo de Conjuração: 1 ação (Ritual) | Alcance: 9 metros | Componentes: V, S, M | Duração: 1 hora"
    },
    {
        id: "arma-elemental",
        nome: "Arma Elemental",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Paladino"],
        imagem: "Imagens/arma-elemental.jpg",
        descricao: "Uma arma não mágica se torna uma arma mágica com +1 nas jogadas de ataque e causa 1d4 de dano elemental extra (ácido, frio, fogo, elétrico ou trovão).",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S | Duração: Concentração, até 1 hora"
    },
    {
        id: "bola-de-fogo",
        nome: "Bola de Fogo",
        nivel: 3,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/bola-de-fogo.jpg",
        descricao: "Uma cortina de fogo brilhante brota do seu dedo para um ponto à sua escolha e explode numa esfera de chamas que causa 8d6 de dano de fogo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 45 metros | Componentes: V, S, M | Dano: 8d6 Fogo"
    },
    {
        id: "circulo-de-morte",
        nome: "Conjurar Animais",
        nivel: 3,
        escola: "Conjuração",
        classes: ["Druida", "Patrulheiro"],
        imagem: "Imagens/conjurar-animais.jpg",
        descricao: "Você invoca espíritos da natureza que tomam a forma de bestas e obedecem aos seus comandos em combate.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: Concentração, até 1 hora"
    },
    {
        id: "contrafeitico",
        nome: "Contramagia (Counterspell)",
        nivel: 3,
        escola: "Abjuração",
        classes: ["Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/contramagia.jpg",
        descricao: "Você interrompe o processo de conjuração de uma magia de uma criatura no exato momento em que ela está sendo lançada.",
        detalhes: "Tempo de Conjuração: 1 reação | Alcance: 18 metros | Componentes: S"
    },
    {
        id: "dissipar-magia",
        nome: "Dissipar Magia",
        nivel: 3,
        escola: "Abjuração",
        classes: ["Bardo", "Clérigo", "Druida", "Feiticeiro", "Mago", "Paladino", "Bruxo"],
        imagem: "Imagens/dissipar-magia.jpg",
        descricao: "Escolha uma criatura, objeto ou efeito mágico dentro do alcance. Qualquer magia de 3º nível ou inferior sobre o alvo é encerrada.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S"
    },
    {
        id: "espirito-guardiao",
        nome: "Espíritos Guardiões",
        nivel: 3,
        escola: "Conjuração",
        classes: ["Clérigo"],
        imagem: "Imagens/espiritos-guardioes.jpg",
        descricao: "Você invoca espíritos protetores que flutuam ao seu redor num raio de 4,5 metros, reduzindo o deslocamento de inimigos e causando dano radiante ou necrótico.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Raio de 4,5m) | Componentes: V, S, M | Duração: Concentração, até 10 minutos"
    },
    {
        id: "falar-com-plantas",
        nome: "Falar com Plantas",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Bardo", "Druida", "Patrulheiro"],
        imagem: "Imagens/falar-com-plantas.jpg",
        descricao: "Imbui plantas com consciência e capacidade de conversar com você, permitindo obter informações sobre a área.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Raio de 9m) | Componentes: V, S"
    },
    {
        id: "forma-gasosa",
        nome: "Forma Gasosa",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Bruxo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/forma-gasosa.jpg",
        descricao: "Transforma uma criatura disposta e tudo o que ela carrega em uma nuvem de névoa, tornando-a resistente a danos não mágicos e capaz de passar por frestas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: Concentração, até 1 hora"
    },
    {
        id: "imagem-maior",
        nome: "Imagem Maior",
        nivel: 3,
        escola: "Ilusão",
        classes: ["Bardo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/imagem-maior.jpg",
        descricao: "Você cria uma ilusão complexa que inclui som, cheiro e temperatura, parecendo completamente real para quem a observa.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 10 minutos"
    },
    {
        id: "lentidao",
        nome: "Lentidão",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/lentidao.jpg",
        descricao: "Altera o tempo ao redor de até 6 criaturas, reduzindo seu deslocamento pela metade, diminuindo sua CA e limitando suas ações por turno.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "maldicao",
        nome: "Rogar Maldição",
        nivel: 3,
        escola: "Necromancia",
        classes: ["Bardo", "Clérigo", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/rogar-maldicao.jpg",
        descricao: "Você toca uma criatura e a amaldiçoa com uma desvantagem à sua escolha (em testes, ataques ou causando dano necrótico extra a ela).",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S | Duração: Concentração, até 1 minuto"
    },
    {
        id: "muralha-de-vento",
        nome: "Muralha de Vento",
        nivel: 3,
        escola: "Evocação",
        classes: ["Druida", "Patrulheiro"],
        imagem: "Imagens/muralha-de-vento.jpg",
        descricao: "Uma cortina de vento rugente surge do chão, desviando flechas, projéteis e criaturas voadoras pequenas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "povoar-de-reinos",
        nome: "Soco de Ki / Onda Elemental",
        nivel: 3,
        escola: "Evocação",
        classes: ["Monge"],
        imagem: "Imagens/onda-elemental.jpg",
        descricao: "Projecta uma explosão elemental através da canalização intensificada de Ki, derrubando e danificando adversários no raio de ação.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 6 metros | Componentes: Ki"
    },
    {
        id: "relampago",
        nome: "Relâmpago",
        nivel: 3,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/relampago.jpg",
        descricao: "Um traço de eletricidade de 30 metros de comprimento e 1,5 metro de largura dispara de você, causando 8d6 de dano elétrico.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Linha de 30m) | Componentes: V, S, M | Dano: 8d6 Elétrico"
    },
    {
        id: "velocidade",
        nome: "Velocidade (Haste)",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/velocidade.jpg",
        descricao: "Uma criatura voluntária ganha velocidade incrível: dobra o deslocamento, recebe +2 na CA, vantagem em testes de Destreza e uma ação adicional a cada turno.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "voar",
        nome: "Voo",
        nivel: 3,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago", "Bruxo", "Guerreiro", "Ladino"],
        imagem: "Imagens/voar.jpg",
        descricao: "Você toca uma criatura voluntária, concedendo a ela um deslocamento de voo de 18 metros pela duração da magia.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: Concentração, até 10 minutos"
    }
    ];// --- MAGIAS DE 4º NÍVEL ---
    {
        id: "assassino-fantasmagórico",
        nome: "Assassino Fantasmagórico",
        nivel: 4,
        escola: "Ilusão",
        classes: ["Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/assassino-fantasmagorico.jpg",
        descricao: "Você explora os medos mais profundos de uma criatura, criando uma ilusão aterrorizante que só ela pode ver, causando dano psíquico a cada turno.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S | Duração: Concentração, até 1 minuto"
    },
    {
        id: "cao-fiel-de-mordenkainen",
        nome: "Cão Fiel de Mordenkainen",
        nivel: 4,
        escola: "Conjuração",
        classes: ["Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/cao-fiel.jpg",
        descricao: "Conjura um cão guardião invisível num ponto fixo. Ele latirá alto se qualquer criatura se aproximar e atacará inimigos próximos.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M | Duração: 8 horas"
    },
    {
        id: "confusao",
        nome: "Confusão",
        nivel: 4,
        escola: "Encantamento",
        classes: ["Bardo", "Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/confusao.jpg",
        descricao: "Afeta a mente de criaturas numa esfera de 3 metros de raio. Alvos afetados perdem o controle de suas ações e agem de forma aleatória a cada turno.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 27 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "deslocamento",
        nome: "Pele de Pedra",
        nivel: 4,
        escola: "Transmutação",
        classes: ["Druida", "Feiticeiro", "Mago", "Patrulheiro"],
        imagem: "Imagens/pele-de-pedra.jpg",
        descricao: "A pele do alvo se torna dura como pedra, concedendo resistência a dano concussivo, cortante e perfurante não mágico.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: Concentração, até 1 hora"
    },
    {
        id: "esfera-resiliente-de-otiluke",
        nome: "Esfera Resiliente de Otiluke",
        nivel: 4,
        escola: "Evocação",
        classes: ["Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/esfera-resiliente.jpg",
        descricao: "Encerra uma criatura ou objeto em uma esfera cintilante de força. Nada pode atravessar a esfera, nem por dentro nem por fora.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "guardiao-da-fe",
        nome: "Guardião da Fé",
        nivel: 4,
        escola: "Conjuração",
        classes: ["Clérigo"],
        imagem: "Imagens/guardiao-da-fe.jpg",
        descricao: "Um espectro grande e luminoso surge para vigiar uma área. Ele ataca qualquer inimigo que se aproxime a até 3 metros dele.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 9 metros | Componentes: V | Duração: 8 horas"
    },
    {
        id: "invisibilidade-maior",
        nome: "Invisibilidade Maior",
        nivel: 4,
        escola: "Ilusão",
        classes: ["Bardo", "Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/invisibilidade-maior.jpg",
        descricao: "Torna uma criatura invisível. Ao contrário da invisibilidade comum, esta magia não se encerra se o alvo atacar ou conjurar magias.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S | Duração: Concentração, até 1 minuto"
    },
    {
        id: "metamorfose",
        nome: "Metamorfose (Polymorph)",
        nivel: 4,
        escola: "Transmutação",
        classes: ["Bardo", "Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/metamorfose.jpg",
        descricao: "Transforma uma criatura numa forma de besta à sua escolha (como um T-Rex ou um sapo), substituindo suas estatísticas pelas da besta.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M | Duração: Concentração, até 1 hora"
    },
    {
        id: "muralha-de-fogo",
        nome: "Muralha de Fogo",
        nivel: 4,
        escola: "Evocação",
        classes: ["Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/muralha-de-fogo.jpg",
        descricao: "Cria uma parede de chamas escaldantes. Qualquer criatura que entrar na muralha ou terminar seu turno perto do lado quente sofre dano de fogo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "porta-dimensional",
        nome: "Porta Dimensional",
        nivel: 4,
        escola: "Conjuração",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/porta-dimensional.jpg",
        descricao: "Você se teleporta instantaneamente de sua localização atual para qualquer outro ponto a até 150 metros que você possa ver ou visualizar.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 150 metros | Componentes: V"
    },
    {
        id: "tempestade-de-gelo",
        nome: "Tempestade de Gelo",
        nivel: 4,
        escola: "Evocação",
        classes: ["Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/tempestade-de-gelo.jpg",
        descricao: "Uma chuva de granizo e gelo cai num cilindro de 6 metros de raio, causando dano concussivo e de frio, além de transformar a área em terreno difícil.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 90 metros | Componentes: V, S, M"
    },
    {
        id: "terreno-alucinatorio",
        nome: "Terreno Alucinatório",
        nivel: 4,
        escola: "Ilusão",
        classes: ["Bardo", "Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/terreno-alucinatorio.jpg",
        descricao: "Faz um terreno natural parecer, soar e cheirar como outro tipo de terreno (ex: transformar um pântano em uma estrada gramada).",
        detalhes: "Tempo de Conjuração: 10 minutos | Alcance: 90 metros | Componentes: V, S, M | Duração: 24 horas"
    }
    Perfeito! Agora vamos para as Magias de 5º Nível.

No seu arquivo magias.js, vá no finalzinho (antes de fechar com o último ];) e cole o código abaixo:

JavaScript
    ];// --- MAGIAS DE 5º NÍVEL ---
    {
        id: "ancora-planar",
        nome: "Âncora Planar",
        nivel: 5,
        escola: "Abjuração",
        classes: ["Clérigo", "Druida", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/ancora-planar.jpg",
        descricao: "Vincula um celestial, elemental, fada ou demônio ao seu serviço pela duração da magia.",
        detalhes: "Tempo de Conjuração: 1 hora | Alcance: 18 metros | Componentes: V, S, M | Duração: 24 horas"
    },
    {
        id: "barreira-de-luz",
        nome: "Muralha de Luz",
        nivel: 5,
        escola: "Evocação",
        classes: ["Clérigo", "Feiticeiro", "Mago"],
        imagem: "Imagens/muralha-de-luz.jpg",
        descricao: "Uma parede cintilante de luz brilhante surge e pode cegar criaturas e disparar feixes radiantes sob seu comando.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 10 minutos"
    },
    {
        id: "caminhar-na-nevoa",
        nome: "Passo Planar (Teleporte Maior)",
        nivel: 5,
        escola: "Conjuração",
        classes: ["Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/passo-planar.jpg",
        descricao: "Permite a você e aliados se moverem instantaneamente através do plano astral para um local conhecido.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V"
    },
    {
        id: "cone-de-frio",
        nome: "Cone de Frio",
        nivel: 5,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/cone-de-frio.jpg",
        descricao: "Uma explosão de ar gelado dispara das suas mãos num cone de 18 metros, causando 8d8 de dano de frio.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Cone de 18m) | Componentes: V, S, M | Dano: 8d8 Frio"
    },
    {
        id: "conhecimento-lendario",
        nome: "Conhecimento Lendário",
        nivel: 5,
        escola: "Adivinhação",
        classes: ["Bardo", "Clérigo", "Mago"],
        imagem: "Imagens/conhecimento-lendario.jpg",
        descricao: "Traz à sua mente informações históricas e mitológicas sobre uma pessoa, lugar ou objeto importante.",
        detalhes: "Tempo de Conjuração: 10 minutos | Alcance: Pessoal | Componentes: V, S, M"
    },
    {
        id: "curar-ferimentos-em-massa",
        nome: "Curar Ferimentos em Massa",
        nivel: 5,
        escola: "Evocação",
        classes: ["Bardo", "Clérigo", "Druida"],
        imagem: "Imagens/curar-ferimentos-em-massa.jpg",
        descricao: "Uma onda de energia curativa banha até 6 criaturas numa esfera de 9 metros de raio, restaurando 3d8 + modificador de vida.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S"
    },
    {
        id: "dominar-pessoa",
        nome: "Dominar Pessoa",
        nivel: 5,
        escola: "Encantamento",
        classes: ["Bardo", "Feiticeiro", "Mago"],
        imagem: "Imagens/dominar-pessoa.jpg",
        descricao: "Você tenta controlar um humanoide e estabelece uma ligação telepática com ele para comandar todas as suas ações.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: Concentração, até 1 minuto"
    },
    {
        id: "imobilizar-monstro",
        nome: "Imobilizar Monstro",
        nivel: 5,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/imobilizar-monstro.jpg",
        descricao: "Paralisa qualquer tipo de criatura (não apenas humanoides) que falhar num teste de resistência de Sabedoria.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 27 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "muralha-de-forca",
        nome: "Muralha de Força",
        nivel: 5,
        escola: "Evocação",
        classes: ["Mago", "Guerreiro", "Ladino"],
        imagem: "Imagens/muralha-de-forca.jpg",
        descricao: "Uma parede invisível de força surge num ponto à sua escolha. Ela é completamente indestrutível e imune a dissipação.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 10 minutos"
    },
    {
        id: "praga",
        nome: "Praga (Contagion)",
        nivel: 5,
        escola: "Necromancia",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/praga.jpg",
        descricao: "Seu toque transmite uma doença terrível a uma criatura, causando efeitos debilitantes e cegueira ou fraqueza extrema.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S | Duração: 7 dias"
    },
    {
        id: "telecinese",
        nome: "Telecinese",
        nivel: 5,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/telecinese.jpg",
        descricao: "Você ganha a capacidade de mover mentalmente criaturas pesadas ou objetos grandes com a força do seu pensamento.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: Concentração, até 10 minutos"
    }
    ];// --- MAGIAS DE 6º NÍVEL ---
    {
        id: "ataque-de-vento",
        nome: "Caminhar no Vento",
        nivel: 6,
        escola: "Transmutação",
        classes: ["Druida"],
        imagem: "Imagens/caminhar-no-vento.jpg",
        descricao: "Você e até dez criaturas voluntárias se transformam em espíritos de névoa, voando em alta velocidade pelo ar.",
        detalhes: "Tempo de Conjuração: 1 minuto | Alcance: 9 metros | Componentes: V, S, M | Duração: 8 horas"
    },
    {
        id: "banquete-dos-herois",
        nome: "Banquete dos Heróis",
        nivel: 6,
        escola: "Conjuração",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/banquete-dos-herois.jpg",
        descricao: "Você invoca um grande banquete mágico. Quem comer se torna imune a veneno, medo, ganha vida máxima extra e vantagem em testes de Sabedoria.",
        detalhes: "Tempo de Conjuração: 10 minutos | Alcance: 9 metros | Componentes: V, S, M | Duração: 24 horas"
    },
    {
        id: "corrente-de-relampagos",
        nome: "Corrente de Relâmpagos",
        nivel: 6,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/corrente-de-relampagos.jpg",
        descricao: "Você dispara um raio sobre uma criatura e a eletricidade se espalha e atinge até três outros alvos a 9m da primeira vítima.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 45 metros | Componentes: V, S, M | Dano: 10d8 Elétrico"
    },
    {
        id: "cura-completa",
        nome: "Curar",
        nivel: 6,
        escola: "Evocação",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/curar.jpg",
        descricao: "Uma onda de energia positiva recupera 70 pontos de vida do alvo e encerra condições de cegueira, surdez e doenças.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S"
    },
    {
        id: "desintegrar",
        nome: "Desintegrar",
        nivel: 6,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/desintegrar.jpg",
        descricao: "Um feixe verde dispara dos seus dedos. Se reduzir a vida de uma criatura a 0, ela e seus pertences são reduzidos a um monte de poeira cinzenta.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M | Dano: 10d6 + 40 de Força"
    },
    {
        id: "muralha-de-gelo",
        nome: "Muralha de Gelo",
        nivel: 6,
        escola: "Evocação",
        classes: ["Mago"],
        imagem: "Imagens/muralha-de-gelo.jpg",
        descricao: "Cria uma parede de gelo opaca. Se for destruída, libera um sopro de ar congelante nas criaturas próximas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: Concentração, até 10 minutos"
    },
    {
        id: "portal-arcano",
        nome: "Portal Arcano",
        nivel: 6,
        escola: "Conjuração",
        classes: ["Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/portal-arcano.jpg",
        descricao: "Cria dois portais ovais interconectados na superfície do chão ou paredes que permitem a passagem instantânea de criaturas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 150 metros | Componentes: V, S | Duração: Concentração, até 10 minutos"
    },
    {
        id: "raio-solar",
        nome: "Raio Solar",
        nivel: 6,
        escola: "Evocação",
        classes: ["Clérigo", "Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/raio-solar.jpg",
        descricao: "Um feixe brilhante de luz solar dispara da sua mão numa linha de 18m, causando dano radiante e cegando inimigos.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Linha de 18m) | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "sugestao-em-massa",
        nome: "Sugestão em Massa",
        nivel: 6,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/sugestao-em-massa.jpg",
        descricao: "Comanda magicamente até 12 criaturas a realizarem um curso de ação razoável por um longo período.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, M | Duração: 24 horas"
    },
    {
        id: "visão-da-verdade",
        nome: "Visão da Verdade",
        nivel: 6,
        escola: "Adivinhação",
        classes: ["Bardo", "Clérigo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/visao-da-verdade.jpg",
        descricao: "Garante a uma criatura a capacidade de ver através de ilusões, portas secretas e formas metamorfas como elas realmente são.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Toque | Componentes: V, S, M | Duração: 1 hora"
    }
    ];// --- MAGIAS DE 7º NÍVEL ---
    {
        id: "bola-de-fogo-atrasada",
        nome: "Bola de Fogo Controlada (Delayed Blast Fireball)",
        nivel: 7,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/bola-de-fogo-controlada.jpg",
        descricao: "Um feixe de luz condensa uma conta amarela num ponto. Quanto mais tempo você segura a concentração antes de detonar, maior o dano.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 45 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "dedo-da-morte",
        nome: "Dedo da Morte",
        nivel: 7,
        escola: "Necromancia",
        classes: ["Feiticeiro", "Mago", "Bruxo"],
        imagem: "Imagens/dedo-da-morte.jpg",
        descricao: "Envia uma descarga de energia necrótica em um alvo. Se matar um humanoide, ele se ergue no seu próximo turno como um zumbi sob seu comando.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Dano: 7d8 + 30 Necrótico"
    },
    {
        id: "espada-de-mordenkainen",
        nome: "Espada de Mordenkainen",
        nivel: 7,
        escola: "Evocação",
        classes: ["Bardo", "Mago"],
        imagem: "Imagens/espada-de-mordenkainen.jpg",
        descricao: "Uma espada de força mágica surge e ataca inimigos sob seu comando, causando dano de força a cada rodada.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "invisibilidade-em-massa",
        nome: "Invisibilidade em Massa",
        nivel: 7,
        escola: "Ilusão",
        classes: ["Bardo", "Feiticeiro", "Mago"],
        imagem: "Imagens/invisibilidade-em-massa.jpg",
        descricao: "Torna você e todas as criaturas à sua escolha dentro do alcance totalmente invisíveis.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: Concentração, até 1 hora"
    },
    {
        id: "jaula-de-forca",
        nome: "Jaula de Força (Forcecage)",
        nivel: 7,
        escola: "Evocação",
        classes: ["Bardo", "Mago", "Bruxo"],
        imagem: "Imagens/jaula-de-forca.jpg",
        descricao: "Prisão imutável e invisível de força pura surge ao redor de uma área, prendendo criaturas sem permitir teste de resistência.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 36 metros | Componentes: V, S, M | Duração: 1 hora"
    },
    {
        id: "muralha-prismatica-menor",
        nome: "Muralha Prismática Menor",
        nivel: 7,
        escola: "Abjuração",
        classes: ["Mago"],
        imagem: "Imagens/muralha-prismatica.jpg",
        descricao: "Cria uma parede multicolorida de luz radiante e protetora que repele projéteis e cega criaturas agressivas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: Concentração, até 10 minutos"
    },
    {
        id: "palavra-divina",
        nome: "Palavra Divina",
        nivel: 7,
        escola: "Evocação",
        classes: ["Clérigo"],
        imagem: "Imagens/palavra-divina.jpg",
        descricao: "Você profere uma palavra de poder sagrado que ensurdece, cega, atordoa ou mata criaturas hostis dependendo de seus pontos de vida restantes.",
        detalhes: "Tempo de Conjuração: 1 ação bônus | Alcance: 9 metros | Componentes: V"
    },
    {
        id: "teleporte",
        nome: "Teleporte",
        nivel: 7,
        escola: "Conjuração",
        classes: ["Bardo", "Feiticeiro", "Mago"],
        imagem: "Imagens/teleporte.jpg",
        descricao: "Transporta instantaneamente você e até oito criaturas voluntárias para um destino à sua escolha no mesmo plano de existência.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 3 metros | Componentes: V"
    },
    {
        id: "tempestade-de-fogo",
        nome: "Tempestade de Fogo",
        nivel: 7,
        escola: "Evocação",
        classes: ["Clérigo", "Druida", "Feiticeiro"],
        imagem: "Imagens/tempestade-de-fogo.jpg",
        descricao: "Uma tempestade de chamas cobrindo até dez cubos de 3 metros estoura na área, reduzindo o local a cinzas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 45 metros | Componentes: V, S | Dano: 7d10 Fogo"
    }
    ];// --- MAGIAS DE 8º NÍVEL ---
    {
        id: "campo-anti-magia",
        nome: "Campo Anti-Magia",
        nivel: 8,
        escola: "Abjuração",
        classes: ["Clérigo", "Mago"],
        imagem: "Imagens/campo-anti-magia.jpg",
        descricao: "Uma esfera invisível de 3 metros envolve você. Dentro dela, nenhuma magia pode ser conjurada e itens mágicos viram mundanos.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal (Raio de 3m) | Componentes: V, S, M | Duração: Concentração, até 1 hora"
    },
    {
        id: "dominar-monstro",
        nome: "Dominar Monstro",
        nivel: 8,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/dominar-monstro.jpg",
        descricao: "Você tenta controlar qualquer criatura e estabelece uma ligação telepática para comandar todas as suas ações.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: Concentração, até 1 hora"
    },
    {
        id: "explosao-solar",
        nome: "Explosão Solar",
        nivel: 8,
        escola: "Evocação",
        classes: ["Clérigo", "Druida", "Feiticeiro", "Mago"],
        imagem: "Imagens/explosao-solar.jpg",
        descricao: "Luz solar mágica explode num raio de 18 metros, causando 12d6 de dano radiante e cegando os alvos afetados.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 45 metros | Componentes: V, S, M | Dano: 12d6 Radiante"
    },
    {
        id: "palavra-de-poder-atordoar",
        nome: "Palavra de Poder: Atordoar",
        nivel: 8,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/palavra-de-poder-atordoar.jpg",
        descricao: "Você pronuncia uma palavra que sobrecarrega a mente de uma criatura visível de até 150 PVs, deixando-a atordoada.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V"
    },
    {
        id: "terremoto",
        nome: "Terremoto",
        nivel: 8,
        escola: "Evocação",
        classes: ["Clérigo", "Druida", "Feiticeiro"],
        imagem: "Imagens/terremoto.jpg",
        descricao: "Cria um tremor intenso num raio de 30 metros, derrubando estruturas, abrindo fendas no chão e derrubando criaturas.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 150 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
];// --- MAGIAS DE 9º NÍVEL ---
    {
        id: "chuva-de-meteoros",
        nome: "Chuva de Meteoros",
        nivel: 9,
        escola: "Evocação",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/chuva-de-meteoros.jpg",
        descricao: "Orbes de fogo escaldante caem do céu em 4 pontos diferentes, causando massivos 20d6 de dano de fogo e 20d6 concussivo.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 1,5 km | Componentes: V, S | Dano: 40d6 (Fogo + Concussivo)"
    },
    {
        id: "cura-completa-em-massa",
        nome: "Cura Completa em Massa",
        nivel: 9,
        escola: "Evocação",
        classes: ["Clérigo"],
        imagem: "Imagens/cura-completa-em-massa.jpg",
        descricao: "Uma onda imensa de energia vital restaura até 700 pontos de vida divididos entre as criaturas que você escolher.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S"
    },
    {
        id: "desejo",
        nome: "Desejo (Wish)",
        nivel: 9,
        escola: "Conjuração",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/desejo.jpg",
        descricao: "A magia mais poderosa que um mortal pode conjurar. Capaz de alterar a própria realidade ou duplicar qualquer outra magia de 8º nível ou inferior.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: V"
    },
    {
        id: "muralha-prismatica",
        nome: "Muralha Prismática",
        nivel: 9,
        escola: "Abjuração",
        classes: ["Mago"],
        imagem: "Imagens/muralha-prismatica.jpg",
        descricao: "Uma parede multicolorida composta por 7 camadas de luz. Cada camada possui uma cor, imunidade e dano diferente.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S | Duração: 10 minutos"
    },
    {
        id: "palavra-de-poder-matar",
        nome: "Palavra de Poder: Matar",
        nivel: 9,
        escola: "Encantamento",
        classes: ["Bardo", "Bruxo", "Feiticeiro", "Mago"],
        imagem: "Imagens/palavra-de-poder-matar.jpg",
        descricao: "Você profere uma palavra que obriga uma criatura com 100 pontos de vida ou menos a morrer instantaneamente.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V"
    },
    {
        id: "parar-o-tempo",
        nome: "Parar o Tempo",
        nivel: 9,
        escola: "Transmutação",
        classes: ["Feiticeiro", "Mago"],
        imagem: "Imagens/parar-o-tempo.jpg",
        descricao: "Você para o fluxo do tempo para todos, exceto você mesmo, por 1d4 + 1 turnos consecutivos.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: Pessoal | Componentes: V"
    },
    {
        id: "portal",
        nome: "Portal (Gate)",
        nivel: 9,
        escola: "Conjuração",
        classes: ["Clérigo", "Feiticeiro", "Mago"],
        imagem: "Imagens/portal.jpg",
        descricao: "Abre um portal interdimensional diretamente para outro plano de existência e permite invocar uma criatura específica por seu nome.",
        detalhes: "Tempo de Conjuração: 1 ação | Alcance: 18 metros | Componentes: V, S, M | Duração: Concentração, até 1 minuto"
    },
    {
        id: "ressurreicao-verdadera",
        nome: "Ressurreição Verdadeira",
        nivel: 9,
        escola: "Necromancia",
        classes: ["Clérigo", "Druida"],
        imagem: "Imagens/ressurreicao-verdadeira.jpg",
        descricao: "Toca uma criatura morta há até 200 anos e a traz de volta à vida com pontos de vida máximos, criando até um novo corpo se o antigo foi destruído.",
        detalhes: "Tempo de Conjuração: 1 hora | Alcance: Toque | Componentes: V, S, M"
    }
    ];