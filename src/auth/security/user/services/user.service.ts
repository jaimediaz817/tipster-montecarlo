import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

// DTOS
import { RegisterUserDto } from '../dtos/register-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';

import { 
  HttpException, 
  HttpStatus 
} from '@nestjs/common';

// Encriptacion
import * as bcrypt from 'bcrypt';
import { Person } from '../entities/person.entity';
import { UpdaterUserDto } from '../dtos/update-user.dto';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)      
    private userRepository: Repository<User>,
  ) {}

  /**
   * Listar usuarios con su perfil asociado
   * -----------------------
   * url: http://localhost:3000/api/auth/security/user/all
   */
  getUsers(): Promise<User[]> {

    try {
      const users = this.userRepository
        .find({
          relations: {
            profile: true
          },
          select: {
            id: true,
            username: true,
            email: true,
            createdAt: true,
          },
          order: { id: 'desc' }  
        });
      
      return users;
    
    } catch (error) {
      console.log(error);
    }
      
  }

  /**
   * Registro de usuarios
   * -----------------------
   * url: http://localhost:3000/api/auth/security/user/register
   */
  async register(user: RegisterUserDto) {
    try {
      const userFound = await this.userRepository.findOne({
        where: {
          username: user.username
        }
      });
  
      if (userFound) {
        return new HttpException(
          'User already exists', HttpStatus.CONFLICT
        );
      }
  
      // Encriptar password
      const passwordHash = await bcrypt
        .hash(user.password, 10);
      
      // Crea nuevo perfil
      const newProfile = new Person();
      newProfile.full_name = user.full_name;
      newProfile.last_name = user.last_name;

      

      // Crea nueva instancia de User y le asigna el perfil
      const newUser = this.userRepository
        .create({
          username: user.username,
          password: passwordHash,
          email: user.email,
          profile: newProfile
        });
  
        await this.userRepository.save(newUser);
  
        return newUser;
    } catch (error) {
      console.log(error);
    }
    
  }

  /**
   * Actualización de usuarios
   * -----------------------
   * url: http://localhost:3000/api/auth/security/user/update/:id
   */
  async update(id: number, updateUser: UpdaterUserDto) {

    try {

      const userFound = await this.userRepository.findOne({
        where: {
          id
        },
        relations: {
          profile: true
        }
      });
  
      if (!userFound) {
        return new HttpException(
          'User not exists', HttpStatus.CONFLICT
        );
      }

      // Actualiza la info. del User y el perfil asociado (Person)
      const updateUserResult = await this.userRepository
        .createQueryBuilder()
        .update(User)
        .set({
          ...userFound,...updateUser
        })
        .where('id = :id', { id })
        .execute();

        // TODO: esta parte hay que analizarla porque le tengo que pasar este objeto
        await this.userRepository.save(updateUser);
  
        return {
          userFound,
          updateUser,
          result: updateUserResult
        };
    } catch (error) {
      console.log(error);
    }
    
  }

  /**
   * Login de usuarios
   * -----------------------
   * url: http://localhost:3000/api/auth/security/user/login
   */
  async login(user: LoginUserDto) {

    try {
      // Busca el usuario por el email ingresado y carga su perfil
      const userFound = await this.userRepository
        .findOne({
          where: { email: user.email },
          relations: { profile: true }
        });

      // Si no se encuentra el usuario
      if (!userFound) {
        return new HttpException(
          'User not found', HttpStatus.NOT_FOUND
        );
      }

      // Comparar passwords
      const isMatch = await bcrypt
        .compare(user.password, userFound.password);

      // Si no coincide el password
      if (!isMatch) {
        return new HttpException(
          'Incorrect password', HttpStatus.NOT_FOUND
        );
      }

      return ({
        id: userFound.id,
        username: userFound.username,
        email: userFound.email,
        profile: userFound.profile
      });

    } catch (error) {
      console.log(error);
    }

  }

  /**
   * Obtener un usuario mediante su id
   * -----------------------
   * url: http://localhost:3000/api/auth/security/user/getbyid/id
   */
  async getUserById(id: number) {
    try {
      const userFound = await this.userRepository
        .findOne({
          where: { id }, // id: id
          select: {
            id: true,
            username: true,
            email: true,
            createdAt: true
          },
          relations: { profile: true}
        });

        if (!userFound) {
          return new HttpException(
            'User not found', HttpStatus.NOT_FOUND
          );
        }

        return userFound;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Eliminar un usuario mediante su id
   * -----------------------
   * url: http://localhost:3000/api/auth/security/user/delete/id
   */
  async delete(id: number) {
    try {
      const result = await this.userRepository.delete({id});

      if (result.affected === 0) {
        return new HttpException(
          'User not found', HttpStatus.NOT_FOUND
        );
      }

      return result;
    } catch (error) {
      console.log(error);
    }
    
  }

}
