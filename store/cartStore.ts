import type { Product } from './Product';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: (): { items: Product[] } => ({
    items: [], // Product türünden öğeleri saklayacak
  }),
  actions: {
    addProduct(product: Product) {
      // Check if the product has necessary fields and quantity is greater than 0
      if (!product || !product.id || product.quantity <= 0) {
        console.error('Invalid product data provided to addProduct', product);
        return;
      }
      
      // If price is invalid, log a warning but still add the product
      if (product.price <= 0) {
        console.warn('Product price is zero or invalid', product);
        product.price = 1; // Set a default price or keep it as 0 depending on your needs
      }
    
      const existingItem = this.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1, selected: product.selected || false });
      }
    },
    
    updateTotal() {
      // Make sure to recalculate total whenever an item is selected or deselected
      return this.items
        .filter((item) => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    removeProduct(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId);
    },
    updateQuantity(productId: string, quantity: number) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = Math.max(quantity, 1); // Ensure quantity is at least 1
      }    
    },
  },
});
