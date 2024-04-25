import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrl: './prime.component.css'
})
export class PrimeComponent implements OnInit{
  phones: Phone[];
  constructor(private phoneService: PhoneService) { }

  ngOnInit():void {
    this.phoneService.getPrime().subscribe(phones => {
      this.phones = phones;
      console.log(phones);
    })
  
    const showButton = document.getElementById('showButton2')!;
    const phoneTable = document.getElementById('phoneTable2')!;
    
    showButton.addEventListener('click', function() {
        if (phoneTable.classList.contains('hiddenTable2')) {
            phoneTable.classList.remove('hiddenTable2');
            this.textContent = 'Hide Prime Table';
        } else {
            phoneTable.classList.add('hiddenTable2');
            this.textContent = 'Show Prime Table';
        }
    });
  }
}