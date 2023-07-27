import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NOTE: LOGGER - PINO
  app.useLogger(app.get(Logger))
  
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api'); //Agrega el prefijo /api/
  app.enableCors(); // Habilitar CORS
  await app.listen(3000);
}
bootstrap();
