# Projeto Blog's API

<strong>O que foi desenvolvido</strong>

  Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog! 

  Foi desenvolvida uma aplicação em `Node.js` usando o pacote `sequelize` para fazer um `CRUD` de posts.

  1. Endpoints estarão conectados ao seu banco de dados seguindo os princípios do REST;

  2. Para fazer um post é necessário usuário e login, portanto será trabalhada a **relação entre** `user` e `post`; 

  3. Será necessária a utilização de categorias para os posts, trabalhando, assim, a **relação de** `posts` para `categories` e de `categories` para `posts`.

# Requisitos Obrigatórios

## 1 - Criação de migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

- As `migrations` devem estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- As `migrations` devem respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades].
- Todas as tabelas e colunas vão estar em `snake_case` 

---

## 2 - Criação do modelo `User` em `src/models/User.js` com as propriedades corretas

- A `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_, como descrito na seção de [Diagrama ER e Entidades];
- A `model` foi desenvolvida em formato funcional, ou seja, não como uma classe.

---

## 3 - A aplicação deve ter o endpoint POST `/login`

- O endpoint deve ser acessível através do URL `/login`;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "email": "lewishamilton@gmail.com",
    "password": "123456"
  }
  ```
  
---

## 4 - A aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de adicionar um novo `user` a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    // a imagem não é obrigatória
  }
  ```
---

## 5 - A aplicação deve ter o endpoint GET `/user`

- Validação do `token` neste requisito;
- O endpoint deve ser acessível através do URL `/user`;
- O endpoint deve ser capaz de trazer todos `users` do banco de dados;

---

## 6 - A aplicação deve ter o endpoint GET `/user/:id`

- Validação do `token` neste requisito;
- O endpoint deve ser acessível através do URL `/user/:id`;
- O endpoint deve ser capaz de trazer o `user` baseado no `id` do banco de dados se ele existir;

---

## 7 - Criação do modelo `Category` em `src/models/Category.js` com as propriedades corretas

- A `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- A `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_.
- Sua `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 8 - A aplicação deve ter o endpoint POST `/categories`

- Validação do `token` neste requisito;
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de adicionar uma nova categoria a sua tabela no banco de dados;
- O corpo da requisição deverá seguir o formato abaixo:
  ```json
  {
    "name": "Typescript"
  }
  ```
---

## 9 - A aplicação deve ter o endpoint GET `/categories`

- Validação do `token` neste requisito;
- O endpoint deve ser acessível através do URL `/categories`;
- O endpoint deve ser capaz de trazer todas categorias do banco de dados;

---

## 10 - Criação o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

- A `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- A `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_;
- A `model` deve respeitar a associação correta *(N:1)* com o modelo `User`;
- A `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---

## 11 - Criação do modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

- A `model` deve estar no diretório correto e respeitar a nomenclatura pedida no requisito;
- A `model` deve respeitar o _diagrama de Entidade-Relacionamento_ e o _formato das entidades_;
- A `model` deve respeitar a associação correta *(N:N)* entre o modelo `BlogPost` e o modelo `Category`;
- A `model` deve ser desenvolvida em formato funcional, ou seja, não pode ser uma classe.

---
  
## 12 - A aplicação deve ter o endpoint GET `/post`

- Validação do `token` neste requisito;
- O endpoint deve ser acessível através do URL `/post`;
- O endpoint deve ser capaz de trazer todos os blogs post, user dono dele e as categorias do banco de dados;

---

## 13 - A aplicação deve ter o endpoint GET `/post/:id`

- Validação do `token` neste requisito;
- O endpoint deve ser acessível através do URL `/post/:id`;
- O endpoint deve ser capaz de trazer o blog post baseado no `id` do banco de dados se ele existir;
