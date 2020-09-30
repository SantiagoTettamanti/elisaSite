import { Component, OnInit } from '@angular/core';
import tumadre from '../../assets/Coleccion/Data/Collecion.json';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

  public collecion = tumadre;

  constructor() {}
   
  ngOnInit(): void {
  }

}
