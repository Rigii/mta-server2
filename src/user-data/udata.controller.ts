import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CreateDataDTO } from './dto/create-udata.dto';
import { UDataService } from './udata.service';
import { UData as UDataInterface } from './interfaces/udata.interface';

@Controller('users')
export class UDataController {
    constructor(private readonly udataService: UDataService) { }

    @Get()
    async getAllEdata() {
        return this.udataService.getAllEdata();
    }

    @Get(':dataEmail')
    async getEdata(@Param('dataEmail') dataEmail: string) {
        return this.udataService.getEdata(dataEmail);
    }

    @Post()
    async create(@Body() CreateDataDTO: CreateDataDTO) {
        return this.udataService.addUser(CreateDataDTO);
    }

    @Put(':dataEmail')
    async addItem(@Body() data: object[], @Param('dataEmail') dataEmail: string) {
        return this.udataService.addUserItem(data, dataEmail);
    }

    @Delete(':dataEmail')
    async deleteItem(@Body() payload: { id: String }, @Param('dataEmail') dataEmail: string) {
        return this.udataService.deleteItem(dataEmail, payload.id);
    }

}