import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from './log.schema';
import { LogService } from './log.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }])],
    providers: [LogService],
    exports: [LogService],
})
export class LogModule { }