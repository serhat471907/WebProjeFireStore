<template>
  <v-app>
    <v-app-bar app class="custom">
      <RouterLink to="/premium" class="clickable-logo">
        <v-img
          src="public/Logo/image copy.png"
          alt="Logo"
          class="mr-4"
          max-width="400"
        />
        </RouterLink>
      <v-img
        src="public/Logo/image copy.png"
        alt="Logo"
        class="mr-4"
        max-width="400"
      />

      <!-- Arama Kısmı -->
      <v-text-field
        v-model="searchQuery"
        label="Ürün, Kategori veya Marka Ara"
        prepend-inner-icon="mdi-magnify"
        class="mx-auto"
        solo
        hide-details
        clearable
        dense
        style="max-width: 600px;"
        rounded
      />

      <!-- Konum ve Konum Yazısı Butonu -->
      <div class="buttons">
        <a href="#"><img src="public/parts/konum.png" alt=""></a>

        <!-- Profil İkonu ve Yönlendirme -->
         <RouterLink to="/login" class="clickable-logo">
        <div>
          <img
            v-if="$isLoggedIn"
            src="public/parts/profil.png"
            alt="Profil"
            @click="handleLoginRedirect"
          />
          <img
            v-else
            src="public/parts/giris.png"
            alt="Giriş Yap"
            @click="handleLoginRedirect"
          />
        </div>
      </RouterLink>

        <!-- Sepet Butonu -->
        <RouterLink to="/sepet" class="clickable-logo">
        <img src="public/parts/sepetim.png" alt="">
        </RouterLink>
      </div>
    </v-app-bar>

    <!-- Alt Çizgi -->
    <div class="bottom-line">
      <img src="public/parts/line.png" alt="">
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useNuxtApp } from '#app';

// Arama sorgusu
const searchQuery = ref<string>('');

// Nuxt App'ten global değişkenler alınır
const { $isLoggedIn } = useNuxtApp();

// Vue Router
const router = useRouter();

// Yönlendirme fonksiyonu
const handleLoginRedirect = (): void => {
  if ($isLoggedIn) {
    router.push('/cikis'); // Kullanıcı giriş yaptıysa cikis sayfasına yönlendirme
  } else {
    router.push('/login'); // Kullanıcı giriş yapmadıysa login sayfasına yönlendirme
  }
};
</script>




<style scoped>
.v-app-bar {
  background-color: #ffffff;
  box-shadow: none;
  padding-top: 15px;
  padding-bottom: 15px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

.v-btn {
  color: #333;
}

.v-text-field {
  max-width: 400px;
  border-bottom: none !important;
}

.v-icon {
  font-size: 24px;
}

.v-btn.ml-4 {
  margin-left: 16px;
}

/* Arama kutusunun köşelerine yuvarlatılmış görünüm */
.v-text-field .v-input__control {
  border-radius: 25px;
}

.buttons {
  display: flex;
  align-items: center;
  padding-right: 3%;
}

.button-bg {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 10px 15px;
}

.location-text {
  font-size: 16px;
  color: #333;
  margin-left: 8px;
}

.v-btn {
  margin-right: 10px;
}

.bottom-line {
  height: 10px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.custom {
  background-color: #ffffff;
  display: block;
}
.clickable-logo {
  display: inline-block;
  cursor: pointer; /* Tıklanabilirliği görsel olarak belirtir */
}
</style>
