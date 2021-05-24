import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.sass']
})
export class CreateCampaignComponent implements OnInit {

  constructor(
    private local: LocalStorageService
  ) { }

  itemData = {
    _id: Math.floor(Math.random() * 100000) + 1100,
    date: new Date(),
    name: '',
    desc: '',
    point: null,
  };

  set(expired: number = 0, key: string, value: object) {
    this.local.set(
      key, value, expired, 'd');
  }

  new_data(newData: NgForm) {
    if(newData.valid)
      var campaigns = this.local.get('campaigns')
      campaigns.unshift(this.itemData)
      this.set(1, "campaigns", campaigns)
  }

  ngOnInit(): void {
  }

}
