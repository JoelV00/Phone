import { Component } from '@angular/core';

@Component({
  selector: 'app-bultin-pipe',
  templateUrl: './bultin-pipe.component.html',
  styleUrl: './bultin-pipe.component.css'
})
export class BultinPipeComponent {

  currentDate: Date = new Date();
  text: string = 'Hello, World!';
  amount: number = 1000;
}
