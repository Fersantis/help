import { Component } from '@angular/core';
import { CartService, Product } from '../services/cart.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cart: Product[] = [];
  total = 0;

  constructor(
    private cartService: CartService, 
    private router: Router, 
    private apiService: ApiService // Inyecta ApiService
  ) {}

  ionViewWillEnter() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  addToCart(product: Product) {
    this.cartService.addProduct({ ...product, quantity: 1 });
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(productId: number, category: string) {
    this.cartService.removeProduct(productId, category);
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  decreaseQuantity(productId: number, category: string) {
    this.cartService.decreaseQuantity(productId, category);
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  Volverahome() {
    this.router.navigate(['/home']);
  }

  changeCurrency(currency: string) {
    let codigo;
    if (currency === 'dolar') {
      codigo = 'F073.TCO.PRE.Z.D';
    } else if (currency === 'euro') {
      codigo = 'F072.CLP.EUR.N.O.D';
    }

    if (codigo) {
      this.apiService.getCambioMoneda(codigo).subscribe((response: any) => {
        const conversionRate = response.valor; // Asegúrate de que esta sea la propiedad correcta
        this.cart = this.cart.map(product => {
          return { ...product, price: product.price / conversionRate };
        });
        this.total = this.cartService.getTotal();
      });
    }
  }
}





