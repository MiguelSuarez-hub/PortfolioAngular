import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  collapsed = false;
  navData = navbarData;
}
