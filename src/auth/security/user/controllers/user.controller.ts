import { 
  Controller,  
  Body,   
  Param,
  ParseIntPipe,
  Get,
  Post,
  Put,
  Delete,
  Logger,
} from '@nestjs/common';

// DTOS
import { RegisterUserDto } from '../dtos/register-user.dto';
import { LoginUserDto } from '../dtos/login-user.dto';

import { UserService } from '../services/user.service';

import { User } from '../entities/user.entity';
import { UpdaterUserDto } from '../dtos/update-user.dto';

@Controller('auth')
export class UserController {
  
  // definiendo propiedad privada para gestión del logger 
  private readonly logger = new Logger(UserController.name);

  constructor(private userService: UserService) {}

  // http://localhost:3000/api/auth/security/user/all
  @Get('security/users/all')
  getUsers(): Promise<User[]> {
    this.logger.log("get all users - test logger");
    return this.userService.getUsers();
  }

  // http://localhost:3000/api/auth/security/user/register
  @Post('security/user/register')
  register(@Body() newUser: RegisterUserDto) {
    return this.userService.register(newUser);
  }

  // http://localhost:3000/api/auth/security/user/register
  @Put('security/user/update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: UpdaterUserDto
  ) {
    return this.userService.update(id, updateUser);
  }

  // OBTENER USUARIO MEDIANTE EL ID
  // http://localhost:3000/api/auth/security/user/getbyid/id
  @Get('security/user/getbyid/:id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserById(id);
  }

  // http://localhost:3000/api/auth/security/user/login
  @Post('security/user/login')
  login(@Body() user: LoginUserDto) {
    return this.userService.login(user);
  }

  // http://localhost:3000/api/auth/security/user/delete/id
  @Delete('security/user/delete/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }

}
