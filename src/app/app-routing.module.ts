import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FacultyComponent } from './faculty/faculty.component';
import { CaCourseComponent } from './ca-course/ca-course.component';
import { CaIntermediateComponent } from './ca-course/ca-intermediate/ca-intermediate.component';
import { CaFinalComponent } from './ca-course/ca-final/ca-final.component';
import { CaFoundationComponent } from './ca-course/ca-foundation/ca-foundation.component';
import { BuyCourseComponent } from './ca-course/buy-course/buy-course.component';
import { CmaComponent } from './ca-course/cma/cma.component';
import { BannerComponent } from './banner/banner.component';
import { CmaFoundationComponent } from './ca-course/cma/cma-foundation/cma-foundation.component';
import { CmaFinalComponent } from './ca-course/cma/cma-final/cma-final.component';
import { CmaIntermediateComponent } from './ca-course/cma/cma-intermediate/cma-intermediate.component';
import { HeaderComponent } from './header/header.component';
import { NewResultComponent } from './new-result/new-result.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:"faculty",component:FacultyComponent},
  {path:"ca-course/ca-intermediate", component:CaIntermediateComponent},
  {path:"ca-course/ca-final", component:CaFinalComponent},
  {path:"ca-course/ca-foundation", component:CaFoundationComponent},
  {path:"ca-course", component:CaCourseComponent},
  {path:"buy-course", component:BuyCourseComponent},
  {path:"cma-course",component: CmaComponent},
  {path:"cma-course/cma-foundation",component: CmaFoundationComponent},
  {path:"cma-course/cma-intermediate",component:CmaIntermediateComponent},
  {path:"cma-course/cma-final",component:CmaFinalComponent},
  {path:"banner", component:BannerComponent},
  {path:"header", component:HeaderComponent},
  {path:"result", component:NewResultComponent},
  {path:"admin", component:AdminComponent},
  { path: '**', component: HomeComponent } ,
 
  { path: '**', redirectTo: 'home' },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { 
    anchorScrolling: 'enabled',  // Enable anchor scrolling
    scrollPositionRestoration: 'enabled'  // Scroll to top when navigating to a new route
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
