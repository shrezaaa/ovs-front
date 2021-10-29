import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileRoutingComponent } from '../profile/profile-routing.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileRoutingComponent,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      // {
      //   path: 'ReTasker',
      //   loadChildren: () =>
      //     import('../re-tasker/re-tasker.module').then((m) => m.ReTaskerModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProducsRoutingModule {}
