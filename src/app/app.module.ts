import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import{ MatIconModule} from '@angular/material/icon';
import{MatSelectModule} from '@angular/material/select'
import { ProjectsComponent } from './projects/projects.component';
import { SddFooterComponent } from './sdd-footer/sdd-footer.component';
import {MatCardModule} from '@angular/material/card';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';

import { ProjectDetailsComponent } from './project-details/project-details.component'


import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SddAddEditComponent } from './sdd-add-edit/sdd-add-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AnalysisScopeComponent } from './analysis-scope/analysis-scope.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectsComponent,
    SddFooterComponent,
    ProjectCardsComponent,
    ProjectDetailsComponent,
    SddAddEditComponent,
    AnalysisScopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
        MatFormFieldModule,
            MatInputModule,
MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
