import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll(): Record<string, string | number>[] {
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: 10,
      },
      {
        name: 'Lily',
        color: 'White',
        price: 15,
      },
      {
        name: 'Tulip',
        color: 'Yellow',
        price: 20,
      },
      {
        name: 'Daisy',
        color: 'Pink',
        price: 25,
      },
    ];
  }
}
