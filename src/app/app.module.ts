import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddWatchComponent } from './add-watch/add-watch.component';
import { HomepagePipe } from './homepage.pipe';
import { AddWatchModalPageModule } from './add-watch-modal/add-watch-modal.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ChartDisplayPageModule } from './chart-display/chart-display.module';

@NgModule({
  declarations: [AppComponent, AddWatchComponent, HomepagePipe],
  entryComponents: [AddWatchComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AddWatchModalPageModule,
    SuperTabsModule.forRoot(),
    ChartDisplayPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
