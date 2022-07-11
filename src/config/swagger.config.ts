import { DocumentBuilder } from '@nestjs/swagger';
import config from './index';

export default new DocumentBuilder()
  .setTitle('NestJS wth The Graph')
  .setDescription('The NestJS template API description')
  .setVersion('1.0')
  .addBearerAuth()
  .addServer(`http://${config.server.baseUrl}${config.server.routePrefix}`)
  .addServer(`https://${config.server.baseUrl}${config.server.routePrefix}`)
  .build();
