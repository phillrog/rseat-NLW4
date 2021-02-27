# Rocketseat - Next Level Week 4

![NLW4](/Wallpaper%20-%201440x900.png?raw=true)


<p align="center">
<a href="#-objetivo">Objetivo</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#-etapas">Etapas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-wallpapers">Wallpapers</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
 <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-dicas-especiais">Dicas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-ambiente-da-aplicação">Ambiente da Aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-vercel">Vercel</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#-demo">Demo</a>
</p>
---

# 🏆 Objetivo

Projeto feito durante a Next Level Week #4 da Rocketseat. O intuito do evento era para realizar o desenvolvimento de uma aplicação voltada para todos que ficam diretamente na frente do computador (principalmente desenvolvedores) através do uso de tecnologias que estão em alta no mercado (ReactJS - Foco em utilização do NextJS).

A ideia é de que o usuário utiliza de um timer para que a cada 25 minutos ela seja lembrada de fazer uma pausa e, durante a pausa, realizar um exercício específico que a aplicação desponibiliza. Após a realização do exercício o usuário confirma que realizou o exercício e recebe uma motivação (no caso foi utilizado a temática de RPGs, como ganhar experiência para subir de level.) e segue para o próximo timer.

# 💡 Etapas

# 🗓️ Dia 1 - Fundamentos do React

- Fundamentos API
- Typescript
* Componente/Conceitos
  - Propriedades
  - Estado
  - Estilização

> #rumoaoproximonivel  

# 🗓️ Dia 2 - Desvendando o Next.js

> "Consegue fazer com que nossas aplicações em React sejam indexadas por motores de busca..."
* Conceitos
  - SPA -> Single Page Application
  - SSR -> Server-side Rendering
  - SSG -> Static Site Generator
- Foi migrado o projeto inicial para Next.js ``` yarn create next-app moveit-next ```
- Document
- Modulação de estilos
- Estado conforme evento useEffect

> #jornadainfinita

# 🗓️ Dia 3 - Contextos e desafios

- Bos práticas typescript
- ReactJs fragments
- Funções css
- Contextos entre componentes

> #focopraticaegrupo

# 🗓️ Dia 4 - Unindo toda aplicação

- Trabalhado com múltiplos contextos
- Aprendido a forçar o useEffect executar apenas uma única vez
- Foi aprendido a solicitar permissões de notificação
- Foi aprendido a utilizar a API de Notificação do browser
- Foi implementado audio sinalizando novo desafio quando aparece a notificação

> #NeverStopLearning

# 🗓️ Dia 5 - Desafios e deploy

- Foi implementado ```getServerSideProps```
- Conhecendo Vercel
- Foi criado conta no vercel com github
- Foi instalado o cli da vercel com ```npm i -g vercel```
- Foi publicado

> #missioncomplete

--- 


# 🎨 Layout

Você pode ver o layout original do projeto através deste [link](https://www.figma.com/file/wPMxi6R9dVLwsj7BM1qlKs/Move.it-1.0-(Copy)?node-id=160%3A2761). É necessário uma conta no Figma para acessá-lo.

# 💼 Wallpapers

Lista de imagens inéditas do NLW4. [Link](https://drive.google.com/drive/folders/11fxy_LmTD6S1FGTQbeu47QPLzvyuEGSs)

# 🚀 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- **[ReactJS](https://developer.mozilla.org/en-US/docs/Glossary/HTML)**
- **[NextJS](https://sass-lang.com/documentation/syntax)**

# 🖊️ Licença

O projeto é licenciado sobre a "MIT License" - Veja a pagina LICENÇA para mais destalhes.

# 💰 Dicas especiais

Nesse conteúdo extra, segue algumas dicas rápidas, **direto ao ponto**, para ajudar você configurar suas redes sociais e ter maior acesso às oportunidades no universo da **programação**.
[Clique aqui](https://www.notion.so/GitHub-LinkedIn-NLW-9a057f4f92ab4392903ff3a588acb2ab)


# 💻 Ambiente da Aplicação

### Configurar

Siga os passos para configurar seu ambiente [Ambiente](https://www.notion.so/Configura-es-do-ambiente-React-76f2963a042f45b9b9b567a2795945b8)

### Rodar localhost

Execute ```yarn dev``` para rodar localhost.

# 🧿 Vercel

Acesse https://vercel.com/ , cadastre-se.

Instale o vercel cli ```npm i -g vercel```

Vá na raiz do projeto, nesse caso "...Dia-5-Desafios-e-deploy\moveit-next", execute o comando vercel login, coloque seu e-mail e acesse ele para confirmar o cadastro.

### Deploy

Execute o comando na raiz do diretório do projeto ```vercel --prod``` 

# 🛸 Demo

![git](/app.gif)

Publicação no vercel <a href="https://moveit-phillrog.vercel.app" target="_blank">Clique aqui!</a>

Obs: Aceite a permissão de notificação para ouvir um som ao receber notificação de novos desafios
