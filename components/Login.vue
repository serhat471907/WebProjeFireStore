<template>
  <div class="login-container">
    <div class="login-form">
      <h1 class="logo">hepsiburada</h1>
      <div class="tab">
        <span key="login">Giriş yap</span>
        <RouterLink to="/kaydol">
          <span key="signup">Üye ol</span>
        </RouterLink>
      </div>
      <!-- firebase ile kullanıcı girişi sağlandı -->
      <form @submit.prevent="handleSubmit">
        <div class="input-field">
          <input v-model="email" type="email" id="email" placeholder="E-posta adresi" required />
        </div>
        <div class="input-field">
          <input v-model="password" type="password" id="password" placeholder="Şifre" required />
        </div>
        <div class="forgot-password">
          <a href="#">Şifremi unuttum</a>
        </div>
        <button class="submit-btn" type="submit">Giriş yap</button>
      </form>
      <!-- Ana Sayfaya Dön Butonu -->
      <button class="submit-btn back-btn" @click="navigateHome">Ana Sayfaya Dön</button>
      <div class="phone-login">
        <a href="#"><p>Telefon numarası ile giriş yap</p></a>
      </div>
      <div class="social-login">
        <a href="#"><p>Sosyal hesabın ile giriş yap</p></a>
        <div class="social-btns">
          <!-- Sosyal medya butonları -->
          <button class="social-btn apple"></button>
          <button class="social-btn google"></button>
          <button class="social-btn facebook"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'Login',
  setup() {
    const email = ref('');
    const password = ref('');
    const message = ref(''); // Gösterilecek mesaj
    const messageType = ref<'success' | 'error' | ''>(''); // Mesaj türü (success veya error)
    const router = useRouter(); // useRouter() ile yönlendirme işlemi
    const auth = getAuth(); // Firebase Auth'u alıyoruz

    const handleSubmit = async () => {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Giriş başarılı:', userCredential.user);

        // Başarı durumunda mesajı ve türünü güncelle
        message.value = 'İşlem başarılı!';
        messageType.value = 'success';

        // 5 saniye sonra mesajı gizle
        setTimeout(() => {
          message.value = '';
          messageType.value = '';
        }, 5000);

        router.push('/'); // Giriş başarılı olduğunda yönlendirme yapılır
      } catch (error) {
        // Hata durumunda mesajı ve türünü güncelle
        message.value = 'İşlem başarısız. Lütfen tekrar deneyin.';
        messageType.value = 'error';

        // 5 saniye sonra mesajı gizle
        setTimeout(() => {
          message.value = '';
          messageType.value = '';
        }, 5000);

        console.error('Giriş hatası:', (error as Error).message);
      }
    };

    const navigateHome = () => {
      router.push('/'); // Ana sayfaya yönlendir
    };

    return {
      email,
      password,
      message,
      messageType,
      handleSubmit,
      navigateHome
    };
  }
};
</script>



  <style scoped>
    .back-btn {
      margin-top: 1rem;
      background-color: #007bff; /* Mavi renk */
    }

    .back-btn:hover {
      background-color: #0056b3; /* Daha koyu mavi */
    }
    .login-container {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2%;
      width: 100%;
    }
    
    .login-form {
      background: white;
      padding: 2rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      align-items: center;
    }
    
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #ff6f00;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    
    .tab {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    
    .tab span {
      font-size: 1rem;
      color: #333;
      cursor: pointer;
    }
    
    .input-field {
      margin-bottom: 1.5rem;
      width: 100%;
      text-align: left;
    }
    
    .input-field input {
      width: 100%;
      padding: 0.8rem;
      margin-top: 0.5rem;
      border-radius: 10px;
      border: 1px solid #ddd;
    }
    
    .forgot-password {
      text-align: left;
      margin-top: 1rem;
    }
    
    .forgot-password a {
      color: #ff6f00;
      font-size: 0.9rem;
    }
    
    .submit-btn {
      width: 100%;
      padding: 0.9rem;
      background-color: #ff6f00;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
    }
    
    .submit-btn:hover {
      background-color: #ff8c33;
    }
    
    .phone-login {
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: #555;
    }
    
    .social-login {
      margin-top: 2rem;
      text-align: center;
    }
    
    .social-login p {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 1rem;
    }
    
    .social-btns {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    
    .social-btn {
      width: 70px;
      height: 70px;
      border: 1px solid #ddd;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .social-btn:hover {
      background-color: #c0b1b1;
    }
    
    .social-btn img {
      width: 80%;
      height: 80%;
    }
    
    .social-btn.apple {
      color: white;
    }
    
    .social-btn.google {
      color: white;
    }
    
    .social-btn.facebook {
      color: white;
    }
    a{
      color: black;
      text-decoration: none;
    }
    </style>