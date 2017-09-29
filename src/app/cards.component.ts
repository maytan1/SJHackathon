import { Component, Input } from '@angular/core';
import {Headers, Http} from '@angular/http';

@Component({
    selector: 'cards',
    template: `
    <div class="card" *ngIf="bankDet">
        <img src={{bankDet.icon}} class="bankPic">
        <div class="bankDet">
            <br />
            <b>{{bankDet.name}}</b><br />
            <img src="./img/locality icon.svg" class="icons" />{{bankDet.address_components[0].short_name}}, {{bankDet.address_components[1].short_name}}, {{bankDet.address_components[2].short_name}}<br />
            <img src="./img/website  icon.svg" class="icons" />{{website}}<br />
            <img src="./img/phone  icon.svg" class="icons" />{{bankDet.international_phone_number}}<br />
        </div>
    </div>
    `,
    styles: [`
        .card {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-top: 2px;
            height: 90px;
            width: 100%;
            padding-top:5px;
            background: #e6e6e6;
        }

        .card .bankPic {
            padding-left: 5px;
            width: 70px;
            height: 70px;
            float: left;
        }

        .card .bankDet {
            padding-left: 6px;
            float: left;
            line-height: 1.6;
            font-size: 9px;
        }

        .card .icons {
            width: 10px;
            height: 10px;
            padding-right: 2px;
        }
    `]
})

export class CardsComponent {
    bank: JSON;
    @Input('bank')
    set _bank(val:JSON) {
        this.bank = val;
        this.getBankDetails();
    }
    website: string;

    bankDet: JSON;

    constructor(private http : Http) {}

    nthIndex(str:string, pat:string, n:number){
        return str.split(pat, n).join(pat).length;
    }

    getBankDetails() {
        var url = 'https://maps.googleapis.com/maps/api/place/details/json?key=';
        var api='<api-key>';
        var placeid = '&placeid='+this.bank['place_id'];
        url = url+api+placeid;
        this.http.get(url).subscribe( _response => {
            this.bankDet = _response.json().result;
            this.website = JSON.stringify(this.bankDet['website']);
            this.website = this.website.substring(1 ,this.nthIndex(this.website, "/", 3));
        });
    }
}