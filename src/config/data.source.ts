import { ConfigModule, ConfigService } from "@nestjs/config";
import { DataSource, DataSourceOptions } from "typeorm";


ConfigModule.forRoot({
  envFilePath: `.${process.env.PROJECT_ENVIROMENT}.env`,
  isGlobal: true
});

  // INFO: preparando el mecanismo con cargue dinámico de variables de entorno
  const configService = new ConfigService();

  export const DataSourceConfig: DataSourceOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'montecarlodb',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,    
  }

  export const AppDS = new DataSource(DataSourceConfig)