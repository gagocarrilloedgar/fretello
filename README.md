# Fretello Backend challenge

Basic API using functional programming due to its simplicity for the project and a clean architecture using some of the concepts used in OOP in order to keep it modular and de-coupled as much as possible (whitin the context of the challenge).


## Installtion & Setup

```shell
# Install dependencies
npm i 
```

Set the environment variables (it you want to change them)
(You can see all enviroment key at **.env.example or .env**)


## Features
- **Testing**: unit and integration tests using [Jest](https://jestjs.io/), [mongodb-memory-server](https://www.npmjs.com/package/mongodb-memory-server) and [SuperTest](https://www.npmjs.com/package/supertest)
- **Error handling**: centralized error handling mechanism
- **Dependency management**: with [npm](https://www.npmjs.com)
- **Environment variables**: using [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)
- **Security**: set security HTTP headers using [helmet](https://helmetjs.github.io/)
- **Compression**: gzip compression with [compression](https://github.com/expressjs/compression)
- **Linting**: with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) (fixing)
- **Docs**: with [APIDoc](https://apidocjs.com) format
- **TS**: [Typescrpit](https://www.typescriptlang.org)
- **Containerization**: with [Docker](https://www.docker.com) to easily deploy to AWS and generate a production 


## Commands

Running locally:

```bash
npm run dev
```

building:

```bash
npm run build
```

Running production (build before use):

```bash
npm start
```

Testing:

```bash
# run all tests
npm run test

# run all tests in watch mode
npm run test:watch
```


Linting

```bash
# Check possible ESLint errors
npm run lint

# Check & fix the possible ones
npm run test:fix
```

Prettiefy

```bash
# Check format base on prettier and the config on the root folder
npm run prettier

# Check and fix if possible
npm run prettier:fix
```

## Docker procuction setup

Using the Dockerfile 

```sh
  # Docker start | Start docker
  docker build -t [image_name] .
  docker run -it -p [PORT]:3001 [image_name]
```


## Linting config

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

In this app, ESLint is configured to follow the [Standar JavaScript style guide](https://standardjs.com) with some modifications.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.


## License

MIT

## Contact info

You can contact me using:

[Edgar Gago Carrillo](https://www.linkedin.com/in/gagocarrilloedgar/)

