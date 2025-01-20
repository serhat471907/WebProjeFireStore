<template>
    <div class="logout-container">
      <div class="logout-box">
        <h1 class="logo">hepsiburada</h1>
        <p class="logout-message">Çıkış yapmak istediğinizden emin misiniz?</p>
        <div class="buttons">
          <button @click="logout" class="btn-logout">Evet, çıkış yap</button>
          <router-link to="/" class="btn-cancel">İptal</router-link>
          <button @click="goToHome" class="btn-home">Ana Sayfaya Dön</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { getAuth, signOut } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  export default defineComponent({
    name: 'Logout',
    setup() {
      const auth = getAuth();
      const router = useRouter();
  
      const logout = async () => {
        try {
          await signOut(auth);
          console.log('Çıkış başarılı');
          router.push('/login'); // Çıkış yapıldıktan sonra login sayfasına yönlendir
        } catch (error) {
          console.error('Çıkış hatası:', error);
        }
      };
  
      const goToHome = () => {
        router.push('/'); // Ana sayfaya yönlendirme
      };
  
      return {
        logout,
        goToHome,
      };
    },
  });
  </script>
  
  <style scoped>
  .logout-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f4f4f4;
  }
  
  .logout-box {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff6f00;
    margin-bottom: 1.5rem;
  }
  
  .logout-message {
    font-size: 1rem;
    color: #333;
    margin-bottom: 2rem;
  }
  
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-logout {
    padding: 1rem;
    background-color: #ff6f00;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn-logout:hover {
    background-color: #ff8c33;
  }
  
  .btn-cancel {
    padding: 1rem;
    background-color: #ddd;
    color: black;
    text-decoration: none;
    border-radius: 4px;
    display: inline-block;
    font-size: 1rem;
    text-align: center;
  }
  
  .btn-cancel:hover {
    background-color: #bbb;
  }
  
  .btn-home {
    padding: 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  .btn-home:hover {
    background-color: #45a047;
  }
  </style>
  