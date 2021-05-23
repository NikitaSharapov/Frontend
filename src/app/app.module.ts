import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//Компоненты приложения
import { AppComponent } from './app.component';
import { MenuComponent } from './_components/menu/menu.component';
import { DashboardComponent } from './_pages/dashboard/dashboard.component';
import { PcProfileComponent } from './_pages/pc-profile/pc-profile.component';
import { AuthComponent } from './_pages/auth/auth.component';
import { PcListComponent } from './_pages/dashboard/components/pc-list/pc-list.component';
import { PcCardComponent } from './_pages/dashboard/components/pc-card/pc-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    PcProfileComponent,
    AuthComponent,
    PcListComponent,
    PcCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
