/**
 * Old Monkey Racing - Blog Page Dynamic Logic
 */

// 1. Full Articles Database
const BLOG_POSTS = [
    {
        id: 1,
        title: "Aluguel de Carro de Corrida em Interlagos: Tudo o que Você Precisa Saber",
        category: "iniciantes",
        categoryLabel: "Iniciantes",
        date: "28 de Maio, 2026",
        author: "Edu Dias",
        image: "fotos/galeria-1.jpg",
        snippet: "Quer pilotar um Fórmula 1600 no templo da velocidade? Conheça os requisitos, a estrutura de boxes e como funciona o aluguel.",
        content: `
            <p>O sonho de pilotar um carro de corrida real no lendário Autódromo de Interlagos é muito mais acessível do que a maioria dos entusiastas imagina. O serviço de aluguel de carros de Fórmula 1600 (F1600) da Old Monkey Racing oferece uma experiência de pista completa para entusiastas e pilotos em início de carreira, com toda a infraestrutura de uma equipe de competição profissional.</p>
            
            <h2>Como funciona a experiência de pilotagem?</h2>
            <p>Para começar, você não precisa ser um piloto profissional ou ter uma licença de corrida da CBA (Confederação Brasileira de Automobilismo) para realizar os treinos livres e dias de teste. No entanto, é fundamental possuir uma Carteira Nacional de Habilitação (CNH) válida e passar por um briefing de segurança e técnico detalhado conduzido por engenheiros de pista e pelo chefe de equipe Edu Dias.</p>
            
            <p>A Old Monkey Racing fornece todos os equipamentos de segurança necessários e homologados, incluindo:</p>
            <ul>
                <li>Macacão antichama homologado FIA</li>
                <li>Capacete equipado com rádio intercomunicador</li>
                <li>Luvas e sapatilhas de corrida</li>
                <li>Protetor cervical (HANS device)</li>
            </ul>
            
            <h2>A Estrutura de Pista à sua Disposição</h2>
            <p>Ao sentar no cockpit do Fórmula 1600, você terá à disposição uma equipe de mecânicos dedicados ao acerto do chassi, calibragem de pneus slick e análise de dados pós-treino. Cada sessão na pista é registrada por sensores de telemetria, permitindo que nosso engenheiro compare suas voltas com a telemetria do piloto campeão Edu Dias, identificando os pontos exatos onde você pode frear mais tarde ou acelerar mais cedo.</p>
            
            <div class="blog-cta-box">
                <h3>Pronto para sentir a força G em Interlagos?</h3>
                <p>Nossos pacotes incluem pneus, combustível, suporte de engenharia e box estruturado. Entre em contato e agende sua data!</p>
                <a href="https://wa.me/5511984014296?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20aluguel%20de%20carros%20de%20corrida%20F1600%20em%20Interlagos!" target="_blank" class="btn btn-primary">
                    Agendar Treino Real
                </a>
            </div>
        `
    },
    {
        id: 2,
        title: "Fórmula 1600: A Porta de Entrada para o Automobilismo de Competição",
        category: "iniciantes",
        categoryLabel: "Iniciantes",
        date: "20 de Maio, 2026",
        author: "Equipe Old Monkey",
        image: "fotos/galeria-5.jpg",
        snippet: "Conheça os detalhes técnicos do monoposto e entenda por que a ausência de eletrônica faz dele a melhor escola de pilotagem do Brasil.",
        content: `
            <p>A Fórmula 1600 é amplamente reconhecida no cenário nacional como a melhor categoria escola do automobilismo. Combinando baixo custo operacional com um altíssimo nível técnico de competição, ela serve como o passo natural para quem está saindo do kart ou deseja fazer a transição dos track days de carros de rua para os monopostos puro-sangue.</p>
            
            <h2>Ficha Técnica Simplificada do Fórmula 1600</h2>
            <p>Os carros são verdadeiros protótipos de competição projetados para velocidade e respostas diretas:</p>
            <ul>
                <li><strong>Motor:</strong> Ford Rocam 1.6L, entregando cerca de 120cv a altas rotações</li>
                <li><strong>Transmissão:</strong> Câmbio manual com marchas sequenciais ou em padrão H</li>
                <li><strong>Chassi:</strong> Estrutura tubular em aço carbono, extremamente leve e segura</li>
                <li><strong>Peso:</strong> Apenas 500 kg (incluindo fluidos), gerando uma relação peso-potência agressiva</li>
                <li><strong>Pneus:</strong> Slick (pista seca) e pneus biscoito (pista molhada) de alta aderência</li>
            </ul>
            
            <h2>A Melhor Escola: Por que a Ausência de Auxílios Eletrônicos Importa?</h2>
            <p>O maior benefício de se desenvolver na F1600 é que o carro não possui assistências eletrônicas. Não há controle de tração, freios ABS ou direção hidráulica. O comportamento do carro depende 100% da sensibilidade do piloto. Se você acelerar forte antes da hora em uma curva, a traseira vai escapar; se aplicar força excessiva no pedal de freio, as rodas vão travar.</p>
            
            <p>Pilotar um Fórmula 1600 força o piloto a refinar o seu controle de pedal, dominar a frenagem regressiva (trail braking) e entender a dinâmica veicular na sua forma mais pura. Quem aprende a ser rápido na F1600 consegue pilotar com facilidade e velocidade qualquer outro carro de corrida, seja de turismo, GT ou fórmulas superiores.</p>
        `
    },
    {
        id: 3,
        title: "Desvendando Interlagos: Dicas de Pilotagem e os Segredos do Autódromo",
        category: "pilotagem",
        categoryLabel: "Dicas de Pilotagem",
        date: "15 de Maio, 2026",
        author: "Edu Dias",
        image: "fotos/galeria-2.jpg",
        snippet: "Guia completo curva a curva de Interlagos. Aprenda os pontos de tangência e frenagem da pista mais importante do automobilismo nacional.",
        content: `
            <p>O Autódromo de Interlagos é um dos circuitos mais técnicos do mundo. Para fazer um tempo de volta de respeito em um Fórmula 1600, você precisa conhecer os detalhes de cada curva e usar a física do chassi a seu favor. Abaixo, o piloto campeão Edu Dias compartilha o caminho ideal.</p>
            
            <h2>Curva a Curva no Templo da Velocidade</h2>
            
            <h3>1. S do Senna</h3>
            <p>A aproximação na reta principal é feita a quase 200 km/h. A frenagem ocorre na marca dos 100 metros. O segredo é frear forte em linha reta, apontar para a esquerda trazendo um pouco de freio para carregar a frente (trail braking) e tangenciar bem próximo à zebra interna. Na segunda perna (à direita), mantenha o carro equilibrado para acelerar tudo em direção à Curva do Sol.</p>
            
            <h3>2. Curva do Sol e Reta Oposta</h3>
            <p>Na Curva do Sol, abra a trajetória gradualmente. O objetivo é colar o pé no acelerador o quanto antes, pois a velocidade de saída determinará a velocidade final ao longo de toda a Reta Oposta. Use o vácuo de outros carros na reta para ganhar centésimos valiosos.</p>
            
            <h3>3. Descida do Lago</h3>
            <p>Frenagem forte na placa de 50 metros. É uma curva de duas pernas rápidas à esquerda. Tangencie a primeira zebra, deixe o carro escorregar um pouco para o meio da pista e feche novamente na segunda zebra de saída, acelerando tudo em direção ao trecho misto.</p>
            
            <h3>4. Laranjinha, Pinheirinho e Bico de Pato</h3>
            <p>O Laranjinha é uma curva cega à direita de raio longo; mantenha o acelerador constante. O Pinheirinho exige paciência: freie apontando para a esquerda, espere o carro assentar e retome a aceleração devagar. O Bico de Pato é a curva mais lenta da pista; tangencie tarde para conseguir abrir o volante rapidamente na saída.</p>
            
            <h3>5. Junção e Subida dos Boxes</h3>
            <p>A Junção é a curva mais importante de Interlagos. Saia muito forte, colando o pneu na zebra externa e acelere tudo. Toda a subida dos boxes é feita de pé embaixo, e qualquer perda de tração na Junção compromete a velocidade até a linha de chegada.</p>
        `
    },
    {
        id: 4,
        title: "Automobilismo para Iniciantes: Respondendo às Suas Maiores Dúvidas",
        category: "iniciantes",
        categoryLabel: "Iniciantes",
        date: "08 de Maio, 2026",
        author: "Equipe Old Monkey",
        image: "fotos/galeria-4.jpg",
        snippet: "Idade mínima, custos, requisitos físicos e carteira de piloto. Respondemos ao FAQ definitivo para quem quer estrear nas pistas.",
        content: `
            <p>Começar a correr de carro de verdade costuma parecer um labirinto burocrático e financeiro. Para desmistificar esse processo, reunimos as dúvidas mais comuns de entusiastas que nos procuram na Old Monkey Racing e respondemos de forma direta.</p>
            
            <h2>FAQ do Piloto Iniciante</h2>
            
            <h3>Preciso de CNH para pilotar em treinos?</h3>
            <p>Sim, para alugar um Fórmula 1600 e realizar treinos livres, track days ou sessões de desenvolvimento de pilotagem em circuitos fechados, é exigido possuir uma Carteira Nacional de Habilitação (CNH) na categoria B ativa. Não é necessário ter histórico de competições anteriores.</p>
            
            <h3>Qual é a preparação física recomendada?</h3>
            <p>Monopostos de corrida não possuem direção hidráulica. O esforço nos braços e ombros é significativo devido às forças laterais nas curvas rápidas. Um foco em treinos cardiovasculares e fortalecimento de ombros, pescoço e core ajudará você a manter a consistência e a concentração durante sessões mais longas de pista.</p>
            
            <h3>Preciso de carteira de piloto (CBA) para competir?</h3>
            <p>Para treinos privados com nossa estrutura campeã, não. No entanto, se o seu objetivo for disputar o Campeonato Paulista de F1600 ou a Copa Brasil, você precisará passar por uma escola de pilotagem homologada pela FASP ou federação equivalente e emitir a licença de Piloto Graduado B (PGU B) emitida pela CBA.</p>
            
            <h3>A equipe fornece o macacão e os itens de segurança?</h3>
            <p>Com certeza. Nosso pacote de aluguel inclui o empréstimo de macacão antichama homologado FIA, sapatilhas, luvas, capacete com comunicação de box e o Hans Device (protetor cervical). Tudo limpo, revisado e adequado ao seu tamanho para total segurança.</p>
        `
    },
    {
        id: 5,
        title: "Frenagem de Rua vs. Frenagem de Pista: Por que Você Está Freando Errado?",
        category: "pilotagem",
        categoryLabel: "Dicas de Pilotagem",
        date: "02 de Maio, 2026",
        author: "Edu Dias",
        image: "fotos/galeria-3.jpg",
        snippet: "Aprenda o conceito de frenagem regressiva e trail braking para parar no menor espaço e estabilizar o carro de corrida nas curvas.",
        content: `
            <p>O maior vício que motoristas de rua trazem para as pistas de corrida é a forma de frear. Na rua, somos ensinados a frear de forma progressiva: começamos com leve pressão no pedal e vamos aumentando a força à medida que o obstáculo se aproxima. Na pista, se você fizer isso, vai passar reto na curva ou perder segundos cruciais.</p>
            
            <h2>O Conceito de Frenagem Regressiva</h2>
            <p>Em um carro de corrida, a frenagem deve ser agressiva e regressiva. Ao final de uma reta longa, você deve aplicar pressão máxima no pedal de freio instantaneamente (entre 80% e 100% da capacidade física do seu pé) no ponto de frenagem. Nesse momento, o carro está em alta velocidade, gerando peso aerodinâmico que empurra os pneus contra o asfalto, reduzindo a chance de travamento.</p>
            
            <p>À medida que a velocidade diminui, a carga aerodinâmica diminui e as rodas ficam mais propensas a travar. Por isso, você deve aliviar o pedal de freio gradualmente à medida que o carro se aproxima do ponto de tangência da curva. Esse alívio controlado evita o travamento das rodas dianteiras e mantém a dirigibilidade.</p>
            
            <h2>Trail Braking: O Segredo das Curvas Rápidas</h2>
            <p>Em vez de soltar o freio completamente antes de virar o volante, os pilotos profissionais praticam o <strong>trail braking</strong>. Isso consiste em carregar uma pequena porcentagem da força de freio (cerca de 10% a 15%) enquanto começa a esterçar o volante para dentro da curva. Esse freio residual mantém a frente do carro abaixada, transferindo o peso para os pneus dianteiros. O resultado é muito mais aderência e precisão no contorno da curva, eliminando a subesterço (frente desgarrando).</p>
            
            <p>Essa técnica, popularizada nas pistas e detalhada constantemente pelo piloto Edu Dias, exige treino e sensibilidade, mas é a chave para a pilotagem de alto rendimento.</p>
        `
    },
    {
        id: 6,
        title: "A Arte do Vácuo Duplo: Como Ganhar Velocidade Sem Pisar Mais no Acelerador",
        category: "pilotagem",
        categoryLabel: "Dicas de Pilotagem",
        date: "25 de Abril, 2026",
        author: "Edu Dias",
        image: "fotos/galeria-2.jpg",
        snippet: "Entenda a física por trás do vácuo aerodinâmico e como usar o alinhamento de carros para efetuar ultrapassagens duplas e estratégicas.",
        content: `
            <p>Em categorias altamente equilibradas e com motores idênticos como a Fórmula 1600, a potência pura não é suficiente para garantir a vitória. O piloto precisa dominar a tática e, acima de tudo, a física da aerodinâmica. É aí que entra a arte de utilizar o vácuo.</p>
            
            <h2>Como o Vácuo Funciona?</h2>
            <p>Quando um carro de corrida se desloca em alta velocidade, ele rompe o ar à sua frente. Isso deixa uma zona de ar turbulento e de baixa pressão diretamente atrás dele. Um segundo carro que se posicione exatamente nessa zona (a 'esteira' aerodinâmica) encontrará muito menos resistência do ar. Como resultado, o carro de trás consegue acelerar mais rápido e atingir uma velocidade final maior do que o carro líder, usando exatamente a mesma potência de motor.</p>
            
            <h2>A Estratégia do Vácuo Duplo</h2>
            <p>O vácuo duplo é o cenário tático perfeito em pistas como a reta de Interlagos. Ele ocorre quando três carros se alinham em fila indiana. O segundo carro se aproveita do vácuo do líder. O terceiro carro, por sua vez, aproveita uma zona de arrasto aerodinâmico ainda maior gerada pelos dois primeiros carros combinados.</p>
            
            <p>A velocidade extra acumulada pelo terceiro piloto é massiva. Ele ganha embalo suficiente para puxar para o lado e efetuar a ultrapassagem sobre os dois carros da frente de uma só vez antes do ponto de frenagem. No entanto, é preciso ter cuidado: sair do vácuo cedo demais faz o carro 'bater no muro de ar' e perder o embalo. O tempo de reação e a precisão da manobra decidem campeonatos na F1600.</p>
        `
    },
    {
        id: 7,
        title: "5 Erros que Todo Iniciante Comete em Interlagos (e Como Evitá-los)",
        category: "iniciantes",
        categoryLabel: "Iniciantes",
        date: "18 de Abril, 2026",
        author: "Equipe Old Monkey",
        image: "fotos/galeria-6.jpg",
        snippet: "Evite os vícios clássicos da direção de rua, melhore seu campo visual e aprenda a controlar a tração traseira do Fórmula 1600.",
        content: `
            <p>Pilotar um carro de fórmula pela primeira vez traz uma enxurrada de estímulos visuais e físicos. É natural que iniciantes cometam erros decorrentes de hábitos de direção de rua. Apontamos os 5 erros mais comuns para você evitá-los em seu primeiro treino com a Old Monkey Racing.</p>
            
            <h2>Os Erros Mais Frequentes e Suas Correções</h2>
            
            <h3>1. Focar o olhar logo à frente do bico do carro</h3>
            <p>O maior erro é olhar para o asfalto logo à frente. O cérebro precisa de tempo para processar as informações de alta velocidade. <strong>Correção:</strong> Mantenha os olhos sempre apontados para a próxima etapa da curva — olhe para o ponto de tangência antes de frear, e para o ponto de saída assim que atingir o ápice.</p>
            
            <h3>2. Usar frenagem suave e progressiva</h3>
            <p>Frear devagar no início e apertar mais forte no final da reta desestabiliza a traseira do Fórmula 1600 e causa saídas de pista. <strong>Correção:</strong> Aplique pressão forte e rápida no início da frenagem e vá aliviando à medida que o carro reduz a velocidade.</p>
            
            <h3>3. Cruzar ou soltar as mãos no volante</h3>
            <p>O volante de um monoposto é direto e exige reações rápidas. Cruzar os braços limita seu ângulo de esterço e sua velocidade de reação. <strong>Correção:</strong> Mantenha as mãos presas firmemente nas posições correspondentes a 9 horas e 3 horas. O volante gira pouco, eliminando a necessidade de soltar as mãos.</p>
            
            <h3>4. Retomar a aceleração com o volante totalmente esterçado</h3>
            <p>A F1600 não possui controle de tração. Acelerar fundo no ápice da curva com as rodas viradas causará sobresterço imediato (traseira rodando). <strong>Correção:</strong> Só retome a aceleração total à medida que for abrindo o volante e endireitando as rodas dianteiras.</p>
            
            <h3>5. Ignorar o cansaço físico</h3>
            <p>A fadiga nos braços e pescoço faz o piloto perder precisão nas frenagens e errar as marchas. <strong>Correção:</strong> Respeite os limites do seu corpo, faça pausas nos boxes e hidrate-se entre as sessões de treino.</p>
        `
    },
    {
        id: 8,
        title: "Automobilismo Raiz: O Desafio de Pilotar um Carro Sem Eletrônica",
        category: "bastidores",
        categoryLabel: "Bastidores",
        date: "10 de Abril, 2026",
        author: "Edu Dias",
        image: "fotos/galeria-3.jpg",
        snippet: "A conexão mecânica e pura entre o piloto e a máquina na F1600. Descubra a sensibilidade de pilotar sem freios ABS ou controle de tração.",
        content: `
            <p>Em uma época em que até os supercarros de rua são cheios de sensores eletrônicos que corrigem os erros do motorista, a Fórmula 1600 se orgulha de manter o automobilismo raiz. Sentar em um F1600 da Old Monkey Racing é experimentar a conexão direta e analógica entre o piloto e a pista.</p>
            
            <h2>A Sensibilidade do Assento (Seat of the Pants)</h2>
            <p>Sem direção hidráulica, o volante transmite cada pequena imperfeição do asfalto, cada perda de aderência e cada ondulação diretamente para as palmas das mãos do piloto. Sem controle de estabilidade, o piloto precisa aprender a 'sentir pelo quadril' — o contato direto com o chassi revela o comportamento dinâmico do carro milissegundos antes dele começar a rodar ou escorregar de frente.</p>
            
            <h2>O Controle Absoluto nos Pés</h2>
            <p>A frenagem exige uma sensibilidade fina no pé esquerdo. Sem ABS, cabe ao piloto calibrar a força exata para extrair o máximo de frenagem sem travar os pneus slick, o que causaria desgaste excessivo e perda de controle. Da mesma forma, a aceleração de tração traseira exige um pé direito dosado milimetricamente para colocar a potência no solo de forma linear.</p>
            
            <p>Essa ausência de filtros cria pilotos de verdade. Aprender a controlar a transferência de peso do carro, regular a aderência no gogó e guiar no limite da física é um desafio gratificante e viciante que só o automobilismo raiz pode proporcionar.</p>
        `
    },
    {
        id: 9,
        title: "De Espectador a Piloto: Como é a Experiência de um Dia de Treino na F1600",
        category: "bastidores",
        categoryLabel: "Bastidores",
        date: "02 de Abril, 2026",
        author: "Equipe Old Monkey",
        image: "fotos/galeria-4.jpg",
        snippet: "Acompanhe o relato completo de um dia de pista: do briefing inicial à adrenalina pura de acelerar fundo na reta de Interlagos.",
        content: `
            <p>O que acontece no box de uma equipe campeã durante um dia de testes? Convidamos você a acompanhar o roteiro completo da experiência de aluguel de Fórmula 1600 com a Old Monkey Racing, vivenciando a rotina de um piloto de corrida profissional.</p>
            
            <h2>A Chegada e o Briefing Técnico</h2>
            <p>O dia começa cedo nos boxes de Interlagos ou Piracicaba. Sob o cheiro de combustível e pneus novos, o piloto se reúne com o engenheiro de pista e o chefe de equipe Edu Dias. Analisamos o traçado ideal no quadro tático, revisamos os pontos de frenagem, marchas recomendadas para cada curva e os procedimentos de segurança de pista (sinalização de bandeiras e saída de box).</p>
            
            <h2>A Vestimenta e a Preparação Mental</h2>
            <p>Em seguida, vem o ritual de segurança. O piloto veste a sub-veste antichama de algodão especial, coloca o macacão homologado pela FIA, calça as sapatilhas e luvas. O capacete é ajustado com o sistema de rádio para comunicação direta em tempo real. O protetor HANS (Head and Neck Support) é preso às tiras do capacete.</p>
            
            <h2>O Cockpit e a Entrada na Pista</h2>
            <p>O momento de entrar no carro é único. Você desliza para dentro do cockpit apertado, com as pernas esticadas até os pedais de alumínio. O mecânico aperta os cintos de segurança de 5 pontos, prendendo você firmemente ao chassi tubular. Edu Dias dá as últimas instruções pelo rádio: 'Motor ligado, embreagem no fundo, engata a primeira e pode sair devagar'.</p>
            
            <p>O motor Ford Rocam ruge logo atrás de sua cabeça. Ao cruzar o semáforo verde de saída do box e entrar na pista de Interlagos, a sensação de proximidade com o asfalto é incrível. Pneus aquecidos, pé embaixo na reta oposta e a adrenalina toma conta do seu corpo enquanto o vento passa rápido acima do capacete. Ao retornar ao box, a análise computadorizada da telemetria fecha com chave de ouro uma experiência inesquecível.</p>
        `
    }
];

