import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface DataItem {
  name: string;
  age: number;
  address: string;
  job:string;
  donation:string;
}
interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent  {
  userForm!: FormGroup;
  
  listData: any[];
  isVisible = false;
  name!: string;
  age!: number;
  address!: string;
  job!:string;
  donation!:string;
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend', null],
      filterMultiple: true,
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim'}
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: 'descend',
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      sortDirections: ['descend', null],
      listOfFilter: [],
      filterFn: null,
      filterMultiple: true
    },
    {
      name: 'Address',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' },
        {text:'New York',value:'New York'}
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {
      name: 'Job',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.job.length - b.job.length,
      filterMultiple: false,
      listOfFilter: [
        { text: 'Web designer', value: 'Web designer' },
        { text: 'Manager', value: 'Manager' }
      ],
      filterFn: (job: string, item: DataItem) => item.job.indexOf(job) !== -1
    },
    {
      name: 'Donation',
      sortOrder: null,
      sortDirections: ['ascend', 'descend', null],
      sortFn: (a: DataItem, b: DataItem) => a.donation.length - b.donation.length,
      filterMultiple: false,
      listOfFilter: [
        { text: '10$', value: '10$' },
        { text: '15$', value: '15$' }
      ],
      filterFn: (donation: string, item: DataItem) => item.donation.indexOf(donation) !== -1
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      job:'Web designer',
      donation:'10$'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      job:'Manager',
      donation:'10$'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      job:'Manager',
      donation:'15$'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
      job:'Web designer',
      donation:'15$'
    },
    
  ];
 
  
  constructor(private formBuilder: FormBuilder) {
    this.listData = [];

    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required,Validators.minLength(2)],
      address: ['', Validators.required],
      job: ['', Validators.required],
      donation: ['', Validators.required]
    });
  }

  public addItem(): void {
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset(): void {
    this.userForm.reset();
  }
  deleteData(data: DataItem) {
    this.listOfData = this.listOfData.filter(d => d !== data);
  }
 

}
