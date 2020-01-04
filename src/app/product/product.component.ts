import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  arr: Array<{ id: number, Pro_Code: string, Price: number}> = [
    { id: 1, Pro_Code: 'P001', Price: 2500},
    { id: 2, Pro_Code: 'P002', Price: 800},
    { id: 3, Pro_Code: 'P003', Price: 3200},
    { id: 4, Pro_Code: 'P004', Price: 1000},
    { id: 5, Pro_Code: 'P005', Price: 4600}
  ];

  constructor() { }

  ngOnInit() {
  }
}
