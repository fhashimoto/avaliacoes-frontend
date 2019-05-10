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
R:

### b) Neste projeto, estamos usando os componentes gráficos da versão 4 da biblioteca gráfica do Ionic. Nesta versão, os componentes são Web Components. Explique o que são Web Components e explique quais são as vantagens deles.
R: 

### c) Para que serve a tag ngFor do angular?
R:


### d) O que o codigo abaixo representa no arquivo list.page.ts?
`legends: Array<string> = []`
R

### e) Como funciona a api Events do Ionic? Para que serve?
R: 

### f) O que é flexbox? Para que servem as tags ion-grid, ion-row, ion-col? Quais as vantagens em utilizálas?
R: 

## Angular Questão 6:

### a) Quais foram os problemas que você identificou?
R:

### b) Ordene os problemas por ordem de criticidade, ou seja, liste todos os problemas encontrados na ordem de quais deveriam ser corrigidos primeiro em um cenário onde devessemos priorizar as correções.
R:

### c) Justifique a ordem proposta no item anterior em termos de impacto para os usuários e dificuldade para corrigir o problema.
R: 

### d) Para que servem os comandos async e await, encontrados na função presentLoading do arquivo home.page.ts?
R:

### e) Quais as vantagens de utilizar async/await em códigos javascript/typescript?
R:

### f) Explique para que serve a seguinte lib encontrada no arquivo home.page.ts import * as _ from 'lodash';
R:
