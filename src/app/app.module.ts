import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { ProjectDetailsComponent } from './project-details/project-details.component'


import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectsComponent,
    SddFooterComponent,
    ProjectCardsComponent,
    ProjectDetailsComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
