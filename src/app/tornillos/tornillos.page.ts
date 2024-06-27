import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.page.html',
  styleUrls: ['./tornillos.page.scss'],
})
export class TornillosPage implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Tornillos', price: 13, quantity: 1, category: 'herramientas' },
    { id: 2, name: 'Pernos', price: 13, quantity: 1, category: 'herramientas' },
    // otros productos
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  } 

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }

}
