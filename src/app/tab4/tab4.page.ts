import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Router } from '@angular/router';
import { Tab6Page } from '../pages/tab6/tab6.page';
import { Tab7Page } from '../pages/tab7/tab7.page';
import { Tab8Page } from '../pages/tab8/tab8.page';
import { Tab9Page } from '../pages/tab9/tab9.page';
import { Tab10Page} from '../pages/tab10/tab10.page';
import { Tab11Page } from '../pages/tab11/tab11.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private modalController : ModalController, 
    public router : Router
    ) {}

  async openMOS(){
    // const mos = await this.modalController.create({
    //   component : Tab6Page
    // });
    // mos.present();
    this.router.navigate(['/tab6']);
  }
  async openISMA(){
    // const isma = await this.modalController.create({
    //   component : Tab7Page
    // });
    // isma.present();
    this.router.navigate(['/tab7']);
  }
  async openENT(){
    // const ent = await this.modalController.create({
    //   component : Tab8Page
    // });
    // ent.present();
    this.router.navigate(['/tab8']);
  }
  async openAD(){
    // const ad = await this.modalController.create({
    //   component : Tab9Page
    // });
    // ad.present();
    this.router.navigate(['/tab9']);
  }
async openNET(){
  // const net = await this.modalController.create({
  //   component : Tab10Page
  // });
  // net.present();
  this.router.navigate(['/tab10']);
}
async openISPM(){
  // const ispm = await this.modalController.create({
  //   component : Tab11Page
  // });
  // ispm.present();
  this.router.navigate(['/tab11']);
}

  ngOnInit() {
  }

}
