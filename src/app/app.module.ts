import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MlComponent } from './components/see-it/ml/ml.component';
import { DataScienceComponent } from './components/see-it/data-science/data-science.component';
import { ComputerVisionComponent } from './components/see-it/computer-vision/computer-vision.component';
import { ForhomeComponent } from './components/see-it/forhome/forhome.component';
import { SmallAboutMeComponent } from './components/small-about-me/small-about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SeeItPageComponent } from './components/see-it/see-it-page/see-it-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MlComponent,
    DataScienceComponent,
    ComputerVisionComponent,
    ForhomeComponent,
    SmallAboutMeComponent,
    FooterComponent,
    AboutMeComponent,
    SeeItPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
