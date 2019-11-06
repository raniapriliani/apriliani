import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab10',
  templateUrl: './tab10.page.html',
  styleUrls: ['./tab10.page.scss'],
})
export class Tab10Page implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalController.dismiss
  }

}
