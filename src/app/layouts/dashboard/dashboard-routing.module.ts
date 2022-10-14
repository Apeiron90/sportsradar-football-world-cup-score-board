import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreboardComponent } from 'src/app/pages/scoreboard/scoreboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'scoreboard',
  },
  {
    path: 'scoreboard',
    component: ScoreboardComponent,
    loadChildren: () =>
      import(`../../pages/scoreboard/scoreboard.module`).then(
        (m) => m.ScoreboardModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'scoreboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
