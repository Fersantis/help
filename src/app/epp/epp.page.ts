import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.page.html',
  styleUrls: ['./epp.page.scss'],
})
export class EppPage implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Antiparras', price: 13000, quantity: 1, category: 'epp', description: 'Descripción de las antiparras.' },
    { id: 2, name: 'Guantes', price: 13000, quantity: 1, category: 'epp', description: 'Descripción de los guantes.' },
    // otros productos
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }

}



