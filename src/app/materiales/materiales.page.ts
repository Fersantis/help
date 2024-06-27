import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../services/cart.service';

@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
})
export class MaterialesPage implements OnInit {

  products: Product[] = [
    { id: 1, name: 'Cemento', price: 13, quantity: 1, category: 'materiales' },
    { id: 2, name: 'Madera', price: 13, quantity: 1, category: 'materiales' },
    // otros productos
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
  }

}
