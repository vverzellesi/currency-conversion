import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExchangeConfig } from './config';
import { ExchangeRateResponse } from './exchange.controller';

@Injectable()
export class ExchangeService {
  async getExchange(
    from: string,
    to: string,
    amount: number,
  ): Promise<ExchangeRateResponse> {
    try {
      const coinbaseUrl = `${ExchangeConfig.coinbaseUrl}?currency=${from}`;
      const coinbaseResponse = await axios.get(coinbaseUrl);

      if (coinbaseResponse.status === 200 && coinbaseResponse.data) {
        const targetValue = coinbaseResponse.data.data.rates[to];
        const exchangedAmount = amount * targetValue;

        return {
          from,
          to,
          amount,
          exchangedAmount,
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
