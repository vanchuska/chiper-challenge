import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import {AxiosResponse} from 'axios'
import {HttpService} from '@nestjs/axios'
import { map, catchError, lastValueFrom ,firstValueFrom} from 'rxjs';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { FoodTruckResponse } from './dto/food-trucks-api.response.dto';

@Injectable()
export class TrucksService {
    constructor(private httpService: HttpService,
        @Inject(config.KEY) private configService: ConfigType<typeof config>,) {}

    async getTrucks() {
        const request = this.httpService
            .get(this.configService.food_truck_api_url+'?$$app_token='+this.configService.food_truck_app_token)
            .pipe(map((res) => res.data))
            .pipe(
            catchError(() => {
                throw new ForbiddenException('API not available');
            }),
            );
        
        const trucks = await lastValueFrom(request);
        
        return {
          data: {
            trucks,
          },
        };
        }

    async getFoodTrucks():Promise<AxiosResponse<FoodTruckResponse>> {
        const {data} = await firstValueFrom(
            this.httpService.get(this.configService.food_truck_api_url+'?$$app_token='+this.configService.food_truck_app_token)
        );
        console.log(data);
        return data;
        }
}
