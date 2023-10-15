import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';

@Module({
    imports: [ExchangeModule],
    controllers: [ExchangeController],
    providers: [ExchangeService],
})
export class ExchangeModule { }
