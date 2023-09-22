import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {YouTubePlayerModule} from '@angular/youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { HomeNavBarComponent} from './home-nav-bar/home-nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MyListPageComponent } from './my-list-page/my-list-page.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { HomePageCarouselsComponent } from './home-page-carousels/home-page-carousels.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { ContinueWatchingCarouselComponent } from './continue-watching-carousel/continue-watching-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeNavBarComponent,
    HomePageComponent,
    MyListPageComponent,
    NowPlayingComponent,
    HomePageCarouselsComponent,
    MediaDetailsComponent,
    ContinueWatchingCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    LayoutModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  exports:[HomeNavBarComponent],
  bootstrap: [AppComponent, HomeNavBarComponent]
})
export class AppModule { }
