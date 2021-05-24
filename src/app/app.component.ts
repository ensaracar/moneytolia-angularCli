import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements AfterViewInit {

  constructor(
    private local: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    // login olmuş mu kontrol et
    var login = this.local.get('login');
    if(login && login.success){
      this.router.navigate(['']);

    }
    else {
      this.router.navigate(['login']);
    }
  }



  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    this.local.clear()
  }

}
