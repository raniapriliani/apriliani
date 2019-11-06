import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }
closeModal(){
  this.modalController.dismiss();
}
}
