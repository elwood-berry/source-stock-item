import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-core-select',
  templateUrl: './core-select.component.html',
  styleUrls: ['./core-select.component.css']
})
export class CoreSelectComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato'
  ];

  constructor() {}

  ngOnInit() {}
}
