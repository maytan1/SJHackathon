import { Component } from '@angular/core';
import { HeadComponent } from './head.component';
import { AppbarComponent } from './appbar.component';
import { SidebarComponent } from './sidebar.component';
import { GraphComponent } from './graph.component';
import { MapComponent } from './map.component';


@Component({
  selector: 'my-app',
  template: `
    <header></header>
    <appbar (someEvent)="setGlobalBank($event)"></appbar>
    <sidebar [banks]="banks" [graphRef]="graph"></sidebar>
    <div class="content"><map *ngIf="!screen"></map><graph [class.hide]="!screen" #graph (someOtherEvent)="toggleScreen($event)"></graph></div>
    <div class="content"></div>
    `,
    styles: [`
      .content {
        display: inline-block;
        vertical-align: top;
      }
      .hide {
        display: none;
      }
  `]
})
export class AppComponent  {
  banks: JSON;
  screen = true;

  setGlobalBank(json: JSON): void {
    this.banks = json;
  }

  toggleScreen(clicked: boolean) {
    this.screen = clicked;

  }
}
