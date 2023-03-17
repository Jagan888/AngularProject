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
import {MatMenuModule} from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectsComponent,
    SddFooterComponent,
    ProjectCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
