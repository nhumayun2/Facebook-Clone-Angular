import { Component } from '@angular/core';
import { NavBarComponent } from '../Repeted-Elements/Nav-bar/nav-bar/nav-bar.component';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent {

}
