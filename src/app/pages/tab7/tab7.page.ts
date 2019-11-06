import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {

  constructor(private modalcontroller : ModalController) { }

  ngOnInit() {
  }

  closemodal(){
    this.modalcontroller.dismiss
  }
}
