import { Component } from '@angular/core';
import { NavBarComponent } from '../Repeted-Elements/Nav-bar/nav-bar/nav-bar.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

}
