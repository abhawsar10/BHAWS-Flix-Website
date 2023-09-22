import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomePageInfoService } from '../home-page-info.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private HomePageInfoService: HomePageInfoService , public breakpointObserver: BreakpointObserver) {
    config.interval = 1000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.animation = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  
  mobile: boolean = false;

  now_playing: any = [];
  titles :string[] = [];
  images : string[] = [];
  ids : string[] = [];
  
  async ngOnInit(){

    this.breakpointObserver
      .observe(['(min-width: 800px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      });


    await this.HomePageInfoService.sendGetRequest("now_playing").subscribe(
      (data: any)=>{

        this.now_playing = data["now_playing"];

        var i;
        for(i=0;i<this.now_playing.length;i++){
          this.images[i] = this.now_playing[i]["backdrop_path"];
          this.titles[i] = this.now_playing[i]["title"];
          this.ids[i] = this.now_playing[i]["id"];
        }

        //this.stylecarousels();
        

      }
    )
  }


  

}
