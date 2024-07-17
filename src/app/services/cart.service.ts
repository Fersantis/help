import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';  // Ajusta la ruta según sea necesario

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  description?: string; // Asegúrate de incluir esta línea si es necesaria
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  constructor(private apiService: ApiService) {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
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

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}


