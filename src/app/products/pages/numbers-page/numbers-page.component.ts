import { Component } from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells: number = 347564.42742;
  public percent: number = 0.0364109;
}
