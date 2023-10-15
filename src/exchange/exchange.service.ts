import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExchangeConfig } from './config';
import { ExchangeRateResponse } from './exchange.controller';
import { LogService } from '../log/log.service';

@Injectable()
export class ExchangeService {
  constructor(private readonly logService: LogService) { }

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
        const reponseObject = {
          from,
          to,
          amount,
          exchangedAmount,
        };

        this.logService.saveLog(JSON.stringify(reponseObject));

        return reponseObject;
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
