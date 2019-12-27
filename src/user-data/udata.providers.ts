import { Connection } from 'mongoose';

import { UDataSchema } from './udata.schema';
import { UDATA_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const udataProviders = [
    {
        provide: UDATA_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Post', UDataSchema),
        inject: [DB_PROVIDER],
    },
];