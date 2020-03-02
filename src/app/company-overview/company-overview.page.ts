import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { ModalController } from '@ionic/angular';
import { ChartDisplayPage } from '../chart-display/chart-display.page';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.page.html',
  styleUrls: ['./company-overview.page.scss'],
})
export class CompanyOverviewPage implements OnInit {

  constructor(public modalController: ModalController, private screenOrientation: ScreenOrientation) {}

  ngOnInit() {
    if(this.screenOrientation.type != 'portrait'){
      this.screenOrientation.unlock();
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ChartDisplayPage,
      cssClass: "modal-fullscreen"
    });
    return await modal.present();
  }

}
