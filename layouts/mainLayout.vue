<template>
    <div>
      <NuxtPage />
    </div>
  </template>
  
  <script>
  import Navbar from './components/mavbar.vue';
  export default {
    name: 'mainLayout',
    components: {
      Navbar,
    },
    layout: 'login-layout', // Bu sayfa için özel layout
    
  };
  </script>
  