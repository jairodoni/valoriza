<div 
  align="center"
  style="
    background: #29292e;
    border-radius: 1.5rem;
    display: flex;
    alight-itens:center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 60px;
    margin: 10px 20px;
    border: 2px solid #444444;
  ">
  
  <h1 align="center">
      Valoriza
  </h1>
  
  
  
  [![Licence](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE.md)  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/> 
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
  <img alt="SQLite" src ="https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"/>
  
  
  <!-- ![GitHub][repository_license_badge] ![React_Badge][web_react_badge] ![Types][typescript_shields] ![Next][next_shields] -->
  
</div>

<p align="center">
  <img alt="Preview" src="./.github/preview.png">
</p>

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

<p align="left">
  <img width="70%" alt="Preview" src="./.github/valoriza.png">
</p>

---

## **✨ Tecnologias**

Esse projeto foi desenvolvido com as seguintes tecnologias:

- **[Typescript](https://www.typescriptlang.org/)**
- **[Node.js](https://nodejs.org/en/)**
- **[Typeorm](https://typeorm.io)**
- **[Express](https://expressjs.com/pt-br/)**
- **[JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)**
- **[SQLite](https://www.npmjs.com/package/sqlite3)**
- **[Beekeeper](https://www.beekeeperstudio.io)**

---

## **🚀 Como executar o projeto**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina.

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Após ter o **Node** instalado, instale as dependências do **React** de forma global, utilizando os comandos:

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

### Instalando as Dependencias

```sh
 # Execute o comando para baixar as dependências
$ npm install

# OU

$ yarn
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](./package.json)</kbd> para saber quais scripts estão disponíveis.

### Executando as Migrations

```sh

# Execute o comando para criar as tabelas do banco de dados.
$ yarn typeorm migration:run

```

### Executando o Server

```sh
# Execute o comando para iniciar a aplicação.
$ npm run dev

#    OU

$ yarn dev
```

## **📚 Referências**

- [Blog Rocketseat][rocketseat_blog]
- [Rocketseat][rocketseat_plataforma]
- [Node.js][node]

## **👨‍🚀 Autor**

<a href="https://github.com/jairodoni">
 <img style="border-radius: 50%;" src="https://github.com/jairodoni.png" width="100px;" alt="Jairo Doni Prudente Junior"/>
  <br />
  <sub>
    <b>Jairo Doni Prudente Junior</b>
  </sub>
</a>
<br />

👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jairodoni/)](https://www.linkedin.com/in/jairodoni/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:jairo.doni97@gmail.com)](mailto:jairo.doni97@gmail.com)

## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

<!-- Referencias -->

[rocketseat_blog]: https://blog.rocketseat.com.br/
[rocketseat_plataforma]: https://app.rocketseat.com.br/
[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[repository_license_badge]: https://img.shields.io/github/license/JairoDoni/NLW-1.0
[web_react_badge]: https://img.shields.io/badge/web-react-blue
[typescript_shields]: https://img.shields.io/badge/types-Typescript-blue
[next_shields]: https://img.shields.io/badge/vercel-Next.js-lightgrey

<!-- Techs -->

[react]: https://reactjs.org/
[react_doc]: https://reactjs.org/docs/getting-started.html
[react_doc_ptbr]: https://pt-br.reactjs.org/docs/getting-started.html
[node]: https://nodejs.org/en/
[vscode]: https://code.visualstudio.com/
[next_auth]: https://next-auth.js.org
[stripe]: https://stripe.com/docs
[faunadb]: https://fauna.com
[prismic]: https://prismic.io
[github_oauth]: https://docs.github.com/pt/developers/apps/authorizing-oauth-apps
[next]: https://nextjs.org/
[typescript]: https://www.typescriptlang.org/
[axios]: https://github.com/axios/axios
[asdf]: https://github.com/asdf-vm/asdf
[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
[stackedit]: https://stackedit.io
[markdown_emoji]: https://gist.github.com/rxaviers/7360908
