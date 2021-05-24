import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})



export class LoginComponent implements OnInit {

  constructor(
    private local: LocalStorageService,
    private router: Router
  ) { }


  // localstorage'de tutalacak login bilgisi
  adminInfo = {
    username:'admin',
    password:'123456!',
  };

  /*formConfig = {
    error:false,
    submitted: false
  };*/


  set(expired: number = 0, key: string, value: object) {
    this.local.set(
      key, value, expired, 'd');
  }

  get() {
    return this.local.get("adminInfo");
  }


  checkUser(loginFrom: NgForm) {
    if(!loginFrom.valid){
      //this.formConfig.error = true;

    }
    else {
      var value = loginFrom.value;

      // karşılaştırma yap
      if(JSON.stringify(value) === JSON.stringify(this.adminInfo)){

        // storage'a login kaydet
        this.set(1, "login", {success: true})


        // login başarılı, liste sayfasına yönlendir
        this.router.navigate(['']);


      }
      else {
        // login başarısız hata fırlat
        loginFrom.reset()
      }


      // this.formConfig.submitted = true;
    }
  }

  // init olduğunda
  ngOnInit(): void {
    this.set(1, "adminInfo", {
      username: this.adminInfo.username,
      password: this.adminInfo.password,
    })

  }

}
