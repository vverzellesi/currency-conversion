import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

export interface CreateUserResponse {
    email: string;
    apiKey: string;
}

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async createUser(
        @Body() userData: CreateUserDto,
    ): Promise<CreateUserResponse> {
        return await this.userService.createUser(userData);
    }
}
