// VALIDACIONES
import { 
  IsString,
  IsEmail, 
  IsNotEmpty, 
  MinLength,
  IsAlphanumeric,
} from 'class-validator';

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

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
