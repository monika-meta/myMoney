import { Component, OnInit } from '@angular/core';
import {addWatchData, watchData} from '../\watch-data';
import { PopoverController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-watch-modal',
  templateUrl: './add-watch-modal.page.html',
  styleUrls: ['./add-watch-modal.page.scss'],
})
export class AddWatchModalPage  {

  start = 0
  noOfElement = 10
  private selectedItem: any;
  public items  = [];
  watchList = addWatchData.watch;
  constructor(public popoverController: ModalController, public toastController: ToastController) {
  }

  update(){
    this.items = this.watchList.slice(this.start,this.noOfElement)
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    }); 
    toast.present();
  }

  onSelectData(item) {
    watchData.watch.unshift(item)
    this.popoverController.dismiss();
   this.presentToast("Company added successfully");

  }
  closeModal(){
    this.popoverController.dismiss();

  }

}
