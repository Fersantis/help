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

  Irapago() {
    this.finalizarCompra(); // Llamada a la función para finalizar la compra
  }

  changeCurrency(currency: string) {    
    this.apiService.getCambioMoneda().subscribe((response: any) => {
      let conversionRate;
      if (currency === 'dolar') {
        conversionRate = response.dolar.valor; // Obtenemos el valor del dólar
      } else if (currency === 'euro') {
        conversionRate = response.euro.valor; // Obtenemos el valor del euro
      }
  
      if (conversionRate) {
        console.log(conversionRate);
        this.total = this.cartService.getTotal() * conversionRate; // Convertimos el total a la nueva moneda
      }
    });
  }

  finalizarCompra() {
    const compraData = this.cart.map(product => ({
        id: product.id,
        cantidad: product.quantity
    }));

    this.apiService.comprarHerramienta(compraData).subscribe(
        (response) => {
            console.log('Compra realizada con éxito', response);
            this.clearCart();
            this.router.navigate(['/pago']); // Redirigir a la página de pago después de realizar la compra
        },
        (error) => {
            console.error('Error al realizar la compra', error);
        }
    );
  }
}






