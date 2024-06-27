import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Iralogin() {
    console.log('llegue');
    this.router.navigate(['/login']);
  }

  Iraregistro() {
    console.log('llegue');
    this.router.navigate(['/registro']);
  }

}
