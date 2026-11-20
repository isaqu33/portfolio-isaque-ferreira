/* Conteúdo dos cases. Use caminhos relativos à pasta que contém index.html.
 * Deixe capa e video vazios até ter materiais reais. Não é necessário alterar
 * script.js para adicionar prints, vídeo ou um novo link de demonstração.
 */
window.PORTFOLIO_PROJETOS = {
  "custeio": {
    "titulo": "Custeio",
    "categoria": "Produto em desenvolvimento · Gestão para restaurantes",
    "resumo": "O Custeio conecta compras, estoque e vendas. A operação registra entradas por nota fiscal ou compra manual, associa produtos e complementos a fichas técnicas e acompanha o custo e a margem quando chega um pedido do PDV.",
    "implementacoes": [
      "Compras e estoque por loja, com importação de NF-e, compras manuais, contagens e histórico de movimentações.",
      "Fichas técnicas de produtos e complementos, preparos por lote e cálculo de custo e margem com fichas completas.",
      "Pedidos do PDV com baixa por receita, acompanhamento de pendências e opção de reprocessar após corrigir a ficha.",
      "Histórico de vendas, acompanhamento de promoções e registro de consumo interno, cortesias e avarias.",
      "Revisão de insumos com sugestões de IA para nomes e possíveis duplicidades."
    ],
    "participacao": "Desenvolvo o Custeio como produto Full Stack, da interface de operação à integração com o PDV e ao processamento de compras, pedidos e movimentações.",
    "limites": "Produto em desenvolvimento com código comercial privado. As capturas mostram uma loja fictícia em ambiente local. As sugestões de IA foram preparadas no banco de demonstração. O vídeo mostra a interface de revisão, sem uma chamada ao modelo durante a gravação.",
    "tecnologias": [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Bull",
      "Docker"
    ],
    "decisoesTecnicas": [
    {
      "titulo": "Filtros na URL e estado local para edição",
      "motivo": "Na tela de pedidos, loja, busca, página e filtros vêm da URL. Isso permite reabrir a consulta e usar a navegação do navegador. O Next.js carrega os dados no servidor com o acesso da sessão. Na tela de estoque, seleção, modais e progresso do envio ficam no estado local do React. Depois de salvar, router.refresh consulta de novo o estado da operação."
    },
    {
      "titulo": "Progresso da importação separado da tela de estoque",
      "motivo": "A captura de notas pode continuar depois da resposta inicial. A interface consulta um endpoint de status enquanto o processamento está em andamento e atualiza a tela quando termina. O worker executa o trabalho, enquanto a tela acompanha o progresso e exibe os resultados."
    },
      {
        "titulo": "Ingestão separada do processamento de pedidos",
        "motivo": "O webhook recebe o evento e encaminha o trabalho para um worker. Assim, a baixa de estoque e o cálculo de custo rodam fora da resposta ao PDV. A fila Bull com Redis registra o processamento e permite espaçar novas tentativas quando uma tarefa falha."
      },
      {
        "titulo": "Movimentações rastreáveis e baixas sem duplicação",
        "motivo": "Compras, vendas, estornos e ajustes geram movimentos associados à origem. A aplicação usa identificadores e índices únicos no MongoDB para impedir que a repetição de um evento aplique a mesma movimentação duas vezes. Um cancelamento pode reverter a baixa registrada."
      },
      {
        "titulo": "Ficha técnica como base do consumo e da margem",
        "motivo": "O pedido informa o que foi vendido. A ficha traduz produtos, complementos e preparos em quantidades de insumo. Se a ficha estiver incompleta, o pedido sinaliza a pendência. Depois da correção, o reprocessamento aplica a diferença entre o consumo esperado e o já registrado."
      },
      {
        "titulo": "IA para apoiar a revisão de insumos",
        "motivo": "Nomes vindos de notas podem variar por fornecedor. A análise usa o contexto do cadastro para sugerir ajustes e possíveis duplicidades, e a interface expõe os casos que precisam de confirmação. As movimentações de estoque continuam nas regras do domínio."
      },
      {
        "titulo": "Separação por organização e loja, com auditoria",
        "motivo": "Compras, receitas e movimentos precisam pertencer à operação certa. O servidor verifica o acesso à organização e à loja, e a trilha de auditoria ajuda a investigar ações relevantes. Logs e verificações de saúde facilitam diagnosticar falhas de integração ou de processamento."
      }
    ],
    "links": [
      {
        "titulo": "Conhecer o produto",
        "url": "https://www.usecusteio.com.br/"
      }
    ],
    "capa": "assets/projetos/custeio/02-painel.png?v=escuro",
    "capaAlt": "Painel do Custeio com indicadores da loja fictícia",
    "imagens": [
      {
        "src": "assets/projetos/custeio/02-painel.png?v=escuro",
        "alt": "Painel de indicadores da loja fictícia",
        "legenda": "Painel com estoque, CMV, margem e alertas da operação."
      },
      {
        "src": "assets/projetos/custeio/03-estoque.png?v=escuro",
        "alt": "Lista de insumos com saldo, custo médio e última compra",
        "legenda": "Estoque por insumo e histórico de custo."
      },
      {
        "src": "assets/projetos/custeio/04-estoque-a-confirmar-ia.png?v=escuro",
        "alt": "Insumos de nota fiscal pendentes de confirmação",
        "legenda": "Itens a confirmar na revisão de estoque."
      },
      {
        "src": "assets/projetos/custeio/05-ia-duplicados.png?v=escuro",
        "alt": "Sugestão de união de dois insumos no ambiente de exemplo",
        "legenda": "Sugestões de duplicidade carregadas para a demonstração."
      },
      {
        "src": "assets/projetos/custeio/08-notas.png?v=escuro",
        "alt": "Lista de notas fiscais de fornecedores fictícios",
        "legenda": "Notas fiscais e compras registradas."
      },
      {
        "src": "assets/projetos/custeio/11-ficha-tecnica.png?v=escuro",
        "alt": "Editor de ficha técnica com custo e margem do produto",
        "legenda": "Ficha técnica com cálculo de custo e margem."
      },
      {
        "src": "assets/projetos/custeio/13-pedidos.png?v=escuro",
        "alt": "Pedidos com baixa por ficha e pendências de cadastro",
        "legenda": "Pedidos do PDV e acompanhamento da baixa de estoque."
      },
      {
        "src": "assets/projetos/custeio/14-vendas.png?v=escuro",
        "alt": "Histórico de vendas com dados da loja fictícia",
        "legenda": "Histórico de vendas por período, canal e produto."
      },
      {
        "src": "assets/projetos/custeio/15-promocoes.png?v=escuro",
        "alt": "Comparação de vendas antes e depois de uma promoção fictícia",
        "legenda": "Comparativo de vendas da promoção de exemplo."
      },
      {
        "src": "assets/projetos/custeio/17-painel-celular.png?v=escuro",
        "alt": "Painel do Custeio no celular",
        "legenda": "Painel da loja na versão móvel."
      }
    ],
    "videos": [
      {
        "src": "assets/projetos/custeio/01-visao-geral-painel.mp4?v=escuro",
        "titulo": "Visão geral · Painel, estoque, compras e pedidos",
        "poster": "assets/projetos/custeio/02-painel.png?v=escuro"
      },
      {
        "src": "assets/projetos/custeio/02-ia-no-estoque.mp4?v=escuro",
        "titulo": "IA no estoque · Sugestões de exemplo para revisão",
        "poster": "assets/projetos/custeio/04-estoque-a-confirmar-ia.png?v=escuro"
      },
      {
        "src": "assets/projetos/custeio/03-ficha-tecnica-custo-margem.mp4?v=escuro",
        "titulo": "Ficha técnica · Alterar insumos e conferir custo e margem",
        "poster": "assets/projetos/custeio/11-ficha-tecnica.png?v=escuro"
      },
      {
        "src": "assets/projetos/custeio/04-vendas-e-promocoes.mp4?v=escuro",
        "titulo": "Vendas · Promoções e consumo interno",
        "poster": "assets/projetos/custeio/14-vendas.png?v=escuro"
      }
    ]
  },
  "agregador-links": {
    "titulo": "FaceLink",
    "categoria": "Aplicação Full Stack · Página de links e analytics",
    "resumo": "Crie uma ou mais páginas públicas por conta, reúna links e redes sociais em um endereço /@usuario e acompanhe visitas e cliques em tempo real. O painel mostra a prévia da página enquanto você ajusta a aparência.",
    "implementacoes": [
      "Painel para criar e ordenar links, personalizar temas, fontes, fundos e botões, e alternar entre páginas da mesma conta.",
      "Página pública com links agendados ou com senha, players, formulário de e-mail, botão Pix e compartilhamento por QR Code.",
      "Analytics com visitas, cliques, taxa de cliques, dispositivos e origens. Contatos e métricas podem ser exportados em CSV.",
      "API documentada no Swagger, logs estruturados com identificador de requisição e verificações de saúde."
    ],
    "participacao": "Trabalhei no painel e na página pública em Next.js, na API NestJS e na integração entre autenticação, persistência e analytics.",
    "limites": "As capturas e os vídeos mostram a aplicação rodando localmente com dados fictícios. O gráfico usa um dia de tráfego de exemplo. A distribuição de eventos entre instâncias requer Redis configurado.",
    "tecnologias": [
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Redis",
      "Auth.js",
      "SSE",
      "Docker"
    ],
    "decisoesTecnicas": [
    {
      "titulo": "React Query no lugar do Redux persistido para os dados da API",
      "motivo": "O perfil e a lista de links já têm fonte no servidor. Antes, Redux Toolkit e redux-persist mantinham uma cópia no navegador. A refatoração concentrou as leituras no React Query, com cache separado por página. Após criar ou editar um link, o painel invalida a consulta e busca a versão atualizada sem recarregar a página. O cache é limpo ao sair."
    },
    {
      "titulo": "MobX para a prévia e Context para a página ativa",
      "motivo": "O MobX já existia antes da refatoração e ficou responsável pelo rascunho de aparência. A prévia acompanha cores, fontes e fundos imediatamente. A API recebe as alterações quando a pessoa salva. O React Context informa qual página está sendo editada, e useState cuida de controles locais, como modais."
    },
      {
        "titulo": "Página pública no servidor e prévia com o mesmo componente",
        "motivo": "O Next.js entrega HTML e metadados de compartilhamento por perfil, úteis quando o endereço é aberto por um buscador ou por uma rede social. O mesmo componente renderiza a prévia e a página pública, reduzindo diferenças entre o que se edita e o que o visitante vê."
      },
      {
        "titulo": "Auth.js e proxy com rotas permitidas",
        "motivo": "O proxy injeta o token da API no servidor e encaminha apenas rotas autorizadas. Assim o JavaScript da página não precisa ler o token. A API valida o JWT e a propriedade dos recursos, inclusive na edição de links e páginas."
      },
      {
        "titulo": "SSE para atualizar o painel e Redis para distribuir os eventos",
        "motivo": "O painel precisa receber avisos do servidor em uma direção. A API grava a visita ou clique no MongoDB e publica um aviso via Redis. A instância que mantém a conexão SSE avisa o painel, que busca os totais atualizados. A reconexão também dispara uma atualização. O modo em memória atende uma única instância."
      },
      {
        "titulo": "Operações atômicas para proteger os dados sob concorrência",
        "motivo": "O rate limit verifica e incrementa o contador em uma operação no Redis, evitando que uma rajada ultrapasse o limite por causa de requisições simultâneas. A unicidade do endereço público fica no banco. Ao reordenar links, a API recusa uma lista cujo conjunto de itens já mudou, evitando gravar uma ordem incompleta."
      },
      {
        "titulo": "MongoDB para dados do produto e armazenamento de objetos para mídia",
        "motivo": "Perfis, links, contatos e eventos são consultados e atualizados pela API. Imagens e vídeos ficam no armazenamento compatível com Azure Blob, separados dos registros. O Azurite permite exercitar esse fluxo no ambiente local."
      },
      {
        "titulo": "Testes em camadas para cobrir regras e integrações",
        "motivo": "Testes unitários isolam regras de link e aparência. Testes de integração usam MongoDB e Redis para reproduzir problemas de concorrência. Playwright cobre fluxos do navegador, como criar um link e abrir a página pública. A integração contínua verifica o código e executa as suítes configuradas em cada repositório."
      }
    ],
    "links": [
      {
        "titulo": "Código do front-end",
        "url": "https://github.com/isaqu33/Agregador_Link_Front"
      },
      {
        "titulo": "Código da API",
        "url": "https://github.com/isaqu33/Agregador_Link_api"
      }
    ],
    "capa": "assets/projetos/agregador-links/03-painel-links-escuro.png",
    "capaAlt": "FaceLink com painel de links e prévia do perfil público no celular",
    "imagens": [
      {
        "src": "assets/projetos/agregador-links/03-painel-links-escuro.png",
        "alt": "Painel de links com prévia do perfil no celular",
        "legenda": "Painel de links e prévia lado a lado."
      },
      {
        "src": "assets/projetos/agregador-links/04-aparencia-escuro.png",
        "alt": "Editor de aparência com temas e opções de fundo",
        "legenda": "Aparência: temas, fundo, fonte e botões."
      },
      {
        "src": "assets/projetos/agregador-links/05-perfil-escuro.png",
        "alt": "Configurações do perfil público e compartilhamento",
        "legenda": "Perfil público, redes sociais e QR Code."
      },
      {
        "src": "assets/projetos/agregador-links/06-contatos-escuro.png",
        "alt": "Lista de contatos fictícios coletados pelo formulário",
        "legenda": "Contatos coletados e opção de exportar em CSV."
      },
      {
        "src": "assets/projetos/agregador-links/07-analytics-escuro.png",
        "alt": "Painel com visitas, cliques e distribuição por dispositivo",
        "legenda": "Analytics: visitas, cliques, dispositivos e origens."
      },
      {
        "src": "assets/projetos/agregador-links/10-pagina-publica-celular.png",
        "alt": "Página pública do perfil fictício no celular",
        "legenda": "Página pública vista no celular."
      },
      {
        "src": "assets/projetos/agregador-links/12-pagina-publica-desktop.png",
        "alt": "Página pública do perfil fictício em uma tela maior",
        "legenda": "Página pública vista no computador."
      },
      {
        "src": "assets/projetos/agregador-links/13-api-swagger.png",
        "alt": "Documentação interativa dos endpoints do FaceLink",
        "legenda": "Contrato da API documentado no Swagger."
      }
    ],
    "videos": [
      {
        "src": "assets/projetos/agregador-links/01-painel-criando-link.mp4",
        "titulo": "Painel · Criar um link e conferir a prévia",
        "poster": "assets/projetos/agregador-links/03-painel-links-escuro.png"
      },
      {
        "src": "assets/projetos/agregador-links/02-aparencia-temas.mp4",
        "titulo": "Aparência · Ajustar e salvar um tema",
        "poster": "assets/projetos/agregador-links/04-aparencia-escuro.png"
      },
      {
        "src": "assets/projetos/agregador-links/03-analytics-tempo-real.mp4",
        "titulo": "Analytics · Receber visitas e cliques ao vivo",
        "poster": "assets/projetos/agregador-links/07-analytics-escuro.png"
      },
      {
        "src": "assets/projetos/agregador-links/04-pagina-publica-celular.mp4",
        "titulo": "Página pública · Navegar e abrir o botão Pix",
        "poster": "assets/projetos/agregador-links/10-pagina-publica-celular.png"
      }
    ]
  },
  "clima-cep": {
    "titulo": "Plin · Clima e CEP",
    "categoria": "Desafio técnico · Front-end e APIs",
    "resumo": "Consulte clima, previsão e qualidade do ar, explore o mapa meteorológico e encontre endereços pelo CEP.",
    "implementacoes": [
      "Clima atual, previsão, qualidade do ar e mapa meteorológico com camadas selecionáveis.",
      "Busca de cidades com ou sem geolocalização, favoritos e troca de unidades.",
      "Busca por CEP ou endereço com dados do ViaCEP.",
      "Interface responsiva com temas claro, escuro e automático e formulário com PDF opcional de até 2 MB."
    ],
    "participacao": "Desenvolvi a primeira versão como desafio técnico e refatorei a aplicação para o portfólio, ampliando as consultas de clima e CEP e a experiência no celular.",
    "limites": "As mídias mostram o aplicativo rodando localmente. Os dados de clima e CEP retratam o momento da captura. As variações de céu usam dados de exemplo e o formulário simula o envio.",
    "tecnologias": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zod",
      "Leaflet"
    ],
    "decisoesTecnicas": [
      {
        "titulo": "Chave do OpenWeather no servidor",
        "motivo": "As rotas do Next.js intermediam clima, geocodificação e camadas do mapa. Elas mantêm a chave no servidor e concentram a validação com Zod e os limites de requisições por IP."
      },
      {
        "titulo": "Cache por localização e conversão no navegador",
        "motivo": "A API consulta o clima em unidades métricas. Converter os valores no navegador permite alternar unidades sem buscar a previsão novamente. A geocodificação tem um prazo de cache maior, pois a localização das cidades muda com menos frequência."
      },
      {
        "titulo": "TanStack Query e preferências locais",
        "motivo": "O TanStack Query mantém as consultas de clima em cache por coordenadas e controla os estados de carregamento e erro. Favoritos e unidades ficam no armazenamento local para serem lembrados sem exigir cadastro."
      },
      {
        "titulo": "Busca de cidade sem depender do GPS",
        "motivo": "A busca funciona quando a geolocalização está indisponível ou quando o usuário quer consultar outra cidade. A interface aguarda uma pausa na digitação e cancela a solicitação anterior. A API remove resultados duplicados."
      },
      {
        "titulo": "Horários no fuso da cidade",
        "motivo": "A previsão por hora e os horários de nascer e pôr do sol usam o deslocamento informado pelo OpenWeather para a cidade consultada."
      },
      {
        "titulo": "Leaflet e camadas de mapa servidas pelo Next.js",
        "motivo": "O Leaflet cuida da navegação no mapa. Uma rota interna valida a camada e serve os tiles do OpenWeather com cache, preservando a chave no servidor."
      },
      {
        "titulo": "Testes de regras e fluxos de navegação",
        "motivo": "Vitest cobre regras de formatação do clima, unidades, CEP e limite de requisições. O projeto inclui cenários de navegador com Playwright para clima, CEP e navegação."
      }
    ],
    "links": [
      {
        "titulo": "Ver código no GitHub",
        "url": "https://github.com/isaqu33/plinchallenge"
      }
    ],
    "capa": "assets/projetos/plin/02-clima.png",
    "capaAlt": "Clima atual com temperatura, vento e umidade",
    "imagens": [
      {
        "src": "assets/projetos/plin/01-boas-vindas.png",
        "alt": "Tela inicial e busca por cidade",
        "legenda": "Tela inicial e busca por cidade."
      },
      {
        "src": "assets/projetos/plin/02-clima.png",
        "alt": "Clima atual com temperatura, vento e umidade",
        "legenda": "Clima atual com temperatura, vento e umidade."
      },
      {
        "src": "assets/projetos/plin/03-previsao-horas-e-dias.png",
        "alt": "Previsão por hora e por dia",
        "legenda": "Previsão por hora e por dia."
      },
      {
        "src": "assets/projetos/plin/04-qualidade-do-ar-e-sol.png",
        "alt": "Qualidade do ar e horários do sol",
        "legenda": "Qualidade do ar e horários do sol."
      },
      {
        "src": "assets/projetos/plin/05-mapa-do-tempo.png",
        "alt": "Mapa meteorológico e camada de temperatura",
        "legenda": "Mapa meteorológico e camada de temperatura."
      },
      {
        "src": "assets/projetos/plin/06-busca-de-cidade.png",
        "alt": "Resultados da busca por cidade",
        "legenda": "Resultados da busca por cidade."
      },
      {
        "src": "assets/projetos/plin/07-favoritos-e-fahrenheit.png",
        "alt": "Favoritos e temperatura em Fahrenheit",
        "legenda": "Favoritos e temperatura em Fahrenheit."
      },
      {
        "src": "assets/projetos/plin/08-cep-por-cep.png",
        "alt": "Consulta por CEP",
        "legenda": "Consulta por CEP."
      },
      {
        "src": "assets/projetos/plin/09-cep-por-endereco.png",
        "alt": "Consulta por estado, cidade e rua",
        "legenda": "Consulta por estado, cidade e rua."
      },
      {
        "src": "assets/projetos/plin/10-contato.png",
        "alt": "Contato com dados fictícios e envio simulado",
        "legenda": "Contato com dados fictícios e envio simulado."
      },
      {
        "src": "assets/projetos/plin/11-sobre-o-projeto.png",
        "alt": "Evolução do desafio",
        "legenda": "Evolução do desafio."
      },
      {
        "src": "assets/projetos/plin/12-celular-clima.png",
        "alt": "Painel de clima no celular",
        "legenda": "Painel de clima no celular."
      },
      {
        "src": "assets/projetos/plin/13-celular-boas-vindas.png",
        "alt": "Tela inicial no celular",
        "legenda": "Tela inicial no celular."
      },
      {
        "src": "assets/projetos/plin/14-temas-claro-e-escuro.png",
        "alt": "Comparação entre temas claro e escuro",
        "legenda": "Comparação entre temas claro e escuro."
      },
      {
        "src": "assets/projetos/plin/15-ceus-dinamicos.png",
        "alt": "Variações de céu com dados de exemplo",
        "legenda": "Variações de céu com dados de exemplo."
      },
      {
        "src": "assets/projetos/plin/16-api-protegida.png",
        "alt": "Validação e limite de requisições na API local",
        "legenda": "Validação e limite de requisições na API local."
      },
      {
        "src": "assets/projetos/plin/17-testes.png",
        "alt": "Resultado de 33 testes unitários registrado na captura",
        "legenda": "Resultado de 33 testes unitários registrado na captura."
      },
      {
        "src": "assets/projetos/plin/18-arquitetura-fluxo-do-clima.png",
        "alt": "Diagrama das consultas, cache e camadas do mapa",
        "legenda": "Diagrama das consultas, cache e camadas do mapa."
      }
    ],
    "videos": [
      {
        "src": "assets/projetos/plin/01-visao-geral.mp4",
        "poster": "assets/projetos/plin/02-clima.png",
        "titulo": "Clima e camadas do mapa"
      },
      {
        "src": "assets/projetos/plin/02-busca-favoritos-unidades.mp4",
        "poster": "assets/projetos/plin/07-favoritos-e-fahrenheit.png",
        "titulo": "Busca de cidades, favoritos e unidades"
      },
      {
        "src": "assets/projetos/plin/03-cep.mp4",
        "poster": "assets/projetos/plin/09-cep-por-endereco.png",
        "titulo": "Busca por CEP e por endereço"
      },
      {
        "src": "assets/projetos/plin/04-temas-claro-escuro.mp4",
        "poster": "assets/projetos/plin/14-temas-claro-e-escuro.png",
        "titulo": "Alternância entre os temas claro e escuro"
      },
      {
        "src": "assets/projetos/plin/05-celular.mp4",
        "poster": "assets/projetos/plin/12-celular-clima.png",
        "titulo": "Clima e consulta de CEP no celular"
      }
    ]
  },
  "localidades": {
    titulo: "Seleção de localidades por etapas",
    categoria: "Desafio técnico · Interface interativa",
    resumo: "Fluxo de seleção de país, estado e cidade, com opções dependentes e apresentação do resultado.",
    implementacoes: [
      "Componentes com Next.js, React, TypeScript e Material UI.",
      "Gerenciamento de estado para manter país, estado e cidade consistentes.",
      "Navegação por etapas com validação das escolhas antes de avançar."
    ],
    participacao: "Implementação presente em repositório próprio, com commits associados à minha conta. O projeto é apresentado como desafio técnico, sem atribuição de resultado comercial à IRIS.",
    limites: "Os dados vêm de um arquivo JSON local. Este projeto não demonstra integração com uma API remota nem corresponde, por si só, a um sistema entregue a uma empresa.",
    tecnologias: ["Next.js", "React", "TypeScript", "Material UI"],
    links: [{ titulo: "Ver código no GitHub", url: "https://github.com/isaqu33/teste_Iris" }],
    capa: "",
    capaAlt: "",
    imagens: [],
    video: "",
    videoPoster: "",
    legendaVideo: ""
  },
  "cuepoint": {
    "titulo": "Cuepoint",
    "categoria": "Aplicação Full Stack · Biblioteca e processamento de mídia",
    "resumo": "Organize áudio e vídeo, envie arquivos em lote, acompanhe o processamento e revise transcrições com marcações de tempo. Compartilhe o resultado por links temporários.",
    "implementacoes": [
      "Biblioteca com coleções, subcoleções, espaços de trabalho e limites de uso.",
      "Envio direto ao storage, processamento assíncrono com progresso e reprocessamento de falhas.",
      "Revisão de áudio e vídeo com trechos clicáveis, edição e exportação em TXT, SRT e VTT.",
      "Compartilhamento temporário com revogação e histórico de ações por arquivo."
    ],
    "participacao": "Evoluí o App Records para o Cuepoint, refatorando o fluxo de processamento e a organização do código, redesenhando a biblioteca e registrando as escolhas de arquitetura em ADRs.",
    "limites": "Demonstração local com acervo fictício e voz sintética. As transcrições foram geradas pelo sistema e podem exigir revisão. As medições de capacidade são de uma máquina de desenvolvimento e dependem do hardware e do modelo utilizado. Os workflows de CI/CD aguardam execução no GitHub. No celular, o player aberto ainda exige um ajuste de layout.",
    "tecnologias": [
      "SvelteKit",
      "TypeScript",
      "PostgreSQL · Prisma",
      "Redis · Bull",
      "S3 · MinIO",
      "FFmpeg · whisper.cpp",
      "SSE · Socket.IO",
      "Docker"
    ],
    "decisoesTecnicas": [
      {
        "titulo": "SvelteKit e módulos de negócio sobre a base existente",
        "motivo": "O rebranding preserva SvelteKit e TypeScript. Processamento, eventos, espaços e revisão têm módulos próprios no servidor. As stores writable do Svelte coordenam estados de interface, como o painel de edição. O PostgreSQL guarda o estado dos arquivos e dos resultados para que o navegador possa recuperá-lo."
      },
      {
        "titulo": "Worker separado para o trabalho intensivo em CPU",
        "motivo": "O servidor web valida e enfileira o pedido, respondendo com 202 e o endereço para consultar o job. Um worker executa FFmpeg e whisper.cpp, aguardando o processamento e a gravação do resultado. Separar os processos permite ajustar a quantidade de workers sem aumentar a quantidade de servidores web."
      },
      {
        "titulo": "Manter Bull e Redis com critérios para evoluir",
        "motivo": "O projeto mantém Bull com tentativas e backoff exponencial. O relatório local identifica a CPU da transcrição como gargalo e registra saturação ao aumentar os workers. O ADR compara Bull e BullMQ e estabelece gatilhos para migrar, como fluxos dependentes e limites por espaço."
      },
      {
        "titulo": "Idempotência e reconciliação para recuperar trabalhos",
        "motivo": "A API aceita Idempotency-Key e a fila usa um identificador por arquivo para evitar criar outro trabalho ativo para o mesmo pedido. Estado e erro ficam persistidos. Após falhas, o usuário pode reprocessar. Uma rotina reconcilia arquivos que ficaram sem job vivo. O material inclui um ensaio local que interrompe o worker e verifica a conclusão com uma transcrição."
      },
      {
        "titulo": "Envio direto e multipart para arquivos maiores",
        "motivo": "O navegador envia mídia ao storage compatível com S3 usando URLs pré-assinadas. Arquivos acima de 64 MiB usam partes, com concorrência e novas tentativas por parte. Isso reduz o tráfego e a memória do servidor web. Após o envio, o servidor verifica o objeto e o tamanho antes de registrar o arquivo."
      },
      {
        "titulo": "SSE por job e Socket.IO como aviso de atualização",
        "motivo": "A API SSE acompanha um job e envia um snapshot ao conectar ou reconectar. O feed global da tela Processamento usa Socket.IO para avisar que os dados mudaram, e a tela busca novamente o estado no servidor. A revisão apresenta os trechos após a conclusão."
      },
      {
        "titulo": "Eventos versionados e relay de publicação",
        "motivo": "Eventos de domínio conectam processamento, notificações, métricas e histórico. Eventos duráveis são registrados no banco. Um relay tenta republicar os registros que ficaram sem confirmação de publicação. Esse desenho recupera falhas entre registrar e publicar. Redis Pub/Sub exige atenção à disponibilidade dos assinantes, pois publicar no tópico não confirma a execução de cada consumidor."
      },
      {
        "titulo": "PostgreSQL e escopo central por espaço de trabalho",
        "motivo": "O Prisma modela as relações entre arquivo, coleção, transcrição e histórico. O contexto da requisição leva o espaço de trabalho a uma extensão que filtra os modelos escopados. Recursos relacionados usam guardas de acesso. Operadores e processos de sistema têm caminhos próprios. Limites de arquivos e bytes são conferidos no servidor."
      },
      {
        "titulo": "Links temporários com revogação e um limite de storage",
        "motivo": "O banco guarda o hash do token de compartilhamento. A aplicação confere validade e revogação a cada requisição de mídia pelo link, incluindo requisições parciais para o player. O storage desta versão permite leitura pela URL do objeto. Tornar o bucket privado é a evolução necessária para controlar também esse acesso direto."
      },
      {
        "titulo": "Correlação, ensaios de recuperação e entrega reproduzível",
        "motivo": "IDs de requisição e traceparent acompanham o pedido até os logs do worker. Métricas e alertas cobrem fila, falhas e eventos pendentes. Os workflows descrevem CI, imagens versionadas e promoção com rollback, mas aguardam execução no GitHub. As capturas registram testes locais e restauração do PostgreSQL. A restauração dos objetos do storage segue pendente de medição."
      }
    ],
    "links": [
      {
        "titulo": "Ver código no GitHub",
        "url": "https://github.com/isaqu33/Cuepoint"
      }
    ],
    "capa": "assets/projetos/cuepoint/02-biblioteca.png",
    "capaAlt": "Biblioteca com coleções, arquivos e estados de processamento",
    "imagens": [
      {
        "src": "assets/projetos/cuepoint/01-login.png",
        "alt": "Tela de acesso ao Cuepoint",
        "legenda": "Tela de acesso ao Cuepoint."
      },
      {
        "src": "assets/projetos/cuepoint/02-biblioteca.png",
        "alt": "Biblioteca com coleções, arquivos e estados de processamento",
        "legenda": "Biblioteca com coleções, arquivos e estados de processamento."
      },
      {
        "src": "assets/projetos/cuepoint/03-colecao.png",
        "alt": "Coleção com subcoleções e arquivos de mídia",
        "legenda": "Coleção com subcoleções e arquivos de mídia."
      },
      {
        "src": "assets/projetos/cuepoint/04-revisao-transcricao.png",
        "alt": "Revisão da transcrição com trechos clicáveis e exportação",
        "legenda": "Revisão da transcrição com trechos clicáveis e exportação."
      },
      {
        "src": "assets/projetos/cuepoint/05-revisao-historico.png",
        "alt": "Histórico das ações realizadas no arquivo",
        "legenda": "Histórico das ações realizadas no arquivo."
      },
      {
        "src": "assets/projetos/cuepoint/06-revisao-edicao.png",
        "alt": "Edição dos trechos e de suas marcações de tempo",
        "legenda": "Edição dos trechos e de suas marcações de tempo."
      },
      {
        "src": "assets/projetos/cuepoint/07-revisao-video.png",
        "alt": "Revisão de vídeo com transcrição vinculada ao player",
        "legenda": "Revisão de vídeo com transcrição vinculada ao player."
      },
      {
        "src": "assets/projetos/cuepoint/08-processamento-ao-vivo.png",
        "alt": "Fila com processamento e progresso ao vivo",
        "legenda": "Fila com processamento e progresso ao vivo."
      },
      {
        "src": "assets/projetos/cuepoint/09-processamento-concluido.png",
        "alt": "Resultado do lote com arquivos prontos e uma falha recuperável",
        "legenda": "Resultado do lote com arquivos prontos e uma falha recuperável."
      },
      {
        "src": "assets/projetos/cuepoint/10-arquivos.png",
        "alt": "Lista administrativa de arquivos e suas ações",
        "legenda": "Lista administrativa de arquivos e suas ações."
      },
      {
        "src": "assets/projetos/cuepoint/11-envio-em-lote.png",
        "alt": "Envio em lote de áudio e vídeo",
        "legenda": "Envio em lote de áudio e vídeo."
      },
      {
        "src": "assets/projetos/cuepoint/12-compartilhar.png",
        "alt": "Criação e revogação de links temporários",
        "legenda": "Criação e revogação de links temporários."
      },
      {
        "src": "assets/projetos/cuepoint/13-link-publico.png",
        "alt": "Página de compartilhamento para o visitante",
        "legenda": "Página de compartilhamento para o visitante."
      },
      {
        "src": "assets/projetos/cuepoint/14-falha-e-reprocesso.png",
        "alt": "Falha de transcrição e ação para reprocessar",
        "legenda": "Falha de transcrição e ação para reprocessar."
      },
      {
        "src": "assets/projetos/cuepoint/15-espacos.png",
        "alt": "Espaços de trabalho e limites de uso",
        "legenda": "Espaços de trabalho e limites de uso."
      },
      {
        "src": "assets/projetos/cuepoint/16-celular-biblioteca.png",
        "alt": "Biblioteca no celular",
        "legenda": "Biblioteca no celular."
      },
      {
        "src": "assets/projetos/cuepoint/17-celular-revisao.png",
        "alt": "Revisão no celular",
        "legenda": "Revisão no celular."
      },
      {
        "src": "assets/projetos/cuepoint/18-temas-claro-e-escuro.png",
        "alt": "Comparação dos temas claro e escuro",
        "legenda": "Comparação dos temas claro e escuro."
      },
      {
        "src": "assets/projetos/cuepoint/19-testes-unitarios.png",
        "alt": "Registro de execução de 131 testes unitários",
        "legenda": "Registro de execução de 131 testes unitários."
      },
      {
        "src": "assets/projetos/cuepoint/20-testes-e2e.png",
        "alt": "Registro de execução de 47 testes de navegador",
        "legenda": "Registro de execução de 47 testes de navegador."
      },
      {
        "src": "assets/projetos/cuepoint/21-queda-do-worker-e-backup.png",
        "alt": "Registros do ensaio de queda do worker e restauração do banco",
        "legenda": "Registros do ensaio de queda do worker e restauração do banco."
      },
      {
        "src": "assets/projetos/cuepoint/22-arquitetura-fluxo-da-transcricao.png",
        "alt": "Diagrama do pedido, fila, processamento e atualização do estado",
        "legenda": "Diagrama do pedido, fila, processamento e atualização do estado."
      },
      {
        "src": "assets/projetos/cuepoint/23-cinco-padroes.png",
        "alt": "Padrões de comunicação aplicados ao fluxo de mídia",
        "legenda": "Padrões de comunicação aplicados ao fluxo de mídia."
      },
      {
        "src": "assets/projetos/cuepoint/24-capacidade.png",
        "alt": "Ensaio local de capacidade em máquina de desenvolvimento",
        "legenda": "Ensaio local de capacidade em máquina de desenvolvimento."
      }
    ],
    "videos": [
      {
        "src": "assets/projetos/cuepoint/01-processamento-ao-vivo.mp4",
        "titulo": "Do pedido de transcrição ao progresso e à revisão",
        "poster": "assets/projetos/cuepoint/08-processamento-ao-vivo.png"
      },
      {
        "src": "assets/projetos/cuepoint/02-envio-em-lote.mp4",
        "titulo": "Envio direto em lote com progresso por arquivo",
        "poster": "assets/projetos/cuepoint/11-envio-em-lote.png"
      },
      {
        "src": "assets/projetos/cuepoint/03-falha-e-recuperacao.mp4",
        "titulo": "Falha de transcrição e recuperação com nova mídia",
        "poster": "assets/projetos/cuepoint/14-falha-e-reprocesso.png"
      },
      {
        "src": "assets/projetos/cuepoint/04-compartilhar-link.mp4",
        "titulo": "Compartilhamento por link e revogação do acesso",
        "poster": "assets/projetos/cuepoint/12-compartilhar.png"
      },
      {
        "src": "assets/projetos/cuepoint/05-revisao-edicao-exportar.mp4",
        "titulo": "Revisão, edição de trechos e opções de exportação",
        "poster": "assets/projetos/cuepoint/06-revisao-edicao.png"
      },
      {
        "src": "assets/projetos/cuepoint/06-temas-claro-escuro.mp4",
        "titulo": "Troca de tema na biblioteca, revisão e processamento",
        "poster": "assets/projetos/cuepoint/18-temas-claro-e-escuro.png"
      },
      {
        "src": "assets/projetos/cuepoint/07-celular.mp4",
        "titulo": "Biblioteca e revisão no celular",
        "poster": "assets/projetos/cuepoint/16-celular-biblioteca.png"
      }
    ]
  },
  "kairoz": {
    "titulo": "Kairoz Media Studio",
    "categoria": "Aplicação Full Stack · Produção de criativos",
    "resumo": "Estúdio para gestores de tráfego e criadores organizarem imagens e vídeos por cliente, ajustarem o enquadramento e exportarem versões para diferentes formatos de campanha.",
    "implementacoes": [
      "Biblioteca privada com pastas por cliente e importação de imagens e vídeos.",
      "Prévia de enquadramento em 9:16, 4:5, 1:1 e 16:9, com recorte, fundo sólido ou desfocado.",
      "Exportação em lote com acompanhamento de status, downloads individuais e ZIP.",
      "Extensão do Chrome que identifica mídias compatíveis no post aberto e envia o item selecionado para a biblioteca."
    ],
    "participacao": "Desenvolvi o estúdio, a integração com a extensão e o fluxo de processamento e exportação dos criativos.",
    "limites": "As capturas mostram um lote local de três imagens fictícias convertido em nove variações. O segundo vídeo registra o envio de uma imagem do Instagram pela extensão para o estúdio local, com o conteúdo do post ocultado.",
    "tecnologias": [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Chrome Extension",
      "Sharp",
      "FFmpeg",
      "Docker"
    ],
    "decisoesTecnicas": [
    {
      "titulo": "Estado local do React para as opções do estúdio",
      "motivo": "Seleção de mídias, formatos de exportação e enquadramento pertencem ao mesmo espaço de trabalho. O componente do estúdio usa useState para coordenar esses controles e alimentar a prévia. A biblioteca e o status das exportações são consultados na API. Enquanto há trabalho pendente, a tela consulta o andamento periodicamente."
    },
    {
      "titulo": "Armazenamento da extensão separado por duração",
      "motivo": "A seleção de um post precisa chegar à aba de transferência mesmo quando o popup fecha. A extensão guarda a tarefa em chrome.storage.session e a remove ao assumir o envio. A conexão com o estúdio e a preferência de tema usam chrome.storage.local, pois precisam continuar disponíveis quando a extensão é reaberta."
    },
      {
        "titulo": "Next.js e TypeScript para a interface e a API",
        "motivo": "O estúdio precisa manter biblioteca, prévia e exportações alinhadas com as regras do servidor. A mesma aplicação reúne telas e rotas de API, e os tipos ajudam a manter consistentes os formatos de saída e os dados de cada lote."
      },
      {
        "titulo": "Extensão Chrome para trabalhar na aba do post",
        "motivo": "A extensão identifica os itens na aba que a pessoa já está usando. Isso permite escolher uma mídia do post sem começar por um upload manual. A transferência usa uma autorização própria do estúdio. A disponibilidade depende da mídia que o Instagram entrega à sessão."
      },
      {
        "titulo": "MongoDB para metadados e arquivos em armazenamento separado",
        "motivo": "Pastas, donos, referências de mídia e histórico precisam de consulta e atualização. Originais, miniaturas e exportações ficam em volume local ou armazenamento de objetos privado, conforme o ambiente. Isso separa as consultas dos arquivos grandes. Na configuração online da extensão, links assinados permitem enviar o arquivo direto ao armazenamento."
      },
      {
        "titulo": "Sharp e FFmpeg para gerar as versões",
        "motivo": "Sharp cuida de redimensionar e recortar imagens. FFmpeg prepara o MP4 e reúne as faixas de vídeo e áudio quando o fluxo as fornece separadas. O servidor produz as variações de forma consistente e preserva o original na biblioteca."
      },
      {
        "titulo": "Fila sequencial de exportação no ambiente local",
        "motivo": "Conversões em lote podem ocupar CPU e memória. A fila limita o trabalho simultâneo e registra o status para a interface acompanhar. A fila atual roda em memória por instância. Após reinício, lotes interrompidos são marcados como falhos para nova tentativa."
      }
    ],
    "links": [
      {
        "titulo": "Visitar a página do Kairoz",
        "url": "https://kairoz-media-studio-site.vercel.app/"
      }
    ],
    "capa": "assets/projetos/kairoz/kairoz-importacao.jpg",
    "capaAlt": "Tela do Kairoz com três criativos importados e prévia de enquadramento",
    "imagens": [
      {
        "src": "assets/projetos/kairoz/kairoz-biblioteca.jpg",
        "alt": "Biblioteca com três arquivos fictícios em uma pasta de cliente",
        "legenda": "Biblioteca organizada por pasta de cliente."
      },
      {
        "src": "assets/projetos/kairoz/kairoz-enquadramento.jpg",
        "alt": "Configuração de três formatos de saída e fundo desfocado",
        "legenda": "Configuração de formatos e enquadramento do lote."
      },
      {
        "src": "assets/projetos/kairoz/kairoz-exportacao.jpg",
        "alt": "Lote de nove variações concluído com botão para baixar o ZIP",
        "legenda": "Lote concluído com nove variações disponíveis."
      },
      {
        "src": "assets/projetos/kairoz/kairoz-envio.jpg",
        "alt": "Extensão confirma que um arquivo está disponível na biblioteca",
        "legenda": "Confirmação do envio pela extensão, com o identificador do post ocultado."
      }
    ],
    "videos": [
      {
        "src": "assets/projetos/kairoz/kairoz-fluxo.mp4",
        "titulo": "Estúdio · Da importação ao ZIP",
        "poster": "assets/projetos/kairoz/kairoz-importacao.jpg",
        "legenda": "assets/projetos/kairoz/kairoz-fluxo.vtt"
      },
      {
        "src": "assets/projetos/kairoz/kairoz-extensao.mp4",
        "titulo": "Extensão Chrome · Do Instagram à biblioteca",
        "poster": "assets/projetos/kairoz/kairoz-extensao.jpg",
        "legenda": "assets/projetos/kairoz/kairoz-extensao.vtt"
      }
    ]
  },
  "realtimechat": {
    "titulo": "RealTimeChat",
    "categoria": "Projeto demonstrativo · Tempo real",
    "resumo": "Chat privado com mensagens em tempo real, presença em múltiplas abas, confirmação de leitura e histórico paginado.",
    "implementacoes": [
      "Conversas privadas com presença, indicador de digitação, contadores de não lidas e recibos de leitura.",
      "Envio com estado pendente, opção de reenvio e histórico que carrega mensagens anteriores ao rolar.",
      "Interface responsiva com tema claro, escuro ou automático e acesso por contas de demonstração."
    ],
    "participacao": "Projeto de portfólio que evoluí a partir de um protótipo local, com revisão da interface e do servidor e implementação de leitura, reenvio e paginação.",
    "limites": "As imagens e os vídeos foram gravados com o sistema rodando localmente, usando contas fictícias e mensagens de exemplo.",
    "tecnologias": [
      "SvelteKit",
      "Express",
      "Socket.IO",
      "Prisma · SQLite",
      "Docker"
    ],
    "decisoesTecnicas": [
      {
        "titulo": "Stores nativas do Svelte para compartilhar o estado do chat",
        "motivo": "A interface anterior concentrava o estado no componente da página. Com a separação em lista de contatos e conversa, as stores writable do Svelte passaram a compartilhar sessão, contato ativo, mensagens, contadores e envios pendentes. Um identificador de consulta impede que o histórico de um contato sobrescreva a conversa aberta depois."
      },
      {
        "titulo": "Socket.IO para eventos ao vivo e HTTP para o histórico",
        "motivo": "Mensagens e recibos trafegam pelas salas dos participantes. O histórico é consultado por HTTP ao abrir a conversa ou reconectar. A interface combina o histórico com os eventos ao vivo pelo ID da mensagem. A digitação é temporária e a presença considera o conjunto de abas conectadas."
      },
      {
        "titulo": "Envio otimista com confirmação e reenvio",
        "motivo": "A mensagem aparece como pendente enquanto o servidor grava e confirma. Se o envio falhar, a interface permite reenviar com o mesmo clientId. O servidor mantém os IDs recentes em memória para reconhecer tentativas já processadas. Essa proteção é limitada à instância e não sobrevive a reinícios."
      },
      {
        "titulo": "Paginação por cursor para lidar com novas mensagens",
        "motivo": "Ao rolar para cima, o cliente pede os registros anteriores ao ID mais antigo já exibido. Novas mensagens no fim da conversa não deslocam esse ponto de referência. O carregamento insere mensagens no topo e preserva a posição de leitura."
      },
      {
        "titulo": "Recibo de leitura persistido no banco",
        "motivo": "O servidor marca como lidas as mensagens recebidas naquela conversa e informa os participantes. O horário salvo no banco permite recompor os contadores de não lidas após recarregar a página."
      },
      {
        "titulo": "Identidade autenticada e cifra no armazenamento",
        "motivo": "O JWT validado no socket define a identidade do remetente e a sala. O servidor grava o conteúdo cifrado com AES-256-GCM e decifra quando entrega aos participantes. A cifra protege o conteúdo armazenado. O servidor tem acesso ao texto durante o processamento."
      },
      {
        "titulo": "SQLite e Prisma para uma demonstração reproduzível",
        "motivo": "SQLite mantém o histórico em arquivo, e o Prisma organiza o modelo e as migrações. O Docker Compose reúne o front-end e a API para rodar localmente. A presença e os IDs de reenvio ficam em memória, adequados ao escopo de uma instância."
      },
      {
        "titulo": "Testes de integração para validar a conversa completa",
        "motivo": "A suíte sobe o servidor com SQLite temporário e exercita fluxos de envio, reenvio, recibo de leitura e paginação. O GitHub Actions executa as verificações configuradas no repositório."
      }
    ],
    "links": [
      {
        "titulo": "Código e instruções no GitHub",
        "url": "https://github.com/isaqu33/realtimechat"
      }
    ],
    "capa": "assets/projetos/realtimechat/05-tempo-real-duas-janelas.png",
    "capaAlt": "Ana e Bruno em duas janelas com mensagens ao vivo",
    "imagens": [
      {
        "src": "assets/projetos/realtimechat/05-tempo-real-duas-janelas.png",
        "alt": "Ana e Bruno em duas janelas com mensagens ao vivo",
        "legenda": "Ana e Bruno em duas janelas com mensagens ao vivo."
      },
      {
        "src": "assets/projetos/realtimechat/01-login.png",
        "alt": "Tela de entrada com atalhos para contas fictícias",
        "legenda": "Tela de entrada com atalhos para contas fictícias."
      },
      {
        "src": "assets/projetos/realtimechat/02-contatos-nao-lidas.png",
        "alt": "Contatos com presença e contadores de mensagens não lidas",
        "legenda": "Contatos com presença e contadores de mensagens não lidas."
      },
      {
        "src": "assets/projetos/realtimechat/03-conversa.png",
        "alt": "Conversa com horários, indicador de digitação e recibo de leitura",
        "legenda": "Conversa com horários, indicador de digitação e recibo de leitura."
      },
      {
        "src": "assets/projetos/realtimechat/04-historico-paginado.png",
        "alt": "Histórico de mensagens com separadores por dia",
        "legenda": "Histórico de mensagens com separadores por dia."
      },
      {
        "src": "assets/projetos/realtimechat/06-celular-lista.png",
        "alt": "Lista de contatos na versão para celular",
        "legenda": "Lista de contatos na versão para celular."
      },
      {
        "src": "assets/projetos/realtimechat/07-celular-conversa.png",
        "alt": "Tela da conversa na versão para celular",
        "legenda": "Tela da conversa na versão para celular."
      },
      {
        "src": "assets/projetos/realtimechat/08-temas-claro-e-escuro.png",
        "alt": "A mesma conversa nos temas claro e escuro",
        "legenda": "A mesma conversa nos temas claro e escuro."
      },
      {
        "src": "assets/projetos/realtimechat/11-arquitetura-fluxo-da-mensagem.png",
        "alt": "Diagrama de sequência do login, envio, gravação e leitura",
        "legenda": "Diagrama de sequência do login, envio, gravação e leitura."
      },
      {
        "src": "assets/projetos/realtimechat/09-mensagens-cifradas-no-banco.png",
        "alt": "Texto cifrado no SQLite e texto de exemplo devolvido pela API aos participantes",
        "legenda": "Texto cifrado no SQLite e texto de exemplo devolvido pela API aos participantes."
      },
      {
        "src": "assets/projetos/realtimechat/10-testes.png",
        "alt": "Resultado da execução de 31 testes do servidor com um banco temporário",
        "legenda": "Resultado da execução de 31 testes do servidor com um banco temporário."
      }
    ],
    "videos": [
      {
        "src": "assets/projetos/realtimechat/01-tempo-real-duas-janelas.mp4",
        "poster": "assets/projetos/realtimechat/05-tempo-real-duas-janelas.png",
        "titulo": "Mensagens, digitação e confirmação de leitura em duas janelas"
      },
      {
        "src": "assets/projetos/realtimechat/02-temas-claro-escuro.mp4",
        "poster": "assets/projetos/realtimechat/08-temas-claro-e-escuro.png",
        "titulo": "Alternância entre tema claro, escuro e automático"
      },
      {
        "src": "assets/projetos/realtimechat/03-historico-paginado.mp4",
        "poster": "assets/projetos/realtimechat/04-historico-paginado.png",
        "titulo": "Carregamento de mensagens anteriores ao rolar para cima"
      },
      {
        "src": "assets/projetos/realtimechat/04-celular.mp4",
        "poster": "assets/projetos/realtimechat/07-celular-conversa.png",
        "titulo": "Lista de contatos e envio de mensagem no celular"
      }
    ]
  },
  "meutime": {
    "titulo": "Soccer-Mania",
    "categoria": "Projeto de estudo · Painel de futebol",
    "resumo": "Painel de futebol para explorar partidas, classificações, times e jogadores com dados da API-Sports.",
    "implementacoes": [
      "Partidas com eventos, estatísticas e escalações, além de classificações e rankings por liga.",
      "Páginas de times e jogadores com elenco, estatísticas e informações de carreira.",
      "Tabelas com filtros, ordenação e paginação, em um painel responsivo com temas claro e escuro."
    ],
    "participacao": "Desenvolvi a primeira versão como meuTime e refatorei o projeto para o Next.js, ampliando as consultas de futebol e a cobertura de testes.",
    "limites": "As capturas do painel usam dados de exemplo. Para consultar dados do provedor, o aplicativo exige uma chave da API-Sports. As temporadas e os dados disponíveis dependem do plano contratado.",
    "tecnologias": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chakra UI",
      "React Query",
      "Auth.js",
      "Playwright"
    ],
    "decisoesTecnicas": [
      {
        "titulo": "De React com Vite para Next.js",
        "motivo": "A versão original usava React e Vite. A refatoração levou o painel para o Next.js, que reúne as páginas protegidas, a sessão e as rotas que consultam a API-Sports no servidor."
      },
      {
        "titulo": "Auth.js e proxy com rotas permitidas",
        "motivo": "O usuário informa a chave no login. O Auth.js a guarda no token de sessão cifrado em cookie HttpOnly. O proxy usa a chave no servidor e valida os caminhos e parâmetros de leitura antes de consultar a API-Sports."
      },
      {
        "titulo": "React Query e cache por tipo de dado",
        "motivo": "O React Query organiza as consultas no cliente. Algumas abas carregam dados só quando abertas. O servidor mantém resultados bem-sucedidos em cache por prazos diferentes, de acordo com a frequência de atualização. O cache e o limitador do proxy operam por instância."
      },
      {
        "titulo": "Paginação conforme a resposta da API",
        "motivo": "Quando uma consulta devolve a lista completa, o painel aplica filtro, ordenação e paginação no navegador. Quando o provedor devolve resultados em páginas, como jogadores por liga, o painel solicita a página correspondente."
      },
      {
        "titulo": "Erros de plano e cota tratados na interface",
        "motivo": "A API-Sports pode retornar HTTP 200 com um erro no corpo. O painel interpreta esse erro e explica em português quando o plano restringe a temporada ou quando a cota foi atingida. Respostas com erro ficam fora do cache."
      },
      {
        "titulo": "Testes do proxy e dos fluxos do painel",
        "motivo": "Vitest cobre política do proxy, cache, limites e formatação. Playwright exercita login, navegação, paginação e estados de erro. A captura registra uma execução com 30 testes unitários e 16 testes de navegador."
      }
    ],
    "links": [
      {
        "titulo": "Ver código no GitHub",
        "url": "https://github.com/isaqu33/meuTime"
      }
    ],
    "capa": "assets/projetos/soccer-mania/inicio-escuro.png",
    "capaAlt": "Painel inicial com jogos, classificação e artilheiros com dados de exemplo",
    "imagens": [
      {
        "src": "assets/projetos/soccer-mania/inicio-escuro.png",
        "alt": "Painel inicial com jogos, classificação e artilheiros com dados de exemplo",
        "legenda": "Painel inicial com jogos, classificação e artilheiros. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/jogos-claro.png",
        "alt": "Lista de jogos com filtros e paginação com dados de exemplo",
        "legenda": "Lista de jogos com filtros e paginação. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/jogo-claro.png",
        "alt": "Detalhes de uma partida com dados de exemplo",
        "legenda": "Detalhes de uma partida. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/liga-escuro.png",
        "alt": "Classificação e informações da liga com dados de exemplo",
        "legenda": "Classificação e informações da liga. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/time-escuro.png",
        "alt": "Elenco e estatísticas de um time com dados de exemplo",
        "legenda": "Elenco e estatísticas de um time. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/jogador-escuro.png",
        "alt": "Perfil e estatísticas de um jogador com dados de exemplo",
        "legenda": "Perfil e estatísticas de um jogador. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/inicio-claro.png",
        "alt": "Painel inicial no tema claro com dados de exemplo",
        "legenda": "Painel inicial no tema claro. Captura do sistema com dados de exemplo."
      },
      {
        "src": "assets/projetos/soccer-mania/22-arquitetura.png",
        "alt": "Diagrama da sessão, do proxy Next.js e da integração com a API-Sports",
        "legenda": "Diagrama da sessão, do proxy Next.js e da integração com a API-Sports."
      },
      {
        "src": "assets/projetos/soccer-mania/21-testes.png",
        "alt": "Resultado da execução registrada de testes unitários e de navegador",
        "legenda": "Resultado da execução registrada de testes unitários e de navegador."
      }
    ]
  }
};
