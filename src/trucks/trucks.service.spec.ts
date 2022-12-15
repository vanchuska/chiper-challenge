import { HttpService } from '@nestjs/axios';
import { ConfigType } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { error } from 'console';
import { of, throwError } from 'rxjs';
import config from '../config';
import { FoodTruckResponse } from './dto/food-trucks-api.response.dto';
import { TrucksService } from './trucks.service';

describe('TrucksService', () => {
  let trucksService: TrucksService;
  let httpService: HttpService;
  let configService: ConfigType<typeof config>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrucksService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: config.KEY,
          useValue: {},
        },
      ],
    }).compile();

    trucksService = module.get<TrucksService>(TrucksService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get(config.KEY);
  });

  it('should be defined', () => {
    expect(trucksService).toBeDefined();
    expect(httpService).toBeDefined();
    expect(configService).toBeDefined();
  });

  describe('getFoodTrucks', () => {
    it('should return a FoodTruck Response', async () => {
      // Arrange
      const expectedData: FoodTruckResponse = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-122.39581105302317, 37.794331003246846],
            },
            properties: {
              location_state: '',
              x: '6013916.72',
              location_zip: '',
              applicant: 'Ziaurehman Amini',
              locationdescription: 'MARKET ST: DRUMM ST intersection',
              dayshours: null,
              latitude: '37.794331003246846',
              y: '2117244.027',
              blocklot: '0234017',
              location_address: '',
              noisent: null,
              location_city: '',
              cnn: '30727000',
              objectid: '735318',
              longitude: '-122.39581105302317',
              block: '0234',
              permit: '15MFF-0159',
              status: 'REQUESTED',
              facilitytype: 'Push Cart',
              schedule:
                'http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=15MFF-0159&ExportPDF=1&Filename=15MFF-0159_schedule.pdf',
              lot: '017',
              address: '5 THE EMBARCADERO',
              approved: null,
              fooditems: null,
              received: '20151231',
              expirationdate: new Date('2016-03-15T00:00:00.000'),
              priorpermit: '0',
            },
          },
        ],
        crs: {
          type: 'name',
          properties: {
            name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
          },
        },
      };

      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          data: expectedData,
          status: 200,
          statusText: 'OK',
          config: {},
          headers: {},
        }),
      );
      // Act
      const result = await trucksService.getFoodTrucks();
      // Assert
      expect(result).toEqual(expectedData);
      expect(result).toMatchSnapshot();
    });

    it('should return a empty Response', async () => {
      // Arrange
      const expectedData: FoodTruckResponse = undefined;

      jest.spyOn(httpService, 'get').mockReturnValueOnce(
        of({
          data: expectedData,
          status: 204,
          statusText: 'NO CONTENT',
          config: {},
          headers: {},
        }),
      );
      // Act
      const result = await trucksService.getFoodTrucks();
      // Assert
      expect(result).toEqual(expectedData);
    });

    it('should throw an unexpected error', () => {
      // Arrange
      jest
        .spyOn(httpService, 'get')
        .mockReturnValueOnce(throwError(() => new Error('Unexpected Error')));
      // Assert
      expect(trucksService.getFoodTrucks()).rejects.toThrowError(
        'Unexpected Error',
      );
    });
  });
});
