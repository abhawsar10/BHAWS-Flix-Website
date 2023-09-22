import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, OperatorFunction} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { HomePageInfoService } from '../home-page-info.service';



@Component({
  selector: 'app-home-nav-bar',
  templateUrl: './home-nav-bar.component.html',
  styleUrls: ['./home-nav-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeNavBarComponent implements OnInit {
  

  public isMenuCollapsed = true;
  mobile: boolean = false;
  model: any;

  constructor(public breakpointObserver: BreakpointObserver, private HomePageInfoService: HomePageInfoService) {}

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term =>
          this.HomePageInfoService.search_movie_endpoint(term)
      )
  )
    
  formatter = (x: {title: string}) => x.title;

  ngOnInit(){

    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.mobile = false;
        } else {
          this.mobile = true;
        }
      });



  }

  onSelect($event: { preventDefault: () => void; }, input: { value: string; }) {
    $event.preventDefault();
    input.value = '';
  }



}
