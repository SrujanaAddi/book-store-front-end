import { Component } from '@angular/core';
import { APP_NAME } from 'src/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  APP_NAME = APP_NAME;
  ngOnInit() {

  }
}
