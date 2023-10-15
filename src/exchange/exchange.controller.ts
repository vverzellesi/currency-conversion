import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { GetExchangeRateDto } from './exchange.dto';
import { ExchangeService } from './exchange.service';

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) { }

  @Get()
  getExchange(@Query(ValidationPipe) query: GetExchangeRateDto): string {
    return this.exchangeService.getExchange(query.from, query.to, query.amount);
  }
}
