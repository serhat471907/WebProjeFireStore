<template>
  <div>
    <navbar />
    <topMenu />
      <img src="public/images/image copy 2.png" alt="" width="100%">
      <div class="container">
        <Slider />
        <img src="public/parts/image.png" alt="" style="height: 330px;">
      </div>

      <Card />
      <Card />
      <Reklam />
      <Card />
      <Reklam />
      <Card />
      <Reklam />
      <Card />
      <Reklam />
   
    <Footer />
    </div>
</template>
<!-- index vue dosyası düzenlendi -->
<script>
import navbar from './components/mavbar.vue';
import topMenu from './components/topMenu.vue';
import Reklam from './components/Reklam.vue';
import Card from './components/Card.vue';
import Slider from './components/Slider.vue';
import Footer from '~/components/Footer.vue';
import Fltre from '~/components/Fltre.vue';


export default {
  components: {
    navbar,
    topMenu,
    Reklam,
    Card,
    Slider,
    Footer,
    Fltre,
  },
}
</script>

<style>
  html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    max-width: 100%;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
</style>
