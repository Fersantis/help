import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-epp',
  templateUrl: './epp.page.html',
  styleUrls: ['./epp.page.scss'],
})
export class EppPage implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Antiparras', price: 13, quantity: 1, category: 'epp' },
    { id: 2, name: 'Guantes', price: 13, quantity: 1, category: 'epp' },
    // otros productos
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }

}
