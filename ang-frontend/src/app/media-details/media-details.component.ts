import { Component, OnInit ,ViewChild, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { HomePageInfoService } from '../home-page-info.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject} from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import { NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MediaDetailsComponent implements OnInit {

  par:any={};
  constructor(public breakpointObserver: BreakpointObserver, private modalService: NgbModal, private route: ActivatedRoute, private HomePageInfoService: HomePageInfoService, private router: Router) {
    
    this.route.params.subscribe( params => { 
      this.par = params;
      this.ngOnInit();
    });

    

  }

  is_on_watchlist : boolean = false;
  apiLoaded :boolean = false;
  response: any = [];
  media_id : string = "";
  media_type : string = "";
  title : string = "Sample Title";
  encoded_title : string = "";
  tagline : string = "";
  dateline : string = "";
  genreline : string = "";
  langline : string = "";
  descline : string = "";
  postpath : string = "https://cinemaone.net/images/movie_placeholder.png";
  video_id : string= "";
  fb_video_id :string="";
  
  no_cast : number = 10;
  cast : [{ id: number; name: string; character: string; poster_path: string; }] = [{
    id:880,
    name:"Sample",
    character: "",
    poster_path:"https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png"
  }];

  date_format :string = 'MMMM d, y, h:mm:ss a';
  
  no_reviews : number = 10;
  review: [{ author: string; content: string; created_at: Date; url: string; rating: number; avatar_path: string; }] = [{

    author : "",
    content : "",
    created_at : new Date("2021-03-15T16:20:41.130Z"),
    url : "https://www.themoviedb.org/review/604f89596517d6006a209fa0",
    rating : 0,
    avatar_path : "https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW8/ReviewsPlaceholderImage.jpg"
  }]


  @ViewChild('selfClosingAlert1', {static: false}) selfClosingAlert1: NgbAlert | undefined;

  private _success1 = new Subject<string>();

  successMessage1 = '';

  
  mobile: boolean = false;

  async ngOnInit(){


    this.breakpointObserver
      .observe(['(min-width: 581px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      });



    this._success1.subscribe(message => this.successMessage1 = message);
    this._success1.pipe(debounceTime(5000)).subscribe(() => {
      if (this.selfClosingAlert1) {
        this.selfClosingAlert1.close();
      }
    });



    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    window.onload = function () {
      window.scrollTo(0, 0);
    }

    this.media_id = this.par["id"]; 
    this.media_type = this.par["media_type"];
    this.show_watchlist_button();
    
    await this.HomePageInfoService.sendGetRequest(`${this.par["media_type"]}/${this.par["id"]}`).subscribe(
      (data: any)=>{

        this.video_id = data["video"]["key"];
        this.fb_video_id = encodeURIComponent("https://www.youtube.com/watch?v="+this.video_id);
        this.no_cast = data["cast"].length;
        this.cast = data["cast"];
        this.no_reviews = data["reviews"].length;
        this.review = data["reviews"];

        if(this.par["media_type"]=="movie"){
          this.title = data["movie_details"]["title"];
          this.encoded_title = encodeURIComponent(this.title);
          this.tagline = data["movie_details"]["tagline"];


          if( data["movie_details"]["vote_average"] == ""){ 
            var two = "";
          }
          else{ 
            two = " | ★" + data["movie_details"]["vote_average"];
          }

          if( data["movie_details"]["runtime"] == ""){ 
            var three = ""; 
          }
          else{ 
            three = " | "+ data["movie_details"]["runtime"];
          }

          this.dateline = data["movie_details"]["release_date"].slice(0,4) + two + three;
          
          this.genreline = data["movie_details"]["genres"];
          this.langline = data["movie_details"]["spoken_languages"];
          this.descline = data["movie_details"]["overview"];
          this.postpath = data["movie_details"]["poster_path"];

        }
        else{
          this.title = data["tv_details"]["name"];
          this.encoded_title = encodeURIComponent(this.title);
          this.tagline = data["tv_details"]["tagline"];

          if( data["tv_details"]["vote_average"] == ""){ 
            var two = "";
          }
          else{ 
            two = " | ★" + data["tv_details"]["vote_average"];
          }

          if( data["tv_details"]["episode_run_time"] == ""){ 
            var three = ""; 
          }
          else{ 
            three = " | "+ data["tv_details"]["episode_run_time"];
          }

          this.dateline =  data["tv_details"]["first_air_date"].slice(0,4) + two + three;
          
          this.genreline = data["tv_details"]["genres"];
          this.langline = data["tv_details"]["spoken_languages"];
          this.descline = data["tv_details"]["overview"];
          this.postpath = data["tv_details"]["poster_path"];
        }

        if (this.genreline == "") {
          var x = <HTMLElement>document.getElementById("details_genreline");
          x.style.display="none";  
        }
        if (this.langline == "") {
          var x = <HTMLElement>document.getElementById("details_langline");
          x.style.display="none";  
        }
        if (this.descline == "") {
          var x = <HTMLElement>document.getElementById("details_description");
          x.style.display="none";  
        }

        

        this.update_continue_watch_list();
      }
      
      
    )


    if (!this.apiLoaded) {
      
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

  }

  

  one_actor=
  {
    name: "Sample Name",
    birthday: "NA",
    place_of_birth: "NA",
    gender: "NA",
    also_known_as: "NA",
    homepage: "Na",
    known_for_department: "NA",
    biography: "NA",
    profile_path : "NA"
  }

  
  one_actor_ext=
  {
    "imdb_id": "",
    "facebook_id": "",
    "instagram_id": "",
    "twitter_id": ""
  }
  

  cast_photo='https://bytes.usc.edu/cs571/s21_JSwasm00/hw/HW6/imgs/person-placeholder.png'

  async openLg(content: any,cast_id:number, photo: string) {
    
    this.cast_photo = photo;
    this.HomePageInfoService.sendGetRequest(`cast/${cast_id}`).subscribe(
      (data: any) => {
        this.one_actor = data["cast_details"];
        this.one_actor_ext = data["cast_ext"];

        this.modalService.open(content, { size: 'lg', centered: true, scrollable: true });

        if (this.one_actor.birthday == "") {
          var x = <HTMLElement>document.getElementById("birth");
          x.style.display="none";  
        }
        if (this.one_actor.place_of_birth == "") {
          var x = <HTMLElement>document.getElementById("birthplace");
          x.style.display="none";  
        }
        if (this.one_actor.also_known_as == "") {
          var x = <HTMLElement>document.getElementById("aka");
          x.style.display="none";  
        }
        if (this.one_actor.known_for_department == "") {
          var x = <HTMLElement>document.getElementById("dept");
          x.style.display="none";  
        }
        if (this.one_actor.homepage == "") {
          var x = <HTMLElement>document.getElementById("website");
          x.style.display="none";  
        }
        if (this.one_actor.biography == "") {
          var x = <HTMLElement>document.getElementById("cast_bio");
          x.style.display="none";  
        }




      }
    )
  }


  show_watchlist_button(){

    
    this.is_on_watchlist = false;
    var list=  JSON.parse( window.localStorage.getItem('mylist') || `{"list_array":[]}`);

    var list_array = list["list_array"];

    for(var i=0; i< list_array.length; i++){
      
      if(list_array[i]["id"] == this.media_id){
        this.is_on_watchlist = true;
        break;
      }
    }
    
    //console.log("IS ",this.media_id,"thsi on watchlist?",this.is_on_watchlist);
  }






  add_to_watchlist(){

    var list=  JSON.parse( window.localStorage.getItem('mylist') || `{"list_array":[]}`);
    localStorage.removeItem("mylist");

    var list_array = list["list_array"];
    
    var this_movie = {
      "id" : this.media_id,
      "title" : this.title,
      "poster_path" : this.postpath,
      "media_type" : this.media_type
    }

    list_array = [this_movie].concat(list_array);
    list["list_array"] = list_array;

    this.is_on_watchlist = true;
    window.localStorage.setItem('mylist',JSON.stringify(list));


    this._success1.next(`Added to watchlist`);


  }

  remove_from_watchlist(){

    var list=  JSON.parse( window.localStorage.getItem('mylist') || `{"list_array":[]}`);
    localStorage.removeItem("mylist");

    var list_array = list["list_array"];
    
    for(var i=0; i< list_array.length; i++){
      
      if(list_array[i]["id"] == this.media_id){
        list_array.splice(i, 1);
        break;
      }
    }
    list["list_array"] = list_array;

    this.is_on_watchlist = false;
    window.localStorage.setItem('mylist',JSON.stringify(list));



    this._success1.next(`Removed from watchlist`);

  }


  update_continue_watch_list(){

    
    var continuelist=  JSON.parse( window.localStorage.getItem('continuelist') || `{"continuelistarray":[]}`);
    localStorage.removeItem("continuelist");

    var continuelistarray = continuelist["continuelistarray"];
    
    for(var i=0; i< continuelistarray.length; i++){
      if(continuelistarray[i]["id"] == this.media_id){
        continuelistarray.splice(i, 1);
        break;
      }
    }

    if(continuelistarray.length == 24){
      continuelistarray.pop();
    }

    var new_movie = {
      "id" : this.media_id,
      "title" : this.title,
      "poster_path" : this.postpath,
      "media_type" : this.media_type
    }
    continuelistarray = [new_movie].concat(continuelistarray);

    continuelist["continuelistarray"] = continuelistarray;

    window.localStorage.setItem('continuelist',JSON.stringify(continuelist));


  }





  

}
