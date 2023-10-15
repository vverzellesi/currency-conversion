import { Module } from '@nestjs/common';
import { ExchangeController } from './exchange.controller';
import { ExchangeService } from './exchange.service';
import { LogModule } from '../log/log.module';

@Module({
    imports: [ExchangeModule, LogModule],
    controllers: [ExchangeController],
    providers: [ExchangeService],
})
export class ExchangeModule { }
