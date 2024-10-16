import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CmaIntermediateComponent } from './ca-course/cma/cma-intermediate/cma-intermediate.component';
import { CmaFinalComponent } from './ca-course/cma/cma-final/cma-final.component';
import { HeaderComponent } from './header/header.component';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewResultComponent } from './new-result/new-result.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './admin/admin.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyComponent,
    CaCourseComponent,
    CaIntermediateComponent,
    CaFinalComponent,
    CaFoundationComponent,
    BuyCourseComponent,
    CmaComponent,
    BannerComponent,
    CmaFoundationComponent,
    CmaIntermediateComponent,
    CmaFinalComponent,
    HeaderComponent,
    NewResultComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    NgbAlertModule,
    NgxSpinnerModule ,
    BrowserAnimationsModule
  ],
 exports:[
  BannerComponent,
  HeaderComponent
 ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
