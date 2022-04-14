import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Angular!!!';
  diametro = 23;
  isLoggedIn = true;

  isDisabled = false;
  imageUrl = 'https://wallpapersdsc.net/wp-content/uploads/2015/11/Pizza_HD3.jpg';
  imageSize = 300;

  count = 0;

  users = [
    {nome: 'Paolino', cognome: 'Paperino', gender: 'M'},
    {nome: 'Gastone', cognome: 'Ppaerone', gender: 'M'},
    {nome: 'Pippo', cognome: 'Pippi', gender: 'M'},
    {nome: 'Minnie', cognome: 'Pippi', gender: 'F'},
    {nome: 'Pippo', cognome: 'Pippi', gender: 'M'},
    {nome: 'Paperina', cognome: 'Pippi', gender: 'F'},
  ];

  handleClick(event: Event) {
    console.log(event);
  }

  isVisible = true;


  onKeyDown(event: KeyboardEvent) {
    console.log(event);
  }

  price = 5.98;
  data = new Date();

  getClass(value: number) {
    return ({
      low: value < 4,
      medium: value >=4 && value < 10,
      high: value >=10
    })
  }
}
