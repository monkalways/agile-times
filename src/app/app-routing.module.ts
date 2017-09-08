import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectsComponent } from './projects/projects.component';
import { AlltimesComponent } from "./alltimes/alltimes.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'alltimes', component: AlltimesComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
