import { defineStore } from 'pinia';

// Firestore'dan gelen ürün tipini tanımlıyoruz
interface Product {
  id: string | number;  // id hem string hem number olabilir
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
  hoverImage: string;
  quantity: number;  // Varsayılan olarak 1 olabilir
  selected: boolean; // Varsayılan olarak false olabilir
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [] as Product[],  // Başlangıçta sepet boş
  }),

  getters: {
    // Seçilen ürünleri döndüren getter
    selectedProducts(state): Product[] {
      return state.products.filter((product) => product.selected);
    },

    // Toplam tutarı hesaplayan getter
    total(state): number {
      return state.products.reduce(
        (sum, product) => sum + (product.selected ? product.price * product.quantity : 0),
        0
      );
    },
  },

  actions: {
    // Ürün eklerken, var olan ürünü bulur ve miktarını artırır
    addProduct(product: Product) {
      const existingProduct = this.products.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        this.products.push({ ...product, quantity: 1, selected: true });
      }
    },

    // Ürün miktarını artırır
    increaseQuantity(index: number) {
      this.products[index].quantity++;
    },

    // Ürün miktarını azaltır, ancak 1'den küçük olmasına izin vermez
    decreaseQuantity(index: number) {
      if (this.products[index].quantity > 1) {
        this.products[index].quantity--;
      }
    },

    // Ürünün seçilme durumunu tersine çevirir
    toggleSelection(index: number) {
      this.products[index].selected = !this.products[index].selected;
    },

    // Ürünü sepetten kaldırır
    removeProduct(index: number) {
      this.products.splice(index, 1);
    },
  },
});
