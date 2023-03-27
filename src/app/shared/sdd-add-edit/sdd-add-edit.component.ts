import { Component,NgZone } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sdd-add-edit',
  templateUrl: './sdd-add-edit.component.html',
  styleUrls: ['./sdd-add-edit.component.scss']
})
export class SddAddEditComponent {
  constructor(public dialogRef: MatDialogRef<SddAddEditComponent>, private ngZone: NgZone) { }

}