// 2. DOM Elements Selection (Safe check for Blog page context)
document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Effect (for blog page consistency)
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Mobile Navigation Toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    if (mobileNavToggle && navMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : 'auto';
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Blog Page Render, Filter & Search Operations
    const blogGrid = document.getElementById('blog-grid-list');
    const categoryBtns = document.querySelectorAll('.blog-filter-btn');
    const searchInput = document.getElementById('blog-search-input');
    const searchBtn = document.getElementById('blog-search-btn');

    let activeCategory = 'todos';
    let searchQuery = '';

    // Render Posts in Grid
    function renderBlogGrid() {
        if (!blogGrid) return;
        
        blogGrid.innerHTML = '';
        
        // Filter posts
        const filteredPosts = BLOG_POSTS.filter(post => {
            const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
            const matchesSearch = searchQuery === '' || 
                post.title.toLowerCase().includes(searchQuery) || 
                post.snippet.toLowerCase().includes(searchQuery) ||
                post.categoryLabel.toLowerCase().includes(searchQuery);
            return matchesCategory && matchesSearch;
        });

        if (filteredPosts.length === 0) {
            blogGrid.innerHTML = `
                <div class="blog-no-results text-center">
                    <p>Nenhuma matéria encontrada para a sua busca.</p>
                    <button class="btn btn-secondary" id="blog-clear-search">Limpar Filtros</button>
                </div>
            `;
            const clearSearchBtn = document.getElementById('blog-clear-search');
            if (clearSearchBtn) {
                clearSearchBtn.addEventListener('click', () => {
                    if (searchInput) searchInput.value = '';
                    searchQuery = '';
                    activeCategory = 'todos';
                    categoryBtns.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.category === 'todos') btn.classList.add('active');
                    });
                    renderBlogGrid();
                });
            }
            return;
        }

        // Generate card items HTML
        filteredPosts.forEach(post => {
            const card = document.createElement('article');
            card.className = 'blog-card';
            card.innerHTML = `
                <div class="blog-card-img-wrapper">
                    <img src="${post.image}" alt="${post.title}" class="blog-card-img" onerror="this.src='assets/hero-bg.png'">
                    <span class="blog-card-category-tag">${post.categoryLabel}</span>
                </div>
                <div class="blog-card-body">
                    <div class="blog-card-meta">
                        <span>📅 ${post.date}</span>
                        <span>✍️ ${post.author}</span>
                    </div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-snippet">${post.snippet}</p>
                    <button class="btn-blog-read-more" data-id="${post.id}">
                        Ler Matéria <span class="arrow-right">→</span>
                    </button>
                </div>
            `;
            blogGrid.appendChild(card);
        });

        // Attach event listeners to "Ler Matéria" buttons
        const readBtns = blogGrid.querySelectorAll('.btn-blog-read-more');
        readBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const postId = parseInt(e.currentTarget.dataset.id);
                openArticleModal(postId);
            });
        });
    }

    // Category button filters click handling
    if (categoryBtns) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                activeCategory = e.currentTarget.dataset.category;
                renderBlogGrid();
            });
        });
    }

    // Search query keypress/button handling
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderBlogGrid();
        });
    }
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchQuery = searchInput.value.toLowerCase().trim();
            renderBlogGrid();
        });
    }

    // Initial load
    renderBlogGrid();
});

