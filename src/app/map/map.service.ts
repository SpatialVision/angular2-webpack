/**
 * Created by pf2 on 20/01/2017.
 */

import {Injectable, Component, Input, Output, ViewChild, Renderer, Query, QueryList, ElementRef, EventEmitter} from '@angular/core';

declare var ol: any;
declare var olcs: any;

@Injectable()
export class MapService {

  static mapRef:any;

  constructor() {
  }

  static setMapRef(val) {
    MapService.mapRef = val;
  }

  static getMapRef() {
    return MapService.mapRef;
  }

  instantiate() {
    var map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([148.9143431,-32.6560775]),
        zoom: 6
      })
    });

    MapService.setMapRef(map);

    return new Promise((resolve, reject) => {
      resolve(MapService.getMapRef());
    });
  }

  map() {
    var mapRef = MapService.getMapRef();
    if(mapRef) {
      return new Promise((resolve, reject) => {
        resolve(mapRef);
      });
    }
    return this.instantiate();
  }

}
