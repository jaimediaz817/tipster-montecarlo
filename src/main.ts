import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NOTE: LOGGER - PINO
  app.useLogger(app.get(Logger))
  
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api'); //Agrega el prefijo /api/
  app.enableCors(); // Habilitar CORS

  // INFO: preparando el mecanismo con cargue dinámico de variables de entorno
  const configService = app.get(ConfigService);
  console.log("ConfigService: ", configService.get('APP_PORT'));
  
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
