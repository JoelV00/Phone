import { Component, OnInit } from '@angular/core';
import { Phone } from '../phone';
import { PhoneService } from '../phone.service';
@Component({
  selector: 'app-orginal',
  templateUrl: './orginal.component.html',
  styleUrl: './orginal.component.css'
})
export class OrginalComponent implements OnInit {
  phones: Phone[];
  constructor(private phoneService: PhoneService) { }

  ngOnInit():void {
    this.phoneService.getOrginal().subscribe(phones => {
      this.phones = phones;
      console.log(phones);
    })
  
    const showButton = document.getElementById('showButton3')!;
    const phoneTable = document.getElementById('phoneTable3')!;
    
    showButton.addEventListener('click', function() {
        if (phoneTable.classList.contains('hiddenTable3')) {
            phoneTable.classList.remove('hiddenTable3');
            this.textContent = 'Hide Orginal';
        } else {
            phoneTable.classList.add('hiddenTable3');
            this.textContent = 'Show Orginal Table';
        }
    });
}
}
