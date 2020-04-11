import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: any[];
  data: any;

  constructor() {
    this.data = {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      datasets: [
        {
          label: 'CA N-1',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [200, 500, 5000, 1000, 1230, 6000, 10000]
        },
        {
          label: 'CA N',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [220, 400, 6000, 800, 1150, 7000, 8900]
        }
      ]
    };
  }

  ngOnInit() { }
}
