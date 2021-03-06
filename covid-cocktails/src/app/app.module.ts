import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RandomListComponent } from './random-list/random-list.component';
import { FormsModule } from '@angular/forms';
import { PopularListComponent } from './popular-list/popular-list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RandomListComponent,
    PopularListComponent,
    CocktailListComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    CocktailDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
