import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  title = 'tema2';
  plans = [
    {
      type: "Wildflower Honey",
      price: "price: $14.95",
      describe:"Honey is a sweet fluid made by honeybees using the nectar of flowering plants. There are about 320 different varieties of honey, which vary in color, odor and flavor. Honey contains mostly sugar, as well as a mix of amino acids, vitamins, minerals, iron, zinc and antioxidants."
    },
    {
      type: "Eucalyptus Honey",
      price: "price: $20.00",
      describe:"Honey is a sweet fluid made by honeybees using the nectar of flowering plants. There are about 320 different varieties of honey, which vary in color, odor and flavor. Honey contains mostly sugar, as well as a mix of amino acids, vitamins, minerals, iron, zinc and antioxidants."
    },
    {
      type: "Buckwheat Honey",
      price: "price: $20.00",
      describe:"Honey is a sweet fluid made by honeybees using the nectar of flowering plants. There are about 320 different varieties of honey, which vary in color, odor and flavor. Honey contains mostly sugar, as well as a mix of amino acids, vitamins, minerals, iron, zinc and antioxidants."
      
    }
  ]
  constructor(private router:Router){}
}
