import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PulsantePaginaComponent } from './pulsante-pagina/pulsante-pagina.component';
import {CharacterService} from 'src/app/services/character.service';
import { ViewDetailsComponent } from './view-details/view-details.component'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchBarComponent,
    PulsantePaginaComponent,
    ViewDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
