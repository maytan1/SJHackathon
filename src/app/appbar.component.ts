import {Component, Output, EventEmitter} from '@angular/core';
import {Headers, Http} from '@angular/http';

@Component({selector: 'appbar', template: `
    <div class="icons">
        <span><img src="../img/menu bar.svg"><input [(ngModel)]="search" /><img src="../img/search icon.svg" (click)="onSearch()"></span>
    </div>
    <div class="filters">
        <span>
            Select by 
            <span class="hide"><img src="../img/state icon.svg" /></span>
            <select>
                <option disabled selected>State</option>
            </select>
            <span class="hide"><img src="../img/bank icon.svg" /></span>
            <select>
                <option disabled selected>Bank</option>
            </select>
            <span class="hide"><img src="../img/locality icon.svg" /></span>
            <select>
                <option disabled selected>Locality</option>
            </select>
        </span>
    </div><br/>
    `, styles: [`
        div {
            display: inline-block;
            vertical-align: middle;
            margin: 10px 0px;
            padding: 3px 0px;
            background: #e6e6e6;
            height: 25px;
        }

        .icons {
            width: 312px;
        }

        .icons input {
            border: none;
            height: 23px;
            width: 240px;
        }
        .icons img{
            padding: 0px 6px;
            display: inline-block;
            vertical-align: middle;
            width: 23px;
            height: 23px;
        }

        .filters {
            margin-left: 6px;
            padding-left: 10px;
            padding-right:10px;
        }

        .filters img {
            display: inline-block;
            vertical-align: middle;
            width: 18px;
            height:18px;
        }

        select {
            background: #ffffff;
            border: none;
            height: 23px;
            width: 100px;
        }

        .hide {
            background: white;
            padding-left: 6px;
            padding-right: 4px;
            padding-top: 1px;
            padding-bottom: 2px;
            margin-left: 10px;
        }
  `]})
export class AppbarComponent {
    search = "";
    bank: JSON;
    @Output() someEvent = new EventEmitter<JSON>();

    constructor(private http : Http) {}

    onSearch() : void {
        var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=';
        var api='<api-key>';
        var query= '&keyword='+this.search.replace(" ", "+");
        var location = '&location=30.351848,78.076782';
        var radius = '&radius=2000';
        var restrict = "&type=atm";
        url = url+api+query+location+radius+restrict;
        this.http.get(url).subscribe( _response => {
            this.bank = _response.json().results;
            this.someEvent.next(this.bank);
        });
    }
}
