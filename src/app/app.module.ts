import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RunnersComponent } from './runners/runners.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RunnerDetailComponent } from './runner-detail/runner-detail.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { NotificationComponent } from './notification/notification.component';    

@NgModule({
  declarations: [
    AppComponent,
    RunnersComponent,
    HomeComponent,
    InscriptionComponent,
    RunnerDetailComponent,
    ShopComponent,
    AlertComponent,
    FooterComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    ToastrModule.forRoot(),
    BrowserAnimationsModule, //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
