// import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent  implements AfterViewInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
   announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

// students: Student[] = [
//   { id: 1, name: 'John', age: 20, grade: 'A' },
//   { id: 2, name: 'Mary', age: 22, grade: 'B' },
//   { id: 3, name: 'Peter', age: 18, grade: 'C' },
//   { id: 4, name: 'Jenny', age: 21, grade: 'A' },
//   { id: 5, name: 'Bob', age: 19, grade: 'B' },
// ];

// displayedColumns: string[] = ['id', 'name', 'age', 'grade'];
//   dataSource: MatTableDataSource<Student>;

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;
//   @ViewChild(MatSort)
//   sort!: MatSort;

//   constructor() {
//     this.dataSource = new MatTableDataSource<Student>(this.students);
//   }

//   ngOnInit(): void {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   applyFilter(filterValue: string) {
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

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







