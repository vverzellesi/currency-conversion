import * as mongoose from 'mongoose';

export const LogSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now,
    },
    responseBody: {
        type: String,
    }
});

