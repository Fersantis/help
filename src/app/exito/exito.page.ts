import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.page.html',
  styleUrls: ['./exito.page.scss'],
})
export class ExitoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Irahome() {
    this.router.navigate(['/home']);
  }

}
