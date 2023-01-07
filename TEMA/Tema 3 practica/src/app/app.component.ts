import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tema3';
  plans: any[] = [
    {
      name: "Eucalyptus Honey",
      price: "$24.99"
    },
    {
      name: 'Orange Blossom Honey',
      price: "$20.99"
    },
    {
      name: "Wildflower Honey",
      price: "$15.99"

    }]
    other: any[]=[
    {
      name: "Alfalfa Honey",
      price: "$20.99"
    },
    {
      name: "Buckwheat Honey",
      price: "$15.99"
    },
    {
      name:"Creamed Honey",
      price:"20.99"
    }
  ]

  constructor() {}
}