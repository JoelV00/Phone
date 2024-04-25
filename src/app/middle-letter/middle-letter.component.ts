import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-middle-letter',
  templateUrl: './middle-letter.component.html',
  styleUrls: ['./middle-letter.component.css']
})

export class MiddleLetterComponent implements OnInit {
  middleLetters: string[] = [];
  showLetters: boolean = false; // Variable to control visibility of middle letters

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    // Commenting out auto-retrieval of middle letters on component initialization
    // this.getMiddleLetters();
  }

  getMiddleLetters(): void {
    this.phoneService.getPhone().subscribe(phones => {
      this.middleLetters = phones.map(phone => {
        const brand = phone.brand;
        const middleIndex = Math.floor(brand.length / 2);
        return brand.charAt(middleIndex);
      });
    });
  }

  toggleMiddleLetters(): void {
    if (!this.showLetters) {
      this.getMiddleLetters(); // Retrieve middle letters only if not already retrieved
    }
    this.showLetters = !this.showLetters; // Toggle the visibility of the letters
  }
}
