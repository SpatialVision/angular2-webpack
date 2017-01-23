import { Component, OnInit } from '@angular/core';
import {MapComponent} from '../map/map.component'

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home!!');
  }

}
