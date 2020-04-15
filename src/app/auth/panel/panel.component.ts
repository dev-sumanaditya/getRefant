import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('canvas', '/assets/js/particlesjs-config.json', () => {
      console.log('loaded');
    });
  }

}
