import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONFIG, AppConfig } from '../app.config';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig, private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
  myprofile() {
    this.route.navigate(['./myprofile']);
  }
  favorited() {
    this.route.navigate(['./favorited']);
  }
  notification() {
    this.route.navigate(['./notification']);
  }
  help() {
    this.route.navigate(['./help']);
  }
  condition() {
    this.route.navigate(['./condition']);
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }
  // buyAppAction() {
  //   window.open("http://bit.ly/cc_QuickPay", '_system', 'location=no');
  // }
  developed_by() {
    window.open('https://opuslab.works', '_system', 'location=no')
  }
  buyAppAction() {
    this.modalController.create({ component: BuyappalertPage }).then((modalElement) => modalElement.present());
  }
}
