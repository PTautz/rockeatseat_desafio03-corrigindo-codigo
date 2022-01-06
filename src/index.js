const express = require("express");

const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

const repositories = [];

//middleware
function checkIndexRepositories(request, response, next) {
  const { id } = request.params;

  repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(404).json({ error: "Repository not found" });
  }

  request.repositoryIndex  = repositoryIndex;
  
  return next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };
  //correção adicionar o repositório no vetor de repositórios
  repositories.push(repository);

  return response.status(201).json(repository);;
});

//fazendo a verificação do id do repositório no middleware checkIndexRepositories
app.put("/repositories/:id",checkIndexRepositories, (request, response) => {
  const { repositoryIndex } = request;
  const {title, url, techs } = request.body

  repositories[repositoryIndex].title = title;

  repositories[repositoryIndex].url = url;

  repositories[repositoryIndex].techs = techs;

  return response.json(repositories[repositoryIndex]);
});

//fazendo a verificação do id do repositório no middleware checkIndexRepositories
app.delete("/repositories/:id",checkIndexRepositories, (request, response) => {
  const { repositoryIndex } = request;

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();
});

//fazendo a verificação do id do repositório no middleware checkIndexRepositories
app.post("/repositories/:id/like",checkIndexRepositories, (request, response) => {
  const { repositoryIndex } = request;
  repositories[repositoryIndex].likes++;
  //console.log (repositories);
  //precisa retornar o objeto inteiro
  return response.json(repositories[repositoryIndex]);
});

module.exports = app;
