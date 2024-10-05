import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  getParamValue:any;
  getProductDetails:any;
  count: number = 0;
  getCollectionData : any;

  constructor(private route:ActivatedRoute,private getData:GetDataService,
    private router:Router) { }

  ngOnInit(): void {
    this.getParamValue = this.route.snapshot.paramMap.get('id');

    this.getData.productData.filter((ele:any)=>{
      if(ele.pdId == this.getParamValue)
      {
          this.getProductDetails = ele;
      }
    });

    // this.getCollectionData = this.getData.collectionData;
    this.getCollectionData = this.getData.productData;  
  }

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    this.count -= 1;
  }

}
