import * as mongoose from 'mongoose';

export const UDataSchema = new mongoose.Schema({
    email: String,
    data: Array
});