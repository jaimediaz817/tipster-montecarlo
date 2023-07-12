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