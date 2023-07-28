npm i -g @nestjs/cli
nest new project-name

nest -h

nest generate -help

AUTH (mod)

    SECURITY (mod)
        ........................
        USER
            - CONTROLLER
                UserController
            - SERVICIO
                UserService
            - ENTITY
                User
                Person
            - DTO
            - ETC..

        ........................
        PERMISSIONROLE
            ROLE
                - CONTROLLER
                - SERVICIO
                - ENTITY
                - DTO
                - ETC..

            PERMISSION
                - CONTROLLER
                - SERVICIO
                - ENTITY
                - DTO
                - ETC..

        ........................
        SUSCRIPTION

            AFILIADO

            RENOVACION

            DISCO


        PAYMENTS
        

BUSINESS

http://localhost:8000/api/auth/security/user/all
http://localhost:8000/api/auth/security/user/edit/{123}
http://localhost:8000/api/auth/security/user/delete/{123}
http://localhost:8000/api/auth/security/user/update

http://localhost:8000/api/auth/security/role/all
http://localhost:8000/api/auth/security/role/edit/{123}
http://localhost:8000/api/auth/security/role/delete/{123}
http://localhost:8000/api/auth/security/role/update

http://localhost:8000/api/auth/security/permission/all
http://localhost:8000/api/auth/security/permission/edit/{123}
http://localhost:8000/api/auth/security/permission/delete/{123}
http://localhost:8000/api/auth/security/permission/update

// BUSINESS
http://localhost:8000/api/business/deportes/equipo/all
http://localhost:8000/api/business/deportes/equipo/edit/{123}
http://localhost:8000/api/business/deportes/equipo/delete/{123}
http://localhost:8000/api/business/deportes/equipo/update




git remote set-url origin https://github.com/jaimediaz817/tipster-montecarlo.git
git remote add origin https://github.com/jaimediaz817/tipster-montecarlo.git
git config --global user.name "jaimediaz817"
git config credential.helper store
git remote remove origin  => elimina el repo remoto




git config --local credential.helper ""
git config --global user.email "jdsolutions817@gmail.com"
git config --global user.name "jaimediaz817"



ssh-keygen -t ed25519 -C "jdsolutions817@gmail.com"
# cuando pida la ubicación: (NOTA: Crear previamente la carpeta)
C:\Users\user\.ssh\proyectos_jdiaz

# Agregar la calve SSH al ssh-agent
ssh-add ~/.ssh/proyectos_jdiaz/id_ssh_jdiaz

# ver la clave pública:
clip < ~/.ssh/proyectos_jdiaz/id_ssh_jdiaz.pub

# NUEVO TOKEN
- fecha de creación:  
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

# NUEVO COMANDO PARA CONECTAR REMOTAMENTE CON EL REPOSITORIO (CUALQUIER REPOSITORIO) 24-06-2023

TOKEN NUEVO: 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

- ejecutar el siguiente comando para actualizar enlace al repositorio remoto
git remote set-url origin https://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@github.com/jaimediaz817/tipster-montecarlo.git


# GIT RESET HARD (DESHACER TODOS LOS CAMBIOS AL COMMIT SELECCIONADO)
git reset --hard [SHA]


# CONEXION A LA BASE DE DATOS MYSQL A TRAVES DE TYPEORM

1-Instalar dependencias[COMANDO] 
npm install --save @nestjs/typeorm typeorm mysql2

2-Importar modulo en app.module 
import { TypeOrmModule } from '@nestjs/typeorm'

3-Setear configuracion de base de datos 
@Module
({ 
    imports: [ 
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
    ]
})

# INSTALACION DE MODULO PARA CONFIGURAR LAS VARIABLES DE ENTORNO (ARCHIVO .ENV)

1- Instalar dependencia
npm i --save @nestjs/config

2- Importar modulo en app.module
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}


# VALIDACION MEDIANTE PIPES EN ENTIDADES

1-Instalar dependencias
npm i --save class-validator class-transformer

2-Agregar en main.ts
import { ValidationPipe } from '@nestjs/common';

app.useGlobalPipes(new ValidationPipe());