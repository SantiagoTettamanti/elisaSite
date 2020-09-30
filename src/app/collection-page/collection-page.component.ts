import { Component, OnInit } from '@angular/core';
import collecion from '../../assets/Data/Collecion.json';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

  public collecion = collecion;

  constructor() {}
   
  ngOnInit(): void {
  }

}
