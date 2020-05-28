import { MapComponent } from './map/map.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { HistoryComponent } from './history/history.component';
import { AttractionComponent } from './attraction/attraction.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: CenterComponent,
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'attraction',
    component: AttractionComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  { path: '**', redirectTo: '/', } //Colocar por ultimo!
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
