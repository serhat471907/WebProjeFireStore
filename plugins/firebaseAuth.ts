import { defineNuxtPlugin } from '#app';
import { auth } from '../firebaseConfig'; // Firebase yapılandırmasını içe aktar
import { ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
  // Global reaktif kullanıcı durumu
  const isLoggedIn = ref(false);

  // Kullanıcı oturum durumunu takip et
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user; // Kullanıcı varsa true, yoksa false
  });
// firebase ile ilgili işlemler ayarlandı
  // Global olarak auth ve kullanıcı durumunu sağla
  nuxtApp.provide('auth', auth);
  nuxtApp.provide('isLoggedIn', isLoggedIn);
});

declare module '#app' {
  interface NuxtApp {
    $auth: typeof auth;
    $isLoggedIn: boolean;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $auth: typeof auth;
    $isLoggedIn: boolean;
  }
}

