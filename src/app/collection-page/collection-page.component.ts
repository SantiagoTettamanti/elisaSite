import { Component, OnInit } from '@angular/core';
import coleccion from '../../assets/Data/Collecion.json';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

  public coleccion = coleccion;

  constructor() {}
   
  ngOnInit(): void {
  }

}
