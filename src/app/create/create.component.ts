import { Component } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  phones: Phone = new Phone();
  constructor(private phoneService: PhoneService) { }
  ngOnInit(): void {}
  onSubmit() {
    this.phoneService.postPhone(this.phones)
  }
}
