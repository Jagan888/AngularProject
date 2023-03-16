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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProjectsComponent,
    SddFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
