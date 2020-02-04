import { Component } from '@angular/core';
import {watchData} from '../watch-data'
@Component({
  selector: 'app-watch',
  templateUrl: 'watch.page.html',
  styleUrls: ['watch.page.scss'],
})
export class WatchPage {

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items  = watchData.watch;
  constructor() {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

}