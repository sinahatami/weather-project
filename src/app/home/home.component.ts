import { Component } from '@angular/core';

import { ConnectionService } from './../../_services/connection.service';
import { fade } from '../animations'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fade
  ]
})
export class HomeComponent  {

  constructor(private connectionService: ConnectionService) { }

  
  cities = [
    {name: 'prague', value: 1},
    {name: 'edinburgh', value: 2},
    {name: 'paris', value: 3},
    {name: 'madrid' ,value: 4},
    {name: 'lisbon' ,value: 5},
  ]

  public selectedOption: string;
  printedOption: string;
  selected = false;
  imageUrl: string

  moreClick() {
    this.printedOption = this.selectedOption;
    return this.selected = true;
  }

  showImage(){
    if(this.printedOption === 'madrid') {
      return this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg';
    }
    else if(this.printedOption === 'edinburgh') {
      return this.imageUrl = 'https://www.theccc.org.uk/wp-content/uploads/2018/07/iStock-585301598.jpg';
    }
    else if(this.printedOption === 'lisbon') {
      return this.imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Igreja_da_Mem%C3%B3ria_%28Lisbon%29.JPG';
    }
    else if(this.printedOption === 'paris') {
      return this.imageUrl = 'https://wallpapercave.com/download/paris-desktop-wallpaper-uIW2KF5';
    }
    else if(this.printedOption === 'prague') {
      return this.imageUrl = 'http://7wallpapers.net/wp-content/uploads/3_Prague.jpg';
    }
  }

  private tempArray = []
  private windArray = []
  private nextTemps = []
  private a = false
  showNextTemps : boolean = false

  currentWeather() {
    this.connectionService.getCurrentWeather(this.selectedOption)
    .subscribe(resCurrent => {
      this.tempArray = resCurrent['main']
      this.windArray = resCurrent['wind']
    });
    this.connectionService.getNextHour(this.selectedOption)
    .subscribe(resNext => {
      this.nextTemps = resNext['list']
      
      for(let i=0; i < 5; i++) {
      console.log(this.nextTemps[i].main.temp)
      }
    })

    return this.showNextTemps = false
  }

  nextHour() {
    return this.showNextTemps = true
  }

  trackTemp(nextTemp, index) {
    return nextTemp ? index :undefined
  }
  
}

