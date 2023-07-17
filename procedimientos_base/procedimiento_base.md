npm i -g @nestjs/cli
nest new project-name

nest -h

nest generate -help

AUTH (mod)

    SECURITY (mod)
        USER
            controllers
                -UserController
            services
                -UserService
            dtos
            entities


        - CONTROLLER
        - SERVICIO
        - ENTITY
        - DTO
        - ETC..

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

    SUSCRIPTION

        AFILIADO

        RENOVACION

        DISK


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
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

# NUEVO COMANDO PARA CONECTAR REMOTAMENTE CON EL REPOSITORIO (CUALQUIER REPOSITORIO)
git remote set-url origin https://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@github.com/jaimediaz817/tipster-montecarlo.git

