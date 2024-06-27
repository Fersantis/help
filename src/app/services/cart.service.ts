import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';  // Ajusta la ruta según sea necesario

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
  private dolar: number = 0;
  private euro: number = 0;

  constructor(private apiService: ApiService) {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }

    this.loadExchangeRates();
  }

  private loadExchangeRates() {
    this.apiService.getCambioMoneda('F073.TCO.PRE.Z.D').subscribe(data => {
      this.dolar = parseFloat(data.valor);
    });
    this.apiService.getCambioMoneda('F072.CLP.EUR.N.O.D').subscribe(data => {
      this.euro = parseFloat(data.valor);
    });
  }

  getCart() {
    return this.cart;
  }

  addProduct(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id && p.category === product.category);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    this.saveCart();
  }

  removeProduct(productId: number, category: string) {
    this.cart = this.cart.filter(product => product.id !== productId || product.category !== category);
    this.saveCart();
  }

  decreaseQuantity(productId: number, category: string) {
    const product = this.cart.find(p => p.id === productId && p.category === category);
    if (product && product.quantity > 1) {
      product.quantity--;
    } else if (product) {
      this.removeProduct(productId, category);
    }
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.quantity, 0);
  }

  changeCurrency(currency: string) {
    if (currency === 'USD' && this.dolar > 0) {
      this.cart.forEach(product => {
        product.price = parseFloat((product.price / this.dolar).toFixed(2));
      });
    } else if (currency === 'EUR' && this.euro > 0) {
      this.cart.forEach(product => {
        product.price = parseFloat((product.price / this.euro).toFixed(2));
      });
    } else if (currency === 'CLP') {
      // Aquí deberías revertir el precio a su valor original en CLP si es necesario
    }
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}



