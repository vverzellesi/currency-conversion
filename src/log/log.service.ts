import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogDocument } from './log.model';

@Injectable()
export class LogService {
    constructor(
        @InjectModel('Log') private readonly logModel: Model<LogDocument>,
    ) { }

    async saveLog(responseBody: string) {
        const newLog = new this.logModel({ responseBody });
        return newLog.save();
    }
}