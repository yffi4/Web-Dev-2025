import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacexLauncesComponent } from './spacex-launces/spacex-launces.component';

export const routes: Routes = [
  { path: '', component: SpacexLauncesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
