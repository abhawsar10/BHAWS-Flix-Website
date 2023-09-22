import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomePageInfoService } from '../home-page-info.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-continue-watching-carousel',
  templateUrl: './continue-watching-carousel.component.html',
  styleUrls: ['./continue-watching-carousel.component.css']
})
export class ContinueWatchingCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private HomePageInfoService: HomePageInfoService, public breakpointObserver: BreakpointObserver) {
    config.interval = 10000000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.animation = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  
  mobile: boolean = false;

  imagesFormatted :string [][]=[[]];
  idFormatted : number[][] =[[]];
  titlesFormatted : string[][] =[[]];
  media_typesFormatted :string[][] = [[]];
  
  images :string[] = [];
  id: number[] = [];
  titles :string[] = [];
  media_types :string[] = [];
  
  response: any = [];

  async ngOnInit(){

    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      });

    var continuelist=  JSON.parse( window.localStorage.getItem('continuelist') || `{"continuelistarray":[]}`);
    
    
    this.response = continuelist["continuelistarray"];
    
    var ele = <HTMLElement>document.getElementById("bigcontainercontinuewatching") ;
    ele.style.display="block";
    
    if(this.response.length==0){
      var ele = <HTMLElement>document.getElementById("bigcontainercontinuewatching") ;
      ele.style.display="none";
      console.log("No Data found in continue watching carousel");
    }
    else{

      for(var i=0; i< this.response.length;i++){
        this.images[i] = this.response[i]["poster_path"];
        this.id[i] =  this.response[i]["id"];
        this.titles[i] =  this.response[i]["title"];
        this.media_types[i] =  this.response[i]["media_type"];

      }
      this.formatarrays();
    }
    


  }



  
  formatarrays(){
    
    this.imagesFormatted = [];
    this.idFormatted = [];
    this.titlesFormatted = [];
    this.media_typesFormatted = [];
    var j = -1;

    for (var i = 0; i < this.images.length; i++) {
      if (i % 6 == 0) {
          j++;
          this.idFormatted[j] = [];
          this.idFormatted[j].push(this.id[i]);
          this.imagesFormatted[j] = [];
          this.imagesFormatted[j].push(this.images[i]);
          this.titlesFormatted[j] = [];
          this.titlesFormatted[j].push(this.titles[i]);
          this.media_typesFormatted[j] = [];
          this.media_typesFormatted[j].push(this.media_types[i]);
      }
      else {
          this.idFormatted[j].push(this.id[i]);
          this.imagesFormatted[j].push(this.images[i]);
          this.titlesFormatted[j].push(this.titles[i]);
          this.media_typesFormatted[j].push(this.media_types[i]);
      }
    }
  
  }

}
