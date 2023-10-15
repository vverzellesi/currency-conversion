import { Document } from 'mongoose';

export interface UserDocument extends Document {
    email: string;
    apiKey: string;
}
