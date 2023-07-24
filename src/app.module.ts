// MODULOS
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './auth/security/user/user.module';

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
    
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
