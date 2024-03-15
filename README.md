# Enhanced Loan Application Processing Service

A microservice for managing loan applications featuring submission, status checks, and admin management.

## Stack

- NodeJS v18 runtime environment
- NestJS v10 framework
- PostgreSQL v16 database
- Docker v25 containerization

## Development Environment Setup

### Node.js

[Install asdf](https://asdf-vm.com/guide/getting-started.html) and the [Node.js plugin](https://asdf-vm.com/guide/getting-started.html#install-the-plugin).

Then install Node.js version 18.18.2.

```bash
asdf install nodejs 18.18.2
```

### Docker and Docker Compose

[Install Docker](https://docs.docker.com/get-docker/) and the [Docker Compose plugin](https://docs.docker.com/compose/install/).

## Running the app

```bash
$ make build-dev
$ make start
```

For production deploy, push the image to our Docker private repo.
```bash
$ docker push devteam/service-nodejs-loan-nestjs
```

## Test

```bash
$ make build-test
$ make start
```

## Stay in touch

- Author: [Bruno Villanova](https://github.com/BrunoVillanova)
- Professional Profile: [LinkedIn](https://www.linkedin.com/in/brunovillanova/)
