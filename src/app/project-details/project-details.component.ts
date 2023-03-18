// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/table-model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent  {


students: Student[] = [
  { id: 1, name: 'John', age: 20, grade: 'A' },
  { id: 2, name: 'Mary', age: 22, grade: 'B' },
  { id: 3, name: 'Peter', age: 18, grade: 'C' },
  { id: 4, name: 'Jenny', age: 21, grade: 'A' },
  { id: 5, name: 'Bob', age: 19, grade: 'B' },
];

displayedColumns: string[] = ['id', 'name', 'age', 'grade'];
  dataSource: MatTableDataSource<Student>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<Student>(this.students);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // the rest of the code
  // data = [
  //   { id: 1, name: 'John' },
  //   { id: 2, name: 'Jane' },
  //   { id: 3, name: 'Bob' }
  // ];

  // displayedColumns = ['id', 'name'];

  // dataSource = new MatTableDataSource(this.data);

  // @ViewChild(MatSort, { static: true })
  // sort!: MatSort;
  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;

  // constructor() {}

  // ngOnInit() {
  //   this.dataSource.sort = this.sort;
  //   this.dataSource.paginator = this.paginator;
  // }

  // applyFilter(filterValue: string) {
  //   this.dataSource.filterPredicate = (data: any, filter: string) => {
  //     return data.name.toLowerCase().indexOf(filter) !== -1;
  //   };
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }


}







