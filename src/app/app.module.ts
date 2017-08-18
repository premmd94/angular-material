import { appRoute } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/Router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MdButtonModule,
   MdCheckboxModule, 
   MdGridListModule,
   MdMenuModule,
   MdTabsModule,
   MdDatepickerModule,
   MdSidenavModule,
   MdListModule
   } from '@angular/material';
import 'hammerjs';
import { HomeComponent } from './home/home.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(environment.firebase, 'angular-firebase'),
     AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    FormsModule,
    MdGridListModule,
    MdMenuModule,
    MdTabsModule,
    MdListModule,
    MdDatepickerModule,
    MdSidenavModule,
    MaterialModule,
    RouterModule.forRoot(appRoute)
  ],
   exports: [MdButtonModule, MdCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
