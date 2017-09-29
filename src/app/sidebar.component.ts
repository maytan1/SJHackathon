import { Component, Input } from '@angular/core';
import { GraphComponent } from './graph.component';
import { CardsComponent } from './cards.component';

@Component({
    selector: 'sidebar',
    template: `
    <div class="sidebar">
      <div style="width:100%; height:100%" *ngIf=banks>
        <cards *ngFor="let bank of banks" [bank]="bank" (click)="onSelect(bank)"></cards>
      </div>
    </div>
    `,
    styles: [`
        .sidebar {
            display: inline-block;
            height: 485px;
            width: 312px;
            overflow-y: scroll;
        }
    `]
})

export class SidebarComponent {
    @Input() banks: JSON;
    @Input() graphRef: GraphComponent;

    onSelect(bank: JSON) {
        this.graphRef.setBank(bank);
    }
}