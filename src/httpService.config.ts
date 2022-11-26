import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpConfiService implements HttpModuleOptionsFactory{
    createHttpOptions(): HttpModuleOptions{
        return { headers: {
            puerto : process.env.PORT, // ejemplo
        } };
    }

}