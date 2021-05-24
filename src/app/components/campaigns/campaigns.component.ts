import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import {Router} from "@angular/router";

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.sass']
})


export class CampaignsComponent implements OnInit {

  selectValue = '0'; // sıralama select model value
  searchedKeyword = ''; // arama input model value
  modalDisplay = false; // modal value
  modalId = -1; // modal value

  campaigns = [
    {
      _id: 1091,
      name: "GittiGidiyor bedava kargo !",
      desc: "Kampanya Açıklaması",
      date: new Date(),
      point: 55,
    },
    {
      _id: 1092,
      name: "Morhipo'dan indirim fırsatı !",
      desc: "Kampanya Açıklaması",
      date: new Date(),
      point: 2,
    },
    {
      _id: 1093,
      name: "Yemeksepeti indirim kuponu",
      desc: "Kampanya Açıklaması",
      date: new Date(),
      point: 56,
    },
    {
      _id: 1094,
      name: "Bana'bi indirim kuponu",
      desc: "Kampanya Açıklaması",
      date: new Date(),
      point: 98,
    }
  ];


  constructor(
    private local: LocalStorageService,
    private router: Router
  ) { }


  set(expired: number = 0, key: string, value: object) {
    this.local.set(
      key, value, expired, 'd');
  }

  sort(model: string) {
    if(model === "-1")
      this.campaigns = this.campaigns.sort((a, b) => a.point - b.point);
    else if(model === "1")
      this.campaigns = this.campaigns.sort((a, b) => { if (a.point < 0) {return -1; } if (b.point <0 ) {return 1;} return b.point - a.point });
    else
      this.campaigns = this.local.get('campaigns');

  }
  update(id: any){
    // hangi veriye update talebi geldi
    this.campaigns.find((a) => { if(a._id === id) this.modalId = a._id; this.modalDisplay = true; })

    // yakalanan veriyi modal içinde açtır


  }

  delete(id: any){
    this.campaigns.find((a,b) => { if(a && a._id === id)
      // render tarafında sil
      this.campaigns.splice(b,1);

      // localstoragedan sil
      this.save()
    })
  }

  save(){
    // kaydet
    this.set(1, "campaigns", this.campaigns)

    // selectin varsayılan değerine göre tekrar sırala
    this.sort(this.selectValue)
  }

  ngOnInit(): void {
    // localstoragede campaigns key dolu mu kontrol et
    if(this.local.get('campaigns') === null)
      this.save()

    // dolu değilse
    else
      this.campaigns = this.local.get('campaigns')


  }

}
