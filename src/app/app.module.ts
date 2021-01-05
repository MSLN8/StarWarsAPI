import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PilotDetailsComponent } from './components/pilot-details/pilot-details.component';
import { BorderCardDirective } from './border-card.directive';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    StarshipDetailsComponent,
    StarshipsListComponent,
    PilotDetailsComponent,
    BorderCardDirective,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
