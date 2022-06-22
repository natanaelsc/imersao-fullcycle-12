import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { Producer } from '@nestjs/microservices/external/kafka.interface';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController implements OnModuleInit {
  private kafkaProducer: Producer;
  constructor(
    private readonly routesService: RoutesService,
    @Inject('KAFKA_SERVICE')
    private kafkaClient: ClientKafka,
  ) {}

  @Get(':id/start')
  startRoute(@Param('id') id: string) {
    console.log(id);
    this.kafkaProducer.send({
      topic: 'route.new-direction',
      messages: [
        {
          key: 'route.new-direction',
          value: JSON.stringify({ routeId: id, clientId: '' }),
        },
      ],
    });
  }

  async onModuleInit() {
    this.kafkaProducer = await this.kafkaClient.connect();
  }

  @MessagePattern('route.new-position')
  consumeNewPosition(
    @Payload()
    message: {
      value: {
        routeId: string;
        clientId: string;
        position: [number, number];
        finished: boolean;
      };
    },
  ) {
    console.log(message.value);
  }

  @Get()
  findAll() {
    return this.routesService.findAll();
  }
}
