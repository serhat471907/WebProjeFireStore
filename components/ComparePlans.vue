<template>
    <div class="container my-5">
      <div class="table-responsive">
        <table class="table table-bordered text-center align-middle">
          <thead>
            <tr>
              <th class="compare-table-header"></th>
              <th class="compare-table-header" style="font-weight: 400;">Şu anda</th>
              <th class="compare-table-header">
                <img 
                  src="https://images.hepsiburada.net/loyalty/premium/prod/PartnerCampaign/grouppng-8hzdr8cw48j7.png" 
                  alt="Premium Logo" 
                  height="20"
                />
                <br /><p style="color: blueviolet;">Üyeliği</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in plans" :key="index">
              <td class="row-feature">{{ row.feature }} <span style="text-align: right; font-size: 20px; color: black;">
                <i class="bi bi-info-circle"></i>
            </span>
            </td>
              <td>{{ row.current }}</td>
              <td class="premium-cell">{{ row.premium }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  
  <script lang="ts" setup>
  import { ref } from "vue";
  
  // Tablo veri türünü tanımlıyoruz
  interface Plan {
    feature: string;
    current: string;
    premium: string;
  }
  
  // Tablo verileri
  const plans = ref<Plan[]>([
    { feature: "Kargo Bedeli", current: "49,90 TL", premium: "Ücretsiz" },
    { feature: "Alışverişlerinde Hepsipara Kazancı", current: "Yok", premium: "%3" },
    { feature: "Randevulu Teslimat", current: "49,90 TL", premium: "Ücretsiz" },
    { feature: "BluTV Üyeliği", current: "Ayda 199,90 TL", premium: "Hediye" },
    { feature: "Hepsipay Kart'la Hepsipara Kazancı", current: "Yok", premium: "%3" },
    { feature: "Kapında İade", current: "Ücretsiz", premium: "Ücretsiz" },
    { feature: "Mobilya Montaj Hizmeti", current: "Ortalama 550 TL", premium: "%50 İndirimli" },
  ]);
  </script>
  
  
  <style scoped>
  .compare-table-header {
    background-color: #f8f9fa;
    font-weight: bold;
    text-align: center;
  }
  
  .premium-cell {
    background-color: rgb(250, 234, 240);
  }
  .row-feature {
    text-align: left;
    width: 800px;
  }
  </style>
  