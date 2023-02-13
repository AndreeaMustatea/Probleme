import { Component} from '@angular/core';

@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.scss']
})
export class DashboardpageComponent  {

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
    

  constructor() {}
}
