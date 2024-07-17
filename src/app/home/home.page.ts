import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private router: Router) {}

  Iraepp() {
    this.router.navigate(['/epp']);
  }

  Iraherramientas() {
    this.router.navigate(['/herramientas']);
  }

  Iraingreso() {
    this.router.navigate(['/ingreso']);
  }

  Iramateriales() {
    this.router.navigate(['/materiales']);
  }

  Iramedicion() {
    this.router.navigate(['/medicion']);
  }

  Iratornillos() {
    this.router.navigate(['/tornillos']);
  }

  Iracarrito() {
    this.router.navigate(['/cart']);
  }

}

