import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './_pages/dashboard/dashboard.component';
import {PcProfileComponent} from './_pages/pc-profile/pc-profile.component';
import {AuthComponent} from './_pages/auth/auth.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pc/profile/:uuid', component: PcProfileComponent},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
