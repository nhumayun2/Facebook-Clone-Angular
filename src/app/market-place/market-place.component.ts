import { Component } from '@angular/core';
import { NavBarComponent } from '../Repeted-Elements/Nav-bar/nav-bar/nav-bar.component';

@Component({
  selector: 'app-market-place',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './market-place.component.html',
  styleUrl: './market-place.component.css'
})
export class MarketPlaceComponent {

}
