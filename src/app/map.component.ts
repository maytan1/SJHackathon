import { Component, Input } from '@angular/core';

@Component({
    selector: 'map',
    template: `
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13770.687329236573!2d78.06377439977871!3d30.360275138213485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBanks!5e0!3m2!1sen!2s!4v1506253817125" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    `,
    styles: [`
      .map {
          width: 800px;
          height: 485px;
          padding: 30px;
          padding-left:70px;
          font-size: 10px;
      }
    `]
  })
  export class MapComponent  {
    @Input() bank: JSON;
  }
  