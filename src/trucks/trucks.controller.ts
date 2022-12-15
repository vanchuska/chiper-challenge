import { Controller, Get, Logger, Res,HttpStatus } from '@nestjs/common';
import { response } from 'express';
import { TrucksService } from './trucks.service';

@Controller('trucks')
export class TrucksController {
  private readonly logger = new Logger('trucks');
  constructor(private readonly trucksService: TrucksService) {}

  @Get()
  getFoodTrucks() {
    this.logger.warn('getFoodTrucks');
    return this.trucksService.getFoodTrucks();
  }

  // @Get('api')
  // getTrucks(@Res() response) {
  //   this.logger.warn('getFoodTrucks');
  //   return this.trucksService.getFoodTrucks().then(res => {
  //     response.status(HttpStatus.CREATED).json(res);
  //   }).catch((err)=> {
  //     response.status(HttpStatus.NO_CONTENT).json(err);
  //   })
     
  // }
}
