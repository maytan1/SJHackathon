import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material';

@Component({
    selector: 'graph',
    template: `
    <div class="graph">
      <h3 *ngIf="bank">{{bank.name}}</h3>
      <span *ngIf="bank"><img src="../img/address  icon.svg" width="10px"/><a (click)="hideGraph()" >{{bank.vicinity}}</a></span>
      <br />
      <md-grid-list cols="2" rowHeight="2:1">
        <md-grid-tile><md-card><img src="../img/temperature.png" width="300px" /></md-card></md-grid-tile>
        <md-grid-tile><md-card><img src="../img/humidity.png" width="300px" /></md-card></md-grid-tile>
      </md-grid-list>
    <md-grid-list cols="3" rowHeight="2:1">
      <md-grid-tile>
        <md-card>
          <img src="../img/ac icon.svg" width="70px" />
          <div class="details">
          Status: ON<br />
          Set point: 24°C<br /><br />
          OFF<img src="../img/on off icon.svg" width="25px">ON
          </div>
        </md-card>
      </md-grid-tile>
      <md-grid-tile>
      <md-card>
        <img src="../img/ac icon.svg" width="70px" />
        <div class="details">
        Status: ON<br />
        Set point: 24°C<br /><br />
        OFF<img src="../img/on off icon.svg" width="25px">ON
        </div>
        </md-card>
      </md-grid-tile>
        <md-grid-tile>
        <md-card>
          <img src="../img/signage  icon.svg" width="60px" />
          <div class="details">
          Status: ON<br />
          <br /><br />
          OFF<img src="../img/on off icon.svg" width="25px">ON
          </div>
          </md-card>
        </md-grid-tile>
    </md-grid-list>
    </div>
    `,
    styles: [`
      .graph {
          width: 1000px;
          height: 485px;
          padding-left: 6px;
          font-size: 10px;
      }
      img {
          padding: 0px 5px;
      }
      .details {
        padding-left: 20px;
        display: inline-block;
        width: 170px;
      }
    `]
  })
  export class GraphComponent  {
    bank: JSON;
    @Output() someOtherEvent = new EventEmitter<boolean>();

    setBank(bank: JSON) {
      this.bank = bank;
    }

    hideGraph(): void {
      this.someOtherEvent.next(false);
    }
  }
  