import { Component, ViewChild } from '@angular/core';
import {watchData} from '../\watch-data';
import { IonInfiniteScroll } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { AddWatchComponent } from '../add-watch/add-watch.component';

@Component({
  selector: 'app-watch',
  templateUrl: 'watch.page.html',
  styleUrls: ['watch.page.scss'],
})
export class WatchPage {
  @ViewChild(IonInfiniteScroll,{ static: true }) infiniteScroll: IonInfiniteScroll;
  start = 0
  noOfElement = 10
  private selectedItem: any;
  public items  = [];
  watchList = watchData.watch;
  constructor(public toastController: ToastController, public popoverController: PopoverController) {
    this.items = this.watchList.slice(this.start,this.noOfElement)
    this.start = this.noOfElement;
  }

  loadData(event) {
    setTimeout(() => {
      this.noOfElement = this.start+ this.noOfElement;
      let slicedList = this.watchList.slice(this.start,this.noOfElement)
      for (var i = 0; i < 9; i++) {
        this.items.push( slicedList[i] );
      }
      event.target.complete();

      if (this.items.length >= 50) {
        event.target.disabled = true;
        this.infiniteScroll.disabled  = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  deleteItem(index){
    this.items.splice(index, 1);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    }); 
    toast.present();
  }

  onClickAlert(){
   this.presentToast("Alert has set successfully")
  }
  filterList(event){

  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: AddWatchComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
