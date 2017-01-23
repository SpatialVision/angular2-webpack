/**
 * Created by hxg on 18/01/17.
 */
import {Component, Input, ViewChild, Renderer, Query, QueryList, ElementRef} from '@angular/core';
import {MapService} from './map.service';

declare var ol: any;
declare var olcs: any;

@Component({
  selector: 'cesium-button',
  templateUrl: './cesium-button.component.html',
  styleUrls: ['./cesium-button.component.scss'],
  providers: [MapService]
})
export class CesiumButtonComponent {
  @ViewChild('cesiumButton') cesiumButton;

  constructor(public renderer:Renderer, private ms: MapService) {
  }

  toggle3D(){
    console.log('toggle3D: toggling 3d mode on cesium!');
    this.ms.map().then(function (found) {
      console.log('mapRef', found);
      var ol3d = new olcs.OLCesium({map: found});
      ol3d.setEnabled(true);
    })
  }

}
