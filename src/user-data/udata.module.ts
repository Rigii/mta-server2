import { Module } from '@nestjs/common';
import { UDataController } from './udata.controller';
import { UDataService } from './udata.service';
import { udataProviders } from './udata.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [UDataController],
    providers: [UDataService, ...udataProviders],
    exports: [UDataService]
})
export class UDataModule { }