import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {CampaignsComponent} from "./components/campaigns/campaigns.component";
import {CreateCampaignComponent} from "./components/create-campaign/create-campaign.component";

const routes: Routes = [
  {
    path : "login",
    component: LoginComponent
  },
  {
    path : "",
    component: CampaignsComponent,
  },
  {
    path : "create_campaign",
    component: CreateCampaignComponent,
  },
  { path: '**',
    redirectTo: 'campaigns',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
