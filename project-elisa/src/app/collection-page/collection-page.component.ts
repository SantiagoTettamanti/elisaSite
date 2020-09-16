import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {

  // public images = ["../../assets/Coleccion/2 Final.jpg", "../../assets/Coleccion/3 final.jpg" , "../../assets/Coleccion/4 final.jpg", "../../assets/Coleccion/D2.jpg", "jaime5"]
  
  public images = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  constructor() { }

  ngOnInit(): void {
    let a = "a";
    const b = "b"
  }

}
