
import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
@Component({
  selector: 'app-last-two',
  templateUrl: './last-two.component.html',
  styleUrl: './last-two.component.css'
})
export class LastTwoComponent implements OnInit {
  phones: Phone[];
  constructor(private phoneService: PhoneService) { }

  ngOnInit():void {
    this.phoneService.getLastTwo().subscribe(phones => {
      this.phones = phones;
      console.log(phones);
    })
  
    const showButton = document.getElementById('showButton1')!;
    const phoneTable = document.getElementById('phoneTable1')!;
    
    showButton.addEventListener('click', function() {
        if (phoneTable.classList.contains('hiddenTable1')) {
            phoneTable.classList.remove('hiddenTable1');
            this.textContent = 'Hide Table';
        } else {
            phoneTable.classList.add('hiddenTable1');
            this.textContent = 'Show Last Two';
        }
    });
    


}
}



