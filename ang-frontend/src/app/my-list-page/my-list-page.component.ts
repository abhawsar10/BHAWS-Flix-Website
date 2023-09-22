import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-my-list-page',
  templateUrl: './my-list-page.component.html',
  styleUrls: ['./my-list-page.component.css']
})
export class MyListPageComponent implements OnInit {

  size_of_my_list :number = 0;
  mobile: boolean = false;

  list_array =
  [{
    "id":123,
    "title" : "Hello",
    "poster_path" : "",
    "media_type" : "movie"
  }]

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {

      

    this.breakpointObserver
      .observe(['(min-width: 550px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      });


    var list=  JSON.parse( window.localStorage.getItem('mylist') || `{"list_array":[]}`);
    
    this.list_array = list["list_array"];

    this.size_of_my_list = this.list_array.length;


  }

}
