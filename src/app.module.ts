// MODULOS
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './auth/security/user/user.module';
import { LoggerModule } from 'nestjs-pino';
import { CORRELATION_ID_HEADER, CorrelationIdMiddleware } from './correlation-id/correlation-id.middleware';
import { Request } from 'express';
import { DataSourceConfig } from './config/data.source';
import { LoggerPinoConfig } from './config/logger.pino';

@Module({

  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
      isGlobal: true 
    }),
 
    /*
    * CONEXION A MYSQL
    */
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '127.0.0.1',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'montecarlodb',
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),

    TypeOrmModule.forRoot(
      DataSourceConfig
    ),

    /**
     * NOTE: LOGGER - PINO
    */
    LoggerModule.forRoot({
      pinoHttp: LoggerPinoConfig
      // pinoHttp: {
      //   transport: process.env.PROJECT_ENVIROMENT === 'develop' ? {
      //     target: 'pino/file', // pino-pretty
      //     options: {
      //       messageKey: 'message',
      //       // destination: `${__dirname}/auth/security/user/logs/user-module.log`,   
      //     },
      //   } : undefined,
      //   messageKey: 'message',
      //   customProps: (req: Request) => {
      //     return {
      //       correlationId: req[CORRELATION_ID_HEADER],
      //     }
      //   },          
      //   autoLogging: false,
      //   serializers: {
      //     req: () => {
      //       return undefined
      //     },
      //     res: () => {
      //       return undefined
      //     }            
      //   },
      // }
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
