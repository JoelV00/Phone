import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Phone } from '../phone';
@Component({
  selector: 'app-black-phones',
  templateUrl: './black-phones.component.html',
  styleUrl: './black-phones.component.css'
})
export class BlackPhonesComponent implements OnInit {
  blackPhones: Phone[];

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getBlackPhones();
  }

  getBlackPhones(): void {
    this.phoneService.getBlack().subscribe(
      (phones) => {
        this.blackPhones = phones;
      }
    );
  }
}