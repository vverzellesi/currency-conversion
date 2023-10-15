import {
  Controller,
  Get,
  Headers,
  Query,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';
import { GetExchangeRateDto } from './dto/get-exchange.dto';
import { ExchangeService } from './exchange.service';

export interface ExchangeRateResponse {
  from: string;
  to: string;
  amount: number;
  exchangedAmount: number;
}

@Controller('exchange')
export class ExchangeController {
  constructor(private readonly exchangeService: ExchangeService) { }

  @Get()
  getExchange(
    @Query(ValidationPipe) query: GetExchangeRateDto,
    @Headers('apiKey') apiKey: string,
  ): Promise<ExchangeRateResponse> {
    if (apiKey) {
      return this.exchangeService.getExchange(query.from, query.to, query.amount);
    } else {
      throw new UnauthorizedException('API Key is missing');
    }
  }
}
