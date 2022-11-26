import { Module } from '@nestjs/common';
import { TrucksService } from './trucks.service';
import { TrucksController } from './trucks.controller';
import { HttpModule } from '@nestjs/axios';
import { HttpConfiService } from 'src/httpService.config';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass :HttpConfiService,
    }),
    TrucksModule,
    
  ],
  controllers: [TrucksController],
  providers: [TrucksService]
})
export class TrucksModule {}
