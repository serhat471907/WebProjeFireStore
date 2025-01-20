<template>
  <v-container>
    <v-row class="d-flex justify-between align-center" :style="{ padding: '20px' }">
      <!-- Ürünler Dizisini Döngüyle Göster -->
      <v-col v-for="(product, index) in products" :key="index" cols="6" sm="4" md="2">
        <v-card
          @mouseover="hovered[index] = true"
          @mouseleave="hovered[index] = false"
          height="400"
          class="product-card"
        >
          <!-- Ürün Resmi -->
          <v-img
            :src="hovered[index] ? product.hoverImage : product.image"
            :alt="product.name"
            height="200"
          ></v-img>

          <!-- Ürün Adı, Yıldızlar ve Yorum Sayısı -->
          <v-card-title>
            <span class="headline">{{ product.name }}</span>
          </v-card-title>

          <!-- Yıldızlar ve Yorum Sayısı -->
          <v-card-subtitle>
            <span class="stars">
              <span v-for="n in 5" :key="n" class="star" :class="n <= product.rating ? 'filled' : ''">
                ★
              </span>
            </span>
          </v-card-subtitle>

          <!-- Ürün Fiyatı -->
          <v-card-subtitle>
            <span class="font-weight-bold">₺{{ product.price.toFixed(2) }}</span>
          </v-card-subtitle>

          <!-- Hover Durumunda Gösterilecek Buton -->
          <v-card-actions>
            <button
              v-if="hovered[index]"
              type="button"
              class="btn btn-danger w-100 hover-button custom-button"
              @click="addToCart(product)"
            >
              Sepete Ekle
            </button>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig'; // Firestore bağlantısı
import { useCartStore } from '@/store/cart'; // Pinia Store'u kullanma

const cartStore = useCartStore(); // Pinia Store'u kullanma

// Ürün Tipini Tanımlıyoruz
interface Product {
  id: string; // Firestore'dan gelen document ID
  name: string;
  price: number;
  rating: number; // Yıldız sayısı
  ratingCount: number; // Yorum sayısı
  image: string; // Ana resim URL'si
  hoverImage: string; // Hover için resim URL'si
  quantity: number; // Ürün miktarı
  selected: boolean; // Ürün seçili mi
}

// Reaktif Veriler
const products = ref<Product[]>([]);
const hovered = ref<boolean[]>([]);

// Firestore'dan Ürünleri Çekme
// Firestore'dan Ürünleri Çekme
const fetchProducts = async () => {
  const productCollection = collection(db, 'products'); // 'products' koleksiyonu
  const productDocs = await getDocs(productCollection);

// Firestore'dan gelen verileri products dizisine ekle
// Initialize quantity to 1 instead of 0
// Ensure valid price when fetching from Firestore
products.value = productDocs.docs.map((doc) => {
  const data = doc.data();
  const price = Number(data.price) || 1; // Default to 1 if price is invalid
  return {
    id: doc.id,
    name: data.name,
    price: price,
    rating: data.rating,
    ratingCount: data.ratingCount,
    image: data.image,
    hoverImage: data.hoverImage,
    quantity: 1,
    selected: false,
  } as Product;
});




  console.log('Products:', products.value); // Verileri kontrol et

  // Hover durumu için başlangıç değerlerini ayarla
  hovered.value = Array(products.value.length).fill(true);
};


// Vue Lifecycle Hook
onMounted(() => {
  fetchProducts();
});

// Sepete Ekle Fonksiyonu
const addToCart = (product: Product) => {
  cartStore.addProduct(product);
};
</script>


<style scoped>
/* Kartı ve içeriklerini özelleştirmek için stil ekleyebilirsiniz */
.v-container {
  width: 95%; 
  max-width: 100%;
  display: flex;
  align-items: space;
}

.product-card {
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
  height: 398px;
  border: 10px;
}

.v-img {
  border-top-left-radius: 10px;
  border-top-right-radius: 50px;
}

.hover-button {
  transition: background-color 0.3s ease;
  opacity: 0;
  height: 30px; /* Buton yüksekliğini azaltıyoruz */
  font-size: 14px; /* Yazı fontunu küçültüyoruz */
  line-height: 30px; /* Buton yüksekliğiyle uyumlu olmasını sağlıyoruz */
}

.product-card:hover .hover-button {
  opacity: 1;
}

.custom-button {
  background-color: #ff5733 !important; /* Özel arka plan rengi */
  border-color: #ff5733 !important;    /* Kenar rengi */
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  text-align: center; /* Yazının ortalanması */
  padding: 0 10px; /* İç boşlukları azaltıyoruz */
}

.hover-button:hover {
  background-color: #e5781e; /* Hover durumunda buton rengi */
  color: white;
}

.v-card-title, .v-card-subtitle {
  text-align: center;
}

.v-card-subtitle {
  font-weight: bold;
}

.stars {
  display: inline-block;
  color: #d4cbc3;
}

.star {
  font-size: 1em;
}

.star.filled {
  color: rgba(246,159,41,255)
}

.headline {
  font-size: 12px;
  font-weight: bold;
}

/* Flexbox düzeni ile kartlar arasındaki boşluğu ayarlıyoruz */
.v-row {
  display: flex;
  justify-content: space-between; /* Kartlar arasında eşit boşluk bırak */
  flex-wrap: wrap;
  width: 100%;
  max-width: 100%;
}
</style>
