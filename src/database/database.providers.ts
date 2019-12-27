import * as mongoose from 'mongoose';
import { DB_PROVIDER } from '../constants'; 

export const databaseProviders = [
    {
        provide: DB_PROVIDER,
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect('mongodb+srv://Jo:150386@cluster0-0ramq.mongodb.net/test?retryWrites=true&w=majority');
        },
    },
];