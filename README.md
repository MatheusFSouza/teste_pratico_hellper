<h1 align="center">Teste pratico Hellper</h1>

<p align="center">
 <a href="#Sobre">Sobre</a> •
 <a href="#Instalção">Instalação</a> • 
 <a href="#Rodando o Back End (servidor)">Rodando o Back End (servidor)</a> • 
 <a href="#Tecnologias">Tecnologias</a> • 
</p>



### Sobre
<p>Teste Pratico para aplicação de estágio na Hellper</p>

### Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Insomnia](https://insomnia.rest/download/), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/MatheusFSouza/teste_pratico_hellper>

# Acesse a pasta do projeto no terminal powerShell do windows
$ cd backend

# Instale o express
$ yarn add express

# Instale tambem o nodemoon(como dependencia de desenvolvimento)
$ yarn add nodemoon -D

# Execute a aplicação uilizando
$ yarn dev  ou  npm dev

# o servidor assim que começar a funcionar deve mostar
$  S2 Back-end Started

# O servidor inciará na porta:3333 - acesse <http://localhost:3333>
# Para utilizar as rotas no insomnia use <http://localhost:3333/registers> e 
<http://localhost:3333/registers/id> para update e delete.
E coloque isso no create e update no insomnia para fazer os testes.
{ 
	"name": "Nome da pessoa",
 "email": "test@hotmail.com",
	"cpfoucnpj": "897546132",
	"telephone": "987546123",
	"cep": "123654",
	"logradouro": "Logradouro",
	"number": "152",
	"neighborhood": "Jardim Bonito",
	"city": "Sorocaba",
	"state": "São Paulo"
}
```

### Tecnologias
[Node.js](https://nodejs.org/en/)
