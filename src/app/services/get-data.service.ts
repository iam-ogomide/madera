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

  productData = [
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 199,
      pdCategory: "Ceiling",
      pdColor: 'Black',
      pdImg: "../../assets/m1.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 499,
      pdCategory: "Floor",
      pdColor: 'Blue',
      pdImg: "../../assets/m2.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 114,
      pdCategory: "Led",
      pdColor: 'Red',
      pdImg: "../../assets/m3.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 119,
      pdCategory: "Modern",
      pdColor: 'Green',
      pdImg: "../../assets/m4.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 149,
      pdCategory: "Retro",
      pdColor: 'Yellow',
      pdImg: "../../assets/m5.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 235,
      pdCategory: "Wood",
      pdColor: 'Grey',
      pdImg: "../../assets/m6.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 675,
      pdCategory: "Ceiling",
      pdColor: 'Grey',
      pdImg: "../../assets/m7.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 156,
      pdCategory: "Retro",
      pdColor: 'Green',
      pdImg: "../../assets/m8.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 765,
      pdCategory: "Led",
      pdColor: 'Blue',
      pdImg: "../../assets/m9.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 532,
      pdCategory: "Wood",
      pdColor: 'Yellow',
      pdImg: "../../assets/m3.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 257,
      pdCategory: "FLoor",
      pdColor: 'Black',
      pdImg: "../../assets/m8.png"
    },
    {
      pdId: 1,
      pdName: "Modern sofa",
      pdPrice: 467,
      pdCategory: "Ceiling",
      pdColor: 'Grey',
      pdImg: "../../assets/m2.png"
    },
  ]
}
