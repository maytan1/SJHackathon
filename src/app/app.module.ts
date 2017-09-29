import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatGridListModule} from '@angular/material';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { HeadComponent } from './head.component';
import { AppbarComponent } from './appbar.component';
import { SidebarComponent } from './sidebar.component';
import { CardsComponent } from './cards.component';
import { GraphComponent } from './graph.component';
import { MapComponent } from './map.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatCardModule, MatGridListModule, HttpModule ],
  declarations: [ AppComponent, HeadComponent, AppbarComponent, SidebarComponent, CardsComponent, GraphComponent, MapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
