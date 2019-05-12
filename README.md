# Folha de respostas

## Javascript Questão 2:

### a) No import da api do google maps no index.html, para que servem as tags async e defer?
R: A tag async define que o carregamento do documento será feito de forma assíncrona, ou seja, o restante do programa será carregado paralelamente. A tag defer indica que após o carregamento deste documento, será feito a avaliação, verificar se o documento não apresenta problemas.

### b) Para que serve o parâmetro &callback=initMap na url da api do google maps?
R: A função initMap declarada no index.js é chamada junto com o carregamento da api, para complementar as configurações que a api precisa para entregar o mapa.

### c) O que acontece quando removemos o parâmetro &callback=initMap da url da api do google maps? Explique o porque.
R: Não aparece nenhum mapa, porque os parâmetros necessários para a api entregar o mapa não foram passadas, que estão no initMap.

### d) Descreva pelo menos uma forma de como podemos fazer com que a aplicação funcione corretamente mesmo sem este parâmetro.
R: O mais simples é colocar um onload event na tag do script sendo carregado e fazer a chamada do initMap.

### e) Explique para que servem as seguintes tags do index.html: 
  `<link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">`

R: A tag link define uma conexão entre o documento onde está sendo chamado e o href, o documento que está chamando. A tag meta apenas fornece as informações do HTML onde ela foi chamada.

### f) Está aplicação pode ser considerada um PWA? Em caso negativo, explique o que falta para que seja.
R: O carregamento da página está demorado, no meu navegador ela demora 3.76s. Deveria apresentar uma tela de carregamento, ou uma tela de carregamento mínimo para esta espera. O tamanho dos ícones não estão responsivos de acordo com o tamanho da tela. 

## Angular Questão 4:

### a) Para que serve o método ngOnInit, quais são os outros métodos do Angular lifecycle hooks e para que servem?
R: Ele é carregado para concluir a inicialização do componente, após o Angular setar as propriedades e depois da primeira chamada de ngOnChanges(), é chamado apenas uma vez.
  ngOnChanges: Ele recebe um objeto SimpleChanges que irá rastrear mudanças e com isso esse hook será chamado.
  ngDoCheck: Detecta mudanças que o Angular não percebe por ele mesmo.
  ngOnDestroy: Ele é chamado antes do "destruição" dos atributos, pelo Angular.
  ngAfterContentInit: Responde após o Angular transmitir o conteúdo do componente pra View.
  ngAfterContentChecked: Responde após o Angular checar o conteúdo projetado no componente.
  ngAfterViewInit: Responde após o Angular inicializar a view do componente e dos componentes filhos.
  ngAfterViewChecked: Responde após o Angular checar a view do componente.

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: São um conjunto de api da plataforma web que te deixam customizar o estilo do site através das tags HTML, passando os nomes das tag e quando quer customizá-las basta adicionar algumas propriedades. Elas não dependem de nenhum framework, funcionam em todas as plataformas e são fáceis de implementar e de customizar, ajudando em um projeto que possui vários dev's atuando.

### c) Para que serve a tag ngFor do angular?
R: É uma tag que serve para fazer a iteração da tags e dos seus conteúdos.


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R: É uma declaração de variável do typescript, tipado.

### e) Como funciona a api Events do Ionic? Para que serve?
R: É um sistema onde conseguimos transmitir dados entre as páginas, em um sistema de listener e subscriber, onde um irá passar os dados e o outro irá receber.

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: É um layout responsivo de caixas do CSS. Essas tags são a representação do Ionic para o flexbox, setados em mobile-first, grid é todo o corpo que irá receber os containers, que são separados em filerias (rows) e estas separadas em colunas(col). Com elas nós temos uma divisão clara e responsiva dos containers.

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R: Existiam erros de digitação e faltou atribuir o this. para uma função, o que não permetia o app compilar. A página demora muito para recarregar, a primeira página demora 3s e algumas imagens demoravam 800ms, com requisições assíncronas, o que somava para o tempo final de carregamento. Em tamanhos de telas diferentes, a quarta imagem ficava fora do padrão, isso devia à implementação do grid do ionic, quando tinham path de imagens inexistentes, aparecia um link de 404, o que torna a experiência do usuário ruim.

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R: 1: Typos e atribução: Extremamente simples, resolvido em segundos.
  2: Juntar as imagens em Sprite, para que exista apenas uma solicitação para o servidor, aumentando a velocidade do site, e se for o caso, pode evitar imagens repetidas.
  3: Melhor estruturar o HTML, utilizar tag img que possui eventos úteis.
  4: Configurar o flex-box de forma manual, pois o ionic não possui um uso bom de flexbox para este caso.
  5: Se 2. não for implementado, ou durante a implementação do 2. chamar uma imagem "padrão" no evento de erro de carregamento da imagem.
  6: Retirada de funções desnecessárias e de log's desnecessários.

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: Pela complexidade do problema e também para o benefício que irá trazer para o usuário, mesmo o 2. sendo o mais complexo, ele irá trazer o maior benefício para o app, e o 1. pode ser reolvido em segundos, então fazendo uma análise complexidade/tempo, eu cheguei na conclusão dessa ordem.

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R: O async indica se uma função deve rodar de forma assíncrona, que é diferente do padrão JS, que funciona de forma síncrona, então o programa irá esperar o comando que tiver a tag await dentro da função async, ter um callback, para dar continuidade ao código.

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R: Quando temos uma dependência por exemplo de uma chamada de API, onde a função, ou variável só irá existir após a conclusão da chamada, e outras funções são dependentes dela para funcionar corretamente.

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R: O símbolo * significa que está importando tudo, como "_" da biblioteca lodash, ou seja, para usar os módulos do lodash nós chamamos com _. Essa é uma biblioteca que facilita a nossa manipulação e iteração de arrays, objetos e string, é uma auxiliadora para o nosso desenvolvimento.