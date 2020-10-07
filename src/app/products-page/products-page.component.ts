import { Component, OnInit } from '@angular/core';
import products from '../../assets/Data/Product.json';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public images = products;
  constructor() { }
  

  ngOnInit(): void {
  }

}
