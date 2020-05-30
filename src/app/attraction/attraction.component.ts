import { Attraction } from './../models/attration.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  constructor() { }

  public attractions : Attraction[] = [];
  public attraction : Attraction;


  ngOnInit() {
    this.attractions.push(new Attraction({ Title : "Piazza",   Text: "12", Img: "assets/img/attraction/piazza.jpg"}))
    this.attractions.push(new Attraction({ Title : "Cathedral",   Text: "12", Img: "assets/img/attraction/cathedral.jpg"}))
   /*  this.attractions.push(new Attraction({ Title : "piaza",   Text: "12", Img: "assets/img/attraction/3.jpg"}))
    this.attractions.push(new Attraction({ Title : "piaza",   Text: "12", Img: "assets/img/attraction/4.jpg"}))
    this.attractions.push(new Attraction({ Title : "piaza",   Text: "12", Img: "assets/img/attraction/5.jpg"})) */
    console.log(this.attractions);
    this.attraction = new Attraction();

  }

  active(attraction: Attraction){
      this.attraction.Title = attraction.Title;
      this.attraction.Text = attraction.Text;
  }

}
