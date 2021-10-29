import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: MainPageComponent,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./../profile/profile.module').then((m) => m.ProfileModule),
      },
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
export class LayoutRoutingModule {}
