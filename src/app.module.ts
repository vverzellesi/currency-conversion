import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ExchangeModule,
    UserModule,
  ],
})
export class AppModule { }
