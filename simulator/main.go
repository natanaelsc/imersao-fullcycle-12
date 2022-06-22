package main

import (
	"fmt"
	"log"

	"github.com/natanaelsc96/imersao-fullcycle-8/simulator/infra/kafka"
	kafka2 "github.com/natanaelsc96/imersao-fullcycle-8/simulator/application/kafka"
	ckafka "github.com/confluentinc/confluent-kafka-go/kafka"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
}

func main()  {
	msgChan := make(chan *ckafka.Message)
	consumer := kafka.NewKafkaConsumer(msgChan)
	go consumer.Consume()
	for msg := range msgChan {
		fmt.Println(string(msg.Value))
		go kafka2.Produce(msg)
	}
}
