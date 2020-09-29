import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public images = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  constructor() { }
  

  ngOnInit(): void {
  }

}
