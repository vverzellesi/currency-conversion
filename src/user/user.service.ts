import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 } from 'uuid';
import { UserDocument } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResponse } from './user.controller';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<UserDocument>,
    ) { }

    async createUser(userData: CreateUserDto): Promise<CreateUserResponse> {
        const apiKey = v4();
        const newUser = new this.userModel({ email: userData.email, apiKey });

        return newUser.save();
    }
}
