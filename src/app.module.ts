import { Module } from '@nestjs/common';
import { UDataModule } from './user-data/udata.module';

@Module({
  imports: [UDataModule]
})

export class AppModule {}