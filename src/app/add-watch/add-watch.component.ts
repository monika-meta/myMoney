import { Component, OnInit } from '@angular/core';
import {addWatchData, watchData} from '../\watch-data';
import { PopoverController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-watch',
  templateUrl: './add-watch.component.html',
  styleUrls: ['./add-watch.component.scss'],
})
export class AddWatchComponent  {

  start = 0
  noOfElement = 10
  private selectedItem: any;
  public items  = [];
  watchList = addWatchData.watch;
  constructor(public popoverController: PopoverController, public toastController: ToastController) {
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
}
