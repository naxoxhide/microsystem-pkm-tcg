<h1 align="center">Lab Microsystem - Pokémon TCG </h1>

<p align="center">
  React + NestJs + Docker para manejo de Set y Cartas Pokémon
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

La base de datos esta  dockerizada 🐳, para poder inicar el uso de la base de datos en **development mode**, se debe correr el siguiente comando en la carpeta de **docker**:

```bash
cd docker
```

```bash
docker compose up -d
```


## ⚙️ Building

Para iniciar back-end del proyecto en NestJS, seguir los siguientes comandos en **api-tcg-pkm** 

```bash
cd api-tcg-pkm/
```

```bash
pnpm install
```

```bash
pnpm start:dev
```

Para iniciar el front-end desarrollado en ReactJs, seguir los
siguientes comandos en **front-lab-tcg-pkm**

```bash
cd front-lab-tcg-pkm/
```

```bash
pnpm install
```

```bash
pnpm run dev
```

## ⚙️ Rutas

El proyecto en React cuenta con uso de Route para navegar como una SPA entre los set y las cartas de cada set.

Cuenta con una página de error 404 al no soportar la url que están el las rutas. 

Los ejemplos de rutas son lo siguientes, para validar la re direccionamiento al 404 cuando no corresponde:

<p>
    Home - Set Disponibles
</p>

```bash
http://localhost:5173
```

<p>
    Cartas - Cartas que contiene cada Set
</p>

```bash
http://localhost:5173/cards/setid

```
Donde setid es el id del set donde se quiere visualizar las cartas

<p>
    404 - Error
</p>

```bash
http://localhost:5173/loqusea
```
Esto debería llevar a la página de error