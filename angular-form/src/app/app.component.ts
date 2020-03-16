import { Component } from '@angular/core';
import { Customer } from './customer'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits = ['Apples', 'Peaches', 'Pears', 'Plums'];

  customerModel = new Customer('Dandara', 'Navarro', '5287 Barker', 'Apples');

  submitForm = false;

}
