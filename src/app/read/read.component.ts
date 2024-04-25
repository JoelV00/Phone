import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  phones: Phone[];

  constructor(private phoneService: PhoneService, private router: Router) { }

  ngOnInit(): void {
    this.phoneService.getPhone().subscribe(phones => {
      this.phones = phones;
      console.log(phones);
    });
  }

  redirectToTablePage() {
    this.router.navigate(['/table']);
  }
}
