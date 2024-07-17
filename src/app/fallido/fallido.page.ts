import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fallido',
  templateUrl: './fallido.page.html',
  styleUrls: ['./fallido.page.scss'],
})
export class FallidoPage implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  Iracarro() {
    this.router.navigate(['/cart']);
  }

}
