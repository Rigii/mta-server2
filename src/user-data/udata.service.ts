import { Model } from 'mongoose';
import { Inject, Injectable, HttpException } from '@nestjs/common';
import { UData } from './interfaces/udata.interface';
import { CreateDataDTO } from './dto/create-udata.dto';
import { UDATA_MODEL_PROVIDER } from '../constants';

@Injectable()
export class UDataService {

    constructor(
        @Inject(UDATA_MODEL_PROVIDER) private readonly postModel: Model<UData>) { }

    async getAllEdata(): Promise<any> {
        return await this.postModel.find().exec();
    }

    async getEdata(dataEmail): Promise<any> {
        let email = String(dataEmail);
        return await this.postModel.findOne({ email: email }).exec()
    }

    async addUser(user: CreateDataDTO): Promise<UData> {
        const createdUser = new this.postModel(user);
        return await createdUser.save();
    }

    async addUserItem(data: object[], email: string): Promise<any> {
        return await this.postModel.updateOne({ email }, { data })
    }

    async deleteItem(email, id): Promise<any> {
        const obj = await this.postModel.findOne({ email: email }).lean().exec()
        let newObj = obj.data.filter(item => item.id !== id)
        return await this.postModel.findOneAndUpdate({ email: email }, { email: email, data: newObj }).exec()
    }

}