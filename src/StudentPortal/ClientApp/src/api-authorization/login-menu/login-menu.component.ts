import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../authorize.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.css']
})
export class LoginMenuComponent implements OnInit {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;

  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
  }
}


//import { Component, OnInit } from '@angular/core';
//import { AuthorizeService } from '../authorize.service';
//import { Observable } from 'rxjs';
//import { map, tap } from 'rxjs/operators';

//@Component({
//  selector: 'app-login-menu',
//  templateUrl: './login-menu.component.html',
//  styleUrls: ['./login-menu.component.css']
//})
//export class LoginMenuComponent implements OnInit {
//  public isAuthenticated: Observable<boolean>;
//  public userNameSplit: Observable<string[]>;
//  public userNameSplitArray: string[][];
//  //public userName: Observable<string>;
//  public userName: string;

//  constructor(private authorizeService: AuthorizeService) { }

//  ngOnInit() {
//    this.isAuthenticated = this.authorizeService.isAuthenticated();
//    this.userNameSplit = this.authorizeService.getUser().pipe(map(u => u && u.name.split('@')));
//    this.userNameSplit.forEach(element => {
//      this.userNameSplitArray.push(element);
//      //console.log(this.userNameSplitArray)
//    });
//    console.log(this.userNameSplitArray)
//  }
//}
