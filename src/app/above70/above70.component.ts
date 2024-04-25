import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-above70',
  templateUrl: './above70.component.html',
  styleUrls: ['./above70.component.css']
})
export class Above70Component {
  phones: Phone = new Phone();
  constructor(private phoneService: PhoneService) { }
  ngOnInit(): void {}
  onSubmit() {
    this.phoneService.postPhone(this.phones)
    
  }
}
