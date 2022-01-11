import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  t:string='matrix';
 

  constructor() { }

  ngOnInit(): void {
    this.getFilmsData();
  }
  getFilmsData():void{
    //récupérer les données de l'api
    fetch(`http://www.omdbapi.com/?apikey=fd08b03&t=matrix`)
    .then(response=>response.json())
    .then(data=>this.setFilmsData(data));
  }
  setFilmsData(data:any):void{
    
  }
  searchFilm(){
    this.getFilmsData
  }
}

