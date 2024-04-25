import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phone } from './phone';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private httpClient:HttpClient) { }

  getPhone():Observable<Phone[]>{
    return this.httpClient.get<Phone[]>("http://localhost:8080/phones/getAll");
 }
  postPhone(phones:Phone){
     this.httpClient.post<Phone>("http://localhost:8080/phones/post",phones).subscribe(x=>alert("Posted Sucessfully"));
  }
  getBlack(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>("http://localhost:8080/phones/getBlack");
  }
  getLastTwo(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>("http://localhost:8080/phones/getLastTwo");
  }
  getPrime(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>("http://localhost:8080/phones/getPrime");
  }
  getOrginal(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>("http://localhost:8080/phones/getOrginal");
  }
  getPrice(): Observable<Phone[]> {
    return this.httpClient.get<Phone[]>("http://localhost:8080/phones/getPrices");
  }
  postAbove70(phones:Phone){
    this.httpClient.post<Phone>("http://localhost:8080/phones/postAbove70",phones).subscribe(x=>alert("Posted Sucessfully"));
 }
 postPalindrome(phones:Phone){
  this.httpClient.post<Phone>("http://localhost:8080/phones/postPalindrome",phones).subscribe(x=>alert("Posted Sucessfully"));
}
postRating(phones:Phone){
  this.httpClient.post<Phone>("http://localhost:8080/phones/postRatingAbove8",phones).subscribe(x=>alert("Posted Sucessfully"));
}
postBrand(phones:Phone){
  this.httpClient.post<Phone>("http://localhost:8080/phones/postRatingAbove8",phones).subscribe(x=>alert("Posted Sucessfully"));
}

}
