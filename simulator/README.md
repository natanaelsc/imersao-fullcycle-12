# Imersão Full Stack & FullCycle - CodeLivery (Simulator Go)

## Descrição

Repositório do backend feito com Golang (Backend)

**Importante**: A aplicação do [Apache Kafka](/apache-kafka/README.md) deve estar rodando primeiro.

## Configurar ```/etc/hosts```

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu ```/etc/hosts``` (para Windows o caminho é ```C:\Windows\system32\drivers\etc\hosts```):

```txt
127.0.0.1 host.docker.internal
```

Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.

## Rodar a aplicação

Execute os comandos:

```txt
docker-compose up -d
```

Entrar no container

```txt
docker-compose exec app bash
```

Rodar a aplicação Golang

```txt
go run main.go
```

### Para Windows

Lembrar de instalar o WSL2 e Docker. Vejo o vídeo: [https://www.youtube.com/watch?v=usF0rYCcj-E](https://www.youtube.com/watch?v=usF0rYCcj-E) 

Siga o guia rápido de instalação: [https://github.com/codeedu/wsl2-docker-quickstart](https://github.com/codeedu/wsl2-docker-quickstart) 

---

# Simulator Go

-> go mod init github.com/codeedu/imersaofsfc2-simulator
-> github.com/natanaelsc96/imersao-fullcycle-8/simulator

-> imersao-fullcycle-8/simulator
-> docker compose up -d
-> docker exec -it simulator bash
-> go run main.go

## Kafka Docker Container

-> imersao-fullcycle-8/simulator/.docker/kafka

-> docker compose up -d

Entre no container kafka-kafka-1
-> docker exec -it kafka-kafka-1 bash

Dentro do Container kafka-kafka-1 (Producer)
-> kafka-console-producer --bootstrap-server=localhost:9092 --topic=route.new-direction

Dentro do Container kafka-kafka-1 em outro terminal (Consumer)
-> kafka-console-consumer --bootstrap-server=localhost:9092 --topic=route.new-position --group=terminal

Dentro do Container kafka-kafka-1 no terminal do Producer
{"clientId":"1","routeId":"1"}
{"clientId":"2","routeId":"2"}
{"clientId":"3","routeId":"3"}
