import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCarouselsComponent } from './home-page-carousels.component';

describe('HomePageCarouselsComponent', () => {
  let component: HomePageCarouselsComponent;
  let fixture: ComponentFixture<HomePageCarouselsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCarouselsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageCarouselsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
