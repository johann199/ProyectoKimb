import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import{SidenavComponent} from './sidenav/sidenav.component';
//firebase
import{AngularFireModule} from 'angularfire2';
//import{AngularFireDatabaseModule}from'angularfire2';
import{environment} from '../environments/environment';
//Compones
import { BailarinesComponent } from './components/bailarines/bailarines.component';
import { BailarinesListComponent } from './components/bailarines/bailarines-list/bailarines-list.component';
import { BailarinComponent } from './component/bailarines/bailarin/bailarin.component';
//servicios 
import {BailarinService}from './services/bailarin.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    BailarinesComponent,
    BailarinesListComponent,
    BailarinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatSidenavModule,
    //AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    BailarinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
