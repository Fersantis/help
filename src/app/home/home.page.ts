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
    console.log('llegue');
    this.router.navigate(['/epp']);
  }

  Iraherramientas() {
    console.log('llegue');
    this.router.navigate(['/herramientas']);
  }

  Iraingreso() {
    console.log('llegue');
    this.router.navigate(['/ingreso']);
  }

  Iramateriales() {
    console.log('llegue');
    this.router.navigate(['/materiales']);
  }

  Iramedicion() {
    console.log('llegue');
    this.router.navigate(['/medicion']);
  }

  Iratornillos() {
    console.log('llegue');
    this.router.navigate(['/tornillos']);
  }

  Iracarrito() {
    console.log('llegue');
    this.router.navigate(['/cart']);
  }

}

