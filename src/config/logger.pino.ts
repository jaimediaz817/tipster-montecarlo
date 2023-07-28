import { ConfigModule } from "@nestjs/config";
import { CORRELATION_ID_HEADER } from "src/correlation-id/correlation-id.middleware"
import { Request } from 'express';

ConfigModule.forRoot({
  envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
  isGlobal: true
});

export const LoggerPinoConfig = {
  transport: process.env.PROJECT_ENVIROMENT === 'develop' ? {
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
