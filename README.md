## DESAFIO 03 - Rockeatseat

Nesse desafio, temos uma aplicação Node.js que está em processo de desenvolvimento mas que já possui os testes necessários para fazer toda a validação dos requisitos (você não deve mexer nos testes).
Após algumas alterações no código da aplicação, parte dos testes deixaram de passar e agora só você pode resolver esse problema. Bora lá? 🚀

Essa aplicação realiza o CRUD (**C**reate, **R**ead, **U**pdate, **D**elete) de repositórios de projetos. Além disso, é possível dar likes em repositórios cadastrados, aumentando a quantidade de likes em 1 a cada vez que a rota é chamada.

A estrutura de um repositório ao ser criado é a seguinte: 

```jsx
{
  id: uuid(),
  title,
  url,
  techs,
  likes: 0
}
```

Descrição de cada propriedade:

- **id** deve ser um uuid válido;
- **title** é o título do repositório (por exemplo "unform");
- **url** é a URL que aponta para o repositório (por exemplo "[https://github.com/unform/unform](https://github.com/unform/unform)");
- **techs** é um array onde cada elemento deve ser uma string com o nome de uma tecnologia relacionada ao repositório (por exemplo: ["react", "react-native", "form"]);
- **likes** é a quantidade de likes que o repositório recebeu (e que vai ser incrementada de 1 em 1 a cada chamada na rota de likes).

Note que a quantidade de likes deve sempre ser zero no momento de criação.

## Corrigindo o código 

### Requisitos

- [x] Deve ser possível criar um novo repositório
- [x] Deve ser possível listar os projetos
- [x] Deve ser possível atualizar repositório
- [x] Deve ser possível deletar repositório
- [x] Deve ser possível dar um like ao repositório


## regras de testes

  - [x] Não deve ser possível atualizar um repositório não existente
  - [x] Não deve ser possível atualizar a quantidade de likes de um repositório manualmente
  - [x] Não deve ser possível deletar um repositório não existente
  - [x] Não deve ser possível dar like a um repositório não existente
  