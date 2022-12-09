import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  friendslist = [
    { img : "https://cdnimg.webstaurantstore.com/images/products/large/194425/1955560.jpg",
      name: 'Wildflower Honey',
      price: 'Natural honey'
    },
    { img : "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2021/3/creamed_honey.jpg",
      name: 'Creamed Honey',
      price: 'Natural honey'
    },
    { img : "https://www.webstaurantstore.com/images/products/large/65971/1687214.jpg",
      name: 'Eucalyptus Honey',
      price: 'Natural honey'
    },
    { img : "https://www.webstaurantstore.com/images/products/large/166361/2134499.jpg",
      name: 'Orange Blossom Honey',
      age: 'Natural honey'
    },
    { img : "https://cdnimg.webstaurantstore.com/images/products/large/567515/2077300.jpg",
      name: 'Alfalfa Honey',
      age: 'Natural honey'
    },
    { img : "https://www.webstaurantstore.com/images/products/large/567585/2077284.jpg",
      name: 'Buckwheat Honey',
      age: 'Natural honey'
    },
  ]
}
