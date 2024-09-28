import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  collectionData = [
    {
      id: 1,
      name: 'Pot',
      img: '../../assets/ab1.png',
      code: 'pot',
      price:23,
    },
    {
      id: 2,
      name: 'Lame',
      img: '../../assets/ab2.png',
      code: 'lamp',
      price:43,
    },
    {
      id: 3,
      name: 'Chair',
      img: '../../assets/ab3.png',
      code: 'chair',
      price:93,
    },
  ];
}
