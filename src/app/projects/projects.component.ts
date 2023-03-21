import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SddAddEditComponent } from '../sdd-add-edit/sdd-add-edit.component';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  title = 'popupcrud';
  constructor(private _matDialog: MatDialog){}
  openSddAddEditForm() : void
  {
    this._matDialog.open(SddAddEditComponent, {
     // width: '100%',
    });
  }

}
