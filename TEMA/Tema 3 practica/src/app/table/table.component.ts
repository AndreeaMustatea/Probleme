import { Component } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  
  
  listOfColumn: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'John', value: 'John' },
        { text: 'Nicole', value: 'Nicole' },
        { text: 'Khloe', value: 'Khloe' }
      ],
      filterFn: (list: string[], item: Person) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.age- b.age,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Address',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.address.localeCompare(b.address),
      listOfFilter: [
        { text: 'New York', value: 'New York' },
        { text: 'California', value: 'California' },
        { text: 'Florida', value: 'Florida' }
      ],
      filterFn: (address: string, item: Person) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Job title',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.jobTitleName.localeCompare(b.jobTitleName),
      listOfFilter: [
        { text: 'Manager', value: 'Manager' },
        { text: 'Employee', value: 'Employee' },
        { text: 'Web designer', value: 'Web designer' },
      ],
      filterFn: (list: string[], item: Person) => list.some(name => item.jobTitleName.indexOf(name) !== -1)
    },
    {
      name: 'Region',
      sortOrder: null,
      sortFn: (a: Person, b: Person) => a.region.localeCompare(b.region),
      listOfFilter: [
        { text: 'FL', value: 'FL' },
        { text: 'NY', value: 'NY' },
        { text: 'CA', value: 'CA' },
      ],
      filterFn: (list: string[], item: Person) => list.some(name => item.region.indexOf(name) !== -1)
    }
  ];

  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Abbrams',
      age: 30,
      address: 'New York Constitution Street No.178',
      jobTitleName: 'Web designer',
      region:'NY'
    },
    {
      key: '2',
      name: 'Nicole Adam',
      age: 24,
      address: 'Florida Whitemarsh St.Jacksonville',
      jobTitleName: 'Employee',
      region:'FL'
    },
    {
      key: '3',
      name: 'Nicole Portman',
      age: 30,
      address: 'California Miles Street Hawthorne',
      jobTitleName: 'Employee',
      region:'CA'
    },
    {
      key: '4',
      name: 'John Kirby',
      age: 31,
      address: 'New York John Ave.Brookly No. 576',
      jobTitleName: 'Manager',
      region:'NY'
    },
    {
      key: '5',
      name: 'Khloe James',
      age: 31,
      address: 'California Roberts Avenue ',
      jobTitleName: 'Manager',
      region: 'CA'
    }
  ];

  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }
}

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
  jobTitleName: string;
  region: string;

}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<Person> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<Person> | null;
}
