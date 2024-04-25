import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ROUTES, RouterModule } from '@angular/router';
import { BultinPipeComponent } from './bultin-pipe/bultin-pipe.component';
import { MiddleLetterComponent } from './middle-letter/middle-letter.component';
import { BlackPhonesComponent } from './black-phones/black-phones.component';
import { LastTwoComponent } from './last-two/last-two.component';
import { PrimeComponent } from './prime/prime.component';
import { OrginalComponent } from './orginal/orginal.component';
import { PriceComponent } from './price/price.component';
import { Above70Component } from './above70/above70.component';
import { PostPalindromeComponent } from './post-palindrome/post-palindrome.component';
import { PostRatingComponent } from './post-rating/post-rating.component';
import { PostBrandComponent } from './post-brand/post-brand.component';
import { TableComponent } from './table-component/table-component.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    BultinPipeComponent,
    MiddleLetterComponent,
    BlackPhonesComponent,
    LastTwoComponent,
    PrimeComponent,
    OrginalComponent,
    PriceComponent,
    Above70Component,
    PostPalindromeComponent,
    PostRatingComponent,
    PostBrandComponent,
    TableComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
