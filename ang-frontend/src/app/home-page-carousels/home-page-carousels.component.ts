import { Component, OnInit , Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HomePageInfoService } from '../home-page-info.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-page-carousels',
  templateUrl: './home-page-carousels.component.html',
  styleUrls: ['./home-page-carousels.component.css']
})
export class HomePageCarouselsComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private HomePageInfoService: HomePageInfoService , public breakpointObserver: BreakpointObserver) {
    config.interval = 10000000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.pauseOnFocus = true;
    config.animation = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  @Input() carousel_title: string = "Popular Movies";
  @Input() data_recd: string = "pop_movies"; 
  @Input() media_type: string = "movie";
  @Input() media_id: string = "";

  mobile: boolean = false;

  //images = [0,1,2,3,4,5,6,7,8,9,10,11].map(() => `https://picsum.photos/180/270?random&t=${Math.random()}`);
  
  imagesFormatted :string [][]=[[]];
  idFormatted : number[][] =[[]];
  titlesFormatted : string[][] =[[]];
  
  response: any = [];
  titles :string[] = [];
  images :string[] = [];
  id: number[] = [];


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
    

    await this.HomePageInfoService.sendGetRequest(this.data_recd+"/"+this.media_id).subscribe(
      (data: any)=>{

        var ele = <HTMLElement>document.getElementById("bigcontainer"+this.data_recd) ;
        ele.style.display="block";
        
        this.response = data[this.data_recd];
        if(this.response == undefined){
          var ele = <HTMLElement>document.getElementById("bigcontainer"+this.data_recd) ;
          ele.style.display="none";
          console.log("No Data found in ",this.data_recd," carousel ");
        }
        else if(this.response.length==0){
          var ele = <HTMLElement>document.getElementById("bigcontainer"+this.data_recd) ;
          ele.style.display="none";
          console.log("No Data found in ",this.data_recd," carousel ");
        }
        else{

          for(var i=0; i< this.response.length;i++){
            this.images[i] = this.response[i]["poster_path"];
            this.id[i] =  this.response[i]["id"];

            if(this.media_type == "movie"){
              this.titles[i] =  this.response[i]["title"];
            }
            else{
              this.titles[i] =  this.response[i]["name"];
            }

          }
          this.formatimages();
          //this.stylecarousels();
        
        }


      }
    )

    

  }

  async stylecarousels(){

    if(this.mobile){

      setTimeout(await function(){},100);
      var clas = await document.querySelectorAll(".nofocusmobile"+this.data_recd+" .carousel-indicators") as NodeListOf<HTMLElement>;
      var clasr= await document.querySelectorAll(".nofocusmobile"+this.data_recd+" .carousel-control-next") as NodeListOf<HTMLElement>;  
      var clasl= await document.querySelectorAll(".nofocusmobile"+this.data_recd+" .carousel-control-prev") as NodeListOf<HTMLElement>;  
    
      clas[0].style.display = "none";
      clasr[0].style.right = "-40px";
      clasl[0].style.left = "-40px";
      
    }else{

      setTimeout(await function(){},100);
      var clas = await document.querySelectorAll(".nofocus"+this.data_recd+" .carousel-indicators") as NodeListOf<HTMLElement>;
      var clasl= await document.querySelectorAll(".nofocus"+this.data_recd+" .carousel-control-prev") as NodeListOf<HTMLElement>; 
      var clasr= await document.querySelectorAll(".nofocus"+this.data_recd+" .carousel-control-next") as NodeListOf<HTMLElement>;  

      clas[0].style.bottom = "-50px";
      clasr[0].style.right = "-120px";
      clasl[0].style.left = "-120px";
      
    }
  }

  formatimages(){
    
    this.imagesFormatted = [];
    this.idFormatted = [];
    this.titlesFormatted = [];
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
      }
      else {
          this.idFormatted[j].push(this.id[i]);
          this.imagesFormatted[j].push(this.images[i]);
          this.titlesFormatted[j].push(this.titles[i]);
      }
    }
  
  }

  async ngOnChanges(){
    
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      });
    

    await this.HomePageInfoService.sendGetRequest(this.data_recd+"/"+this.media_id).subscribe(
      (data: any)=>{

        var ele = <HTMLElement>document.getElementById("bigcontainer"+this.data_recd) ;
        ele.style.display="block";
        
        this.response = data[this.data_recd];
        if(this.response == undefined){
          var ele = <HTMLElement>document.getElementById("bigcontainer"+this.data_recd) ;
          ele.style.display="none";
          console.log("No Data found in ",this.data_recd," carousel ");
        }
        else if(this.response.length==0){
          var ele = <HTMLElement>document.getElementById("bigcontainer"+this.data_recd) ;
          ele.style.display="none";
          console.log("No Data found in ",this.data_recd," carousel ");
        }
        else{

          for(var i=0; i< this.response.length;i++){
            this.images[i] = this.response[i]["poster_path"];
            this.id[i] =  this.response[i]["id"];

            if(this.media_type == "movie"){
              this.titles[i] =  this.response[i]["title"];
            }
            else{
              this.titles[i] =  this.response[i]["name"];
            }

          }
          this.formatimages();
          //this.stylecarousels();
        
        }


      }
    )
  }








}
