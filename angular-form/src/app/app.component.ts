/*
  Author: Dandara Navarro
*/
import { Component } from '@angular/core';
import { Customer } from './customer'
import { FormBuilder, Validators }from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits = ['Apples', 'Peaches', 'Pears', 'Plums'];

  fruitsPrice = {'Apples': 1.25, 'Peaches': 1.40, 'Pears': 2.05, 'Plums': 1.70};

  submitted = false;
  submitFruit = false;
  customerInformation = '';

  selectedFruits = {};
  
  constructor(private fb: FormBuilder) {}

  customerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    streetAddress: ['', Validators.required],
  });

  fruitsForm = this.fb.group({
    fruit: [''],
    quantity: ['']
  })

  items = [];

  get streetAddress() {
    return this.customerForm.get('streetAddress').value;
  }

  get customerFullName() {
    return this.customerForm.get('firstName').value + ' ' + this.customerForm.get('lastName').value;
  }

  onSubmit() {
    this.submitted = true;
    if(this.customerForm.valid) {
      this.customerInformation = 'Order for ' +  this.customerFullName + ' at ' + this.streetAddress;
    }
  }

  addFruit(fruit, quantity) {
    this.submitFruit = true;
    if(fruit && quantity){
      for(let item of this.items) {
        if(item.fruit === fruit) {
          item.quantity = item.quantity + parseFloat(quantity);
          item.amount = item.amount + (item.quantity * item.unitPrice);
          this.submitFruit = false;
        }
      }
      if(this.submitFruit) {
        this.items.push({
          'fruit': fruit,
          'quantity': parseFloat(quantity),
          'unitPrice': this.fruitsPrice[fruit],
          'amount': parseFloat(quantity) * this.fruitsPrice[fruit]
        }) 
        this.submitFruit = false;
      }

      this.fruitsForm.reset();
    }
    
  }

  removeItem(item) {
    for(var i=0; i<this.items.length; i++) {
      if(this.items[i].fruit == item.fruit) {
        this.items.splice(i,1);
      }
    }
  }

  getSubtotal () {
    let subtotal = 0;
    for (let item of this.items) {
      subtotal += item.amount;
    }
    return subtotal.toFixed(2);
  }

  getTaxes() {
    let subtotal = parseFloat(this.getSubtotal());
      return (subtotal * (7/100)).toFixed(2)
  }

  getTotal() {
    return (parseFloat(this.getSubtotal()) + parseFloat(this.getTaxes())).toFixed(2);
  }

}
