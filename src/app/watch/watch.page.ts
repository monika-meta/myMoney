import { Component, ViewChild } from '@angular/core';
import {watchData} from '../watch-data';
import { IonInfiniteScroll } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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
  data = watchData.watch;
  constructor(public toastController: ToastController) {
    this.items = this.data.slice(this.start,this.noOfElement)
    this.start = this.noOfElement;


  }
  loadData(event) {
    setTimeout(() => {
      this.noOfElement = this.start+ this.noOfElement;
      console.log('this.start... ', this.start);
      console.log('this.noOfElement...', this.noOfElement);
      let x = this.data.slice(this.start,this.noOfElement)
      // this.items.push(x)
      for (var i = 0; i < 9; i++) {
        this.items.push( x[i] );
      }
      console.log('this.items.length', this.items);

      console.log('this.items.length', this.items.length);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
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
}
