import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { CenterComponent } from './center/center.component';
import { HistoryComponent } from './history/history.component';
import { AttractionComponent } from './attraction/attraction.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BottombarComponent,
    CenterComponent,
    HistoryComponent,
    AttractionComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
