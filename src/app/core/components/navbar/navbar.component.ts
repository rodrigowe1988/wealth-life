import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  iconWL: string = '../assets/images/wl-logo.webp'

  showFiller = false;

  logout(): void {
    alert("Você saiu da sua conta!")
  }

}