// 3. Dynamic Modal operations
function openArticleModal(postId) {
    const post = BLOG_POSTS.find(p => p.id === postId);
    if (!post) return;

    // Create Modal Element dynamically if it doesn't exist
    let modal = document.getElementById('blog-reading-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'blog-reading-modal';
        modal.className = 'blog-modal-overlay';
        modal.innerHTML = `
            <div class="blog-modal-container">
                <button class="blog-modal-close" id="blog-modal-close-btn">&times;</button>
                <div class="blog-modal-scroll-area">
                    <div class="blog-modal-header-visual">
                        <img id="blog-modal-img" src="" alt="">
                        <div class="blog-modal-title-overlay">
                            <span id="blog-modal-category-badge" class="blog-card-category-tag"></span>
                            <h1 id="blog-modal-title"></h1>
                            <div class="blog-modal-meta">
                                <span id="blog-modal-date"></span>
                                <span id="blog-modal-author"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="blog-modal-body">
                        <!-- Post content goes here -->
                        <div id="blog-modal-article-text" class="blog-modal-article-text"></div>
                        
                        <div class="blog-modal-footer-box">
                            <div class="blog-share-container">
                                <h4>Compartilhe esta Matéria:</h4>
                                <div class="blog-share-icons">
                                    <button class="share-icon-btn whatsapp" id="share-wpp" aria-label="Compartilhar no WhatsApp">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="wpp-social-icon-svg" style="width: 18px; height: 18px; fill: currentColor; vertical-align: middle; margin-right: 8px; display: inline-block;"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3.2 496l133-34.9c32.7 17.8 69.3 27.2 107.5 27.2 122.4 0 222-99.6 222-222 0-59.3-23.2-115-65.1-157.1zM223.9 453.8c-33.2 0-65.8-8.9-94.2-25.7l-6.7-4-79.8 20.9 21.3-77.8-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.7-186.6 184.7zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg> WhatsApp
                                    </button>
                                    <button class="share-icon-btn facebook" id="share-fb" aria-label="Compartilhar no Facebook">
                                        📘 Facebook
                                    </button>
                                    <button class="share-icon-btn copy" id="share-copy" aria-label="Copiar Link">
                                        🔗 Copiar Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Bind events
        document.getElementById('blog-modal-close-btn').addEventListener('click', closeArticleModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeArticleModal();
        });
    }

    // Populate Modal Content
    const modalImg = document.getElementById('blog-modal-img');
    const modalCategory = document.getElementById('blog-modal-category-badge');
    const modalTitle = document.getElementById('blog-modal-title');
    const modalDate = document.getElementById('blog-modal-date');
    const modalAuthor = document.getElementById('blog-modal-author');
    const modalText = document.getElementById('blog-modal-article-text');

    modalImg.src = post.image;
    modalImg.alt = post.title;
    modalCategory.textContent = post.categoryLabel;
    modalTitle.textContent = post.title;
    modalDate.textContent = `📅 ${post.date}`;
    modalAuthor.textContent = `✍️ Por ${post.author}`;
    modalText.innerHTML = post.content;

    // Social Sharing APIs
    const currentUrl = window.location.href.split('?')[0] + `?post=${post.id}`;
    const shareText = `Acelere seu conhecimento! Leia: "${post.title}" no Blog da Old Monkey Racing:`;

    // Bind sharing clicks
    document.getElementById('share-wpp').onclick = () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`, '_blank');
    };
    document.getElementById('share-fb').onclick = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
    };
    document.getElementById('share-copy').onclick = (e) => {
        navigator.clipboard.writeText(currentUrl).then(() => {
            const originalText = e.currentTarget.innerHTML;
            e.currentTarget.innerHTML = '✅ Copiado!';
            setTimeout(() => {
                e.currentTarget.innerHTML = originalText;
            }, 2000);
        });
    };

    // Show Modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock scrolling of parent page
}

function closeArticleModal() {
    const modal = document.getElementById('blog-reading-modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto'; // Re-enable parent scrolling
    }
}

// Close modal on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeArticleModal();
    }
});

// Check if a post parameter is provided in the URL to open it automatically (SEO / deep linking support)
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const postIdParam = urlParams.get('post');
    if (postIdParam) {
        const id = parseInt(postIdParam);
        if (!isNaN(id)) {
            // Wait slightly for DOM to settle
            setTimeout(() => {
                openArticleModal(id);
            }, 300);
        }
    }
});
