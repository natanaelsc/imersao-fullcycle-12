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
