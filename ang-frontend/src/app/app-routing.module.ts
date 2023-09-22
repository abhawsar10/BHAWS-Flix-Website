import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MyListPageComponent } from './my-list-page/my-list-page.component';
import { MediaDetailsComponent } from './media-details/media-details.component'

const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'mylist', component: MyListPageComponent},
  { path: 'watch/:media_type/:id',component:MediaDetailsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
