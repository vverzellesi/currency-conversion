import { Module } from '@nestjs/common';
import { ExchangeModule } from './exchange/exchange.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    ExchangeModule,
  ],
})
export class AppModule { }
