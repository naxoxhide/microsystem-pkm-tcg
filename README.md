<h1 align="center">Lab Microsystem - Pokémon TCG </h1>

<p align="center">
  Front + API + Docker para manejo de Set y Cartas Pokémon
</p>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-v20.x-green.svg" alt="node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-v5.x-blue.svg" alt="typescript"/></a>
  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript"><img src="https://img.shields.io/badge/javascript-yellow.svg" alt="javascript"/></a>
  <a href="https://docs.nestjs.com/v10/"><img src="https://img.shields.io/badge/pnpm-v9.x-purple.svg" alt="npm"/></a>
  <a href="https://www.postgresql.org"><img src="https://img.shields.io/badge/postgres-v17.2-blue.svg" alt="postgres"/></a>
  <a href="https://swc.rs/"><img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Dockerized 🐳_-blue.svg" alt="docker"/></a>
</p>


## 🧑‍💻 Developing

Este proyecto utiliza pnpm como manejador de paquetes, React para el desarrollo del front, NestJS para el back y Postgres para el uso de base de datos

La base de datos esta  dockerizada 🐳, para poder inicar el uso de la base de datos en **development mode**, se debe correr el siguiente comando en la carpeta de bookapi:

```bash
docker-compose up -d my-service-dev
```


## ⚙️ Building

Para iniciar el proyecto a nivel de NestJS, seguir los siguientes comandos en **api-tcg-pkm** 

```bash
pnpm install
```

```bash
pnpm start:dev
```