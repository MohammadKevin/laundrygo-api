import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usersService.findAll();
  }

  @Get('me')
  findMe() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usersService.findById('1'); // Ganti dengan ID pengguna yang sesuai
  }

  @Get('by-username')
  findByUsername() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usersService.findByUsername('john_doe'); // Ganti dengan username yang sesuai
  }
}
