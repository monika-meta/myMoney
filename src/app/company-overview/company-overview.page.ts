import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartDisplayPage } from '../chart-display/chart-display.page';

@Component({
  selector: 'app-company-overview',
  templateUrl: './company-overview.page.html',
  styleUrls: ['./company-overview.page.scss'],
})
export class CompanyOverviewPage implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ChartDisplayPage,
      cssClass: "modal-fullscreen"
    });
    return await modal.present();
  }

}
