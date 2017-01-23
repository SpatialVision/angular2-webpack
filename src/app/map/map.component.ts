/**
 * Created by hxg on 18/01/17.
 */
import {Component, Input, ViewChild, Renderer, Query, QueryList, ElementRef} from '@angular/core';
import {MapService} from './map.service';

declare var ol: any;
declare var olcs: any;
//const log = Log.create('map-component');

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService]
})

export class MapComponent {
  @ViewChild('map') map;

  constructor(public renderer:Renderer, private ms: MapService) {
  }

  ngAfterViewInit() {
    console.log(this.map);
    this.ms.instantiate().then(function (found) {
      console.log('Map reference', found);
    })
  }
}
