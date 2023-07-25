// VALIDACIONES
import { 
  IsString,
  IsEmail, 
  IsNotEmpty, 
  MinLength,
  IsAlphanumeric,
  IsOptional,
} from 'class-validator';
import { Person } from '../entities/person.entity';

export class UpdaterUserDto {

  id?: number;

  @IsString()
  @IsOptional()
  username: string;

  @IsAlphanumeric()
  @IsOptional()
  @MinLength(8)
  password: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  profile: Person;

}
