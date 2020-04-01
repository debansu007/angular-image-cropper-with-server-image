import { Component, OnInit } from '@angular/core';
declare var Croppie: any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  el:any;
  resize: any;
  ngOnInit() {
  this.el = document.getElementById('resizer-demo');
  this.resize = new Croppie(this.el, {
      viewport: { width: 100, height: 100 },
      boundary: { width: 300, height: 300 },
      showZoomer: false,
      enableResize: true,
      enableOrientation: true,
      mouseWheelZoom: 'ctrl'
  });
  this.resize.bind({
      url: 'https://i.imgur.com/xD9rzSt.jpg',
  });
  document.getElementById('resizer-demo').addEventListener('update', function(ev: any) { var cropData = ev.detail; });
  }
  res() {
    this.resize.result('base64').then(function(base64) {
      console.log(base64);
    });
  }
}
