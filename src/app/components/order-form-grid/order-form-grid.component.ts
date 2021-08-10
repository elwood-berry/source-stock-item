import { Component, OnInit } from '@angular/core';

// INTERFACE: SIZES
// export interface StockItemSizes: string[]

// DATA: SIZES
// const ELEMENT_DATA_SIZES: StockItemSizes[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL'];

@Component({
  selector: 'app-order-form-grid',
  templateUrl: './order-form-grid.component.html',
  styleUrls: ['./order-form-grid.component.scss']
})
//
export class OrderFormGridComponent implements OnInit {
  // PROPERTIES
  // public symbols = ELEMENT_DATA_SIZES;

  constructor() {}

  ngOnInit() {}
}
