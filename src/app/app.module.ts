import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatNavList, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AccueilComponent } from './shared/cadre/accueil/accueil.component';
import { FooterComponent } from './shared/cadre/footer/footer.component';
import { PagereseauComponent } from './shared/cadre/pagereseau/pagereseau.component';
import { BocksComponent } from './shared/cadre/bocks/bocks.component';
import {BlockImagesService} from './shared/personne/block-images.service';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FooterComponent,
    PagereseauComponent,
    BocksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule

  ],
  providers: [BlockImagesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
