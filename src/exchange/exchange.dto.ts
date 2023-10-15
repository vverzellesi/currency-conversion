import { IsNumberString, IsString } from 'class-validator';

export class GetExchangeRateDto {
    @IsString()
    from: string;

    @IsString()
    to: string;

    @IsNumberString()
    amount: number;
}
