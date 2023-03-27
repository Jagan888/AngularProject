import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationSettingsComponent } from './calculation-settings/calculation-settings.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'project'},
  {path:'project',component: ProjectsComponent},
  {path:'project-details' , component: ProjectDetailsComponent},
  {path:'calculation-settings' , component:CalculationSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
