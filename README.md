# nestjs

## setup

install nestjs cli

```bash
sudo yarn global add @nestjs/cli
```

create a new project using nest cli

```bash
nest new task-management
```

> it will generate boilerplate code for us to start with

add fastify as well

```bash
yarn add @nestjs/platform-fastify
```

> note: when using fastify their are some changes that we need to make. that we will cover later [ref](https://docs.nestjs.com/techniques/performance)

## add a new module

generate new module using nest cli

```bash
nest g module tasks
```
