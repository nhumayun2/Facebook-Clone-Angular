import { Component } from '@angular/core';
import { NavBarComponent } from '../Repeted-Elements/Nav-bar/nav-bar/nav-bar.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {

}
