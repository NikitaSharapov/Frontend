import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//Компоненты материал
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
//Компоненты материал

//Компоненты приложения
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PcProfileComponent } from './pages/pc-profile/pc-profile.component';
import { AuthComponent } from './pages/auth/auth.component';
import { PcListComponent } from './pages/dashboard/components/pc-list/pc-list.component';
import { PcCardComponent } from './pages/dashboard/components/pc-card/pc-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPcComponent } from './modal/add-pc/add-pc.component';
import { DelPcComponent } from './modal/del-pc/del-pc.component';
import { AddGroupComponent } from './modal/add-group/add-group.component';
import { DelGroupComponent } from './modal/del-group/del-group.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    PcProfileComponent,
    AuthComponent,
    PcListComponent,
    PcCardComponent,
    AddPcComponent,
    DelPcComponent,
    AddGroupComponent,
    DelGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
