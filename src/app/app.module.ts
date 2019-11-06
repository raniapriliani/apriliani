import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab6PageModule } from './pages/tab6/tab6.module';
import { Tab7PageModule } from './pages/tab7/tab7.module';
import { Tab8PageModule } from './pages/tab8/tab8.module';
import { Tab9PageModule } from './pages/tab9/tab9.module';
import { Tab10PageModule } from './pages/tab10/tab10.module';
import { Tab11PageModule } from './pages/tab11/tab11.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    Tab6PageModule,
    Tab7PageModule,
    Tab8PageModule,
    Tab9PageModule,
    Tab10PageModule,
    Tab11PageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
