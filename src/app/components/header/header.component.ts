import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private local: LocalStorageService,
    private router: Router
  ) { }


  logout(){
    // sil
    this.local.remove('login')
    // çıkış başarılı, login sayfasına yönlendir
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
