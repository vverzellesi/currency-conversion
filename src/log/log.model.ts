import { Document } from 'mongoose';

export interface LogDocument extends Document {
    timestamp: Date;
    responseBody: string;
}