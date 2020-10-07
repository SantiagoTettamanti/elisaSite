import { Component, OnInit } from '@angular/core';
import illustrations from '../../assets/Data/Ilustraciones.json'
@Component({
  selector: 'app-illustrations-page',
  templateUrl: './illustrations-page.component.html',
  styleUrls: ['./illustrations-page.component.css']
})
export class IllustrationsPageComponent implements OnInit {
  
  // public images = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  public images = illustrations;
  constructor() { }

  ngOnInit(): void {
  }

}
