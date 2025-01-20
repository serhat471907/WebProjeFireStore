<template>
    <div class="login-container">
      <div class="login-form">
        <h1 class="logo">hepsiburada</h1>
        <div class="tab">
          <RouterLink to="/Login">
          <span :class="{ active: isLogin }" @click="isLogin = true">Giriş yap</span>
        </RouterLink>
          <span :class="{ active: !isLogin }" @click="isLogin = false">Üye ol</span>
        </div>
  
        <form @submit.prevent="handleSubmit">
          <div class="input-field">
            <input v-model="email" type="email" id="email" placeholder="E-posta adresi" required />
          </div>
          <div class="input-field">
            <input v-model="password" type="password" id="password" placeholder="Şifre" required />
          </div>
          <div class="input-field">
            <input v-model="confirmPassword" type="password" id="password-repeat" placeholder="Şifre tekrar" required />
          </div>
  
          <!-- Şifre tekrar alanı sadece Üye Ol formu için görünsün -->
          <div v-if="!isLogin" class="input-field">
            <input v-model="confirmPassword" type="password" id="confirm-password" placeholder="Şifreyi Tekrar Girin" required />
            <span v-if="password !== confirmPassword && confirmPassword !== ''" class="error-message">Şifreler uyuşmuyor</span>
          </div>
  
          <div class="forgot-password" v-if="isLogin">
            <a href="#">Şifremi unuttum</a>
          </div>
  
          <button class="submit-btn" type="submit">
            {{ 'Üye ol' }}
          </button>
        </form>
  
        <div class="phone-login">
          <a href="#"><p>Telefon numarası ile giriş yap</p></a>
        </div>
  
        <div class="social-login">
          <a href="#"><p>Sosyal hesabın ile giriş yap</p></a>
          <div class="social-btns">
            <!-- Sosyal medya butonları -->
            <button class="social-btn apple">
              <!-- Apple Icon -->
            </button>
            <button class="social-btn google">
              <!-- Google Icon -->
            </button>
            <button class="social-btn facebook">
              <!-- Facebook Icon -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    name: 'Login',
    setup() {
      const email = ref('');
      const password = ref('');
      const confirmPassword = ref('');
      const isLogin = ref(true); // Varsayılan olarak giriş formu
      const router = useRouter();
      const auth = getAuth();
      const errorMessage = ref('');
  
      const handleSubmit = async () => {
  try {
    // Üye ol (sign up)
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Şifreler uyuşmuyor';
      return;
    }
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('Üye olma başarılı:', userCredential.user);
    router.push('/');
  } catch (error) {
    console.error('Hata:', (error as Error).message);
    errorMessage.value = 'Bir hata oluştu, lütfen tekrar deneyin.';
  }
};

  
      return {
        email,
        password,
        confirmPassword,
        isLogin,
        handleSubmit,
        errorMessage,
      };
    },
  };
  </script>
  
  <style scoped>
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
  
    .tab .active {
      font-weight: bold;
      color: #ff6f00;
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
  
    .error-message {
      color: red;
      font-size: 0.9rem;
      margin-top: 0.5rem;
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
  
    a {
      color: black;
      text-decoration: none;
    }
  </style>
  