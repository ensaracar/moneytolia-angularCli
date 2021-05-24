import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import { CreateCampaignComponent } from './components/create-campaign/create-campaign.component';
import {FormsModule} from "@angular/forms";
import {FilterPipe} from "./pipes/filter.pipe";
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CampaignsComponent,
    CreateCampaignComponent,
    FilterPipe,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
