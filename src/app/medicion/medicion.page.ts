import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})
export class MedicionPage implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Teodolito Óptico', price: 13, quantity: 1, category: 'herramientas' },
    { id: 2, name: 'Distanciómetro', price: 13, quantity: 1, category: 'herramientas' },
    // otros productos
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }

}
