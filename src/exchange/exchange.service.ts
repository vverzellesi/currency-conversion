import { Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  getExchange(from: string, to: string, amount: number): string {
    return `Exchange from ${from} to ${to} - amount ${amount}`;
  }
}
