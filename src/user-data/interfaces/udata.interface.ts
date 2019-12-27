import { Document } from 'mongoose';

export interface UData extends Document {
    readonly email: string,
    readonly data: object[]
}