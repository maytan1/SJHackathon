import {Component} from '@angular/core';

@Component({
    selector: 'header',
    template: `
    <div class="nav">
        <img src="../img/logo.svg" class="logo" />
        <div class="addn">
            <img src="../img/temprature  icon.svg" />{{temperature}}
            <img src="../img/humidity   icon.svg" />{{humidity}}
            <img src="../img/online status.svg" class="online" />
            <img src="../img/top side  menu.svg" />
        </div>
    </div>
    `,
    styles: [`
        .nav {
            background: black;
            padding-top: 5px;
            height: 50px;
            width: 100%;
        }
        .nav .logo {
            position: absolute;
            left: 50%;
            width: 40px;
            height: 40px;
        }

        .addn {
            float: right;
            color: white;
            font-size: 20px;
            padding-right: 10px;
        }

        .addn img{
            width: 30px;
            height: 30px;
        }

        .addn .online {
            padding-left: 30px;
            width: 10px;
            height: 10px;
        }
    `]
})

export class HeadComponent {
    temperature = '0°/0°';
    humidity = '0%';
}