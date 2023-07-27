// MODULOS
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './auth/security/user/user.module';
import { LoggerModule } from 'nestjs-pino';
import { CORRELATION_ID_HEADER, CorrelationIdMiddleware } from './correlation-id/correlation-id.middleware';
import { Request } from 'express';

@Module({
  imports: [
    ConfigModule.forRoot(),

    /*
    * CONEXION A MYSQL
    */
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: '',
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    
      /**
       * NOTE: LOGGER - PINO
      */
      LoggerModule.forRoot({

        pinoHttp: {
          transport: process.env.PROJECT_ENVIROMENT === 'development' ? {
            target: 'pino/file', // pino-pretty
            options: {
              messageKey: 'message',
              // destination: `${__dirname}/auth/security/user/logs/user-module.log`,   
            },
          } : undefined,
          messageKey: 'message',
          customProps: (req: Request) => {
            return {
              correlationId: req[CORRELATION_ID_HEADER],
            }
          },          
          autoLogging: false,
          serializers: {
            req: () => {
              return undefined
            },
            res: () => {
              return undefined
            }            
          },
        }
      }),

    UserModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes("*");
  }
}
