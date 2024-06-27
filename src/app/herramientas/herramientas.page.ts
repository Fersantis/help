import { Component } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage {
  products: Product[] = [
    { id: 1, name: 'Martillo', price: 13, quantity: 1, category: 'herramientas' },
    { id: 2, name: 'Cincel', price: 13, quantity: 1, category: 'herramientas' },
    // otros productos
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }
}


