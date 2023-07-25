// VALIDACIONES
import { 
  IsString,
  IsEmail, 
  IsNotEmpty, 
  MinLength,
  IsAlphanumeric,
} from 'class-validator';
import { Unique } from 'typeorm';

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  // NOTE: Implementar validación explícita para enviar mensaje de error cuando el EMAIL NO sea único
  @IsEmail()
  @IsNotEmpty()
  // @Unique()
  email: string;
}
