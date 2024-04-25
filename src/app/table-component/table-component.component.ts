import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})

export class TableComponent implements OnInit {
  phones: Phone[];

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.phoneService.getPhone().subscribe(phones => {
      this.phones = phones;
    });
  }
}
