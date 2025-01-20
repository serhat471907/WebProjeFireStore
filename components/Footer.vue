<template>
  <li></li>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.5.0/font/bootstrap-icons.min.css"
  />
  <footer class="py-4 custom-color">
    <div class="container">
      <div class="row text-start">
        <!-- Kurumsal -->
        <div class="col-md-3 mb-3">
          <h5>Kurumsal</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank" class="text-dark">Hakkımızda</a></li>
            <li><a href="#" target="_blank" class="text-dark">İş Ortaklarımız</a></li>
            <li><a href="#" target="_blank" class="text-dark">Yatırımcı İlişkileri</a></li>
            <li><a href="#" target="_blank" class="text-dark">Müşteri Hizmetleri</a></li>
            <li><a href="#" target="_blank" class="text-dark">Kariyer</a></li>
            <li><a href="#" target="_blank" class="text-dark">Kişisel Verilerin Korunması</a></li>
            <li><a href="#" target="_blank" class="text-dark">Bilgi Güvenliği Politikası</a></li>
            <li><a href="#" target="_blank" class="text-dark">Güvenli Alışveriş Kılavuzu</a></li>
            <li><a href="#" target="_blank" class="text-dark">İş Sağlığı ve Güvenliği Çevre Politikamız</a></li>
            <li><a href="#" target="_blank" class="text-dark">İletişim</a></li>
          </ul>
        </div>

        <!-- Hepsiburada -->
        <div class="col-md-3 mb-3">
          <h5>Hepsiburada</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank" class="text-dark">Satıcı Olmak İstiyorum</a></li>
            <li><a href="#" target="_blank" class="text-dark">Hepsipay İş Yeri Olmak İstiyorum</a></li>
            <li><a href="#" target="_blank" class="text-dark">Tedarikçi Davranış Kuralları</a></li>
            <li><a href="#" target="_blank" class="text-dark">Girişimci Kadınlara Teknoloji Gücü</a></li>
            <li><a href="#" target="_blank" class="text-dark">Teslimat Noktası Olmak İstiyorum</a></li>
            <li><a href="#" target="_blank" class="text-dark">Ödeme Seçenekleri</a></li>
            <li><a href="#" target="_blank" class="text-dark">Banka Kampanyaları</a></li>
            <li><a href="#" target="_blank" class="text-dark">İşlem Rehberi</a></li>
          </ul>
        </div>

        <!-- Bizi Takip Edin -->
        <div class="col-md-3 mb-3">
          <h5>Bizi Takip Edin</h5>
          <ul class="list-unstyled d-flex gap-2 custom">
            <li><a href="#" target="_blank"><i class="bi bi-instagram"></i> <span>Instagram</span></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-youtube"></i> <span>YouTube</span></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-facebook"></i> <span>Facebook</span></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-twitter"></i> <span>Twitter</span></a></li>
            <li><a href="#" target="_blank"><i class="bi bi-linkedin"></i> <span>LinkedIn</span></a></li>
          </ul>
        </div>

        <!-- Mobil Uygulamalar ve Akılınıza Takılan Bir Soru Var Mı? -->
        <div class="col-md-3 mb-3 d-flex justify-content-between">
          <div>
            <h5>Mobil Uygulamalar</h5>
            <ul class="list-unstyled">
              <li><img src="public/footer/app.store.png" alt="" class="resim"></li>
              <li><img src="public/footer/playstore.png" alt="" class="resim"></li>
              <li><img src="public/footer/app_galary.png" alt="" class="resim"></li>
            </ul>
          </div>
          <div class="mt-4">
            <h6>Aklınıza takılan bir soru mu var?</h6>
            <p>
              <a href="#" target="_blank" class="btn btn-primary btn-sm">Çözüm Merkezine Bağlanın</a><br />
              veya<br />
              <strong>0850 252 40 00</strong><br />
              <a href="https://wa.me/1234567890" target="_blank" class="btn btn-success d-flex align-items-center gap-2">
                <i class="bi bi-whatsapp"></i> WhatsApp Destek
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
};
</script>

<style scoped>
footer a:hover {
  text-decoration: underline;
}
.custom {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.bi {
  font-size: 1rem;
  color: #000;
}
img {
  max-width: 100px;
  height: auto;
}
.custom-color {
  background-color: rgb(255, 242, 234);
}
footer a {
  text-decoration: none;
  font-size: 12px;
  color: #000; /* Normal metin rengini belirleyin */
}

footer a:hover {
  text-decoration: underline;
}

footer a span {
  font-size: 1rem; /* Metin boyutunu normal yapın */
  font-weight: normal; /* Yazı tipi kalınlık ayarı */
  color: #000; /* Metin rengini belirleyin */
  margin-left: 5px; /* İkon ile metin arasındaki mesafeyi ayarlayın */
}

.bi {
  font-size: 1.5rem; /* İkon boyutunu ayarlayın */
}
footer .btn {
  background-color: rgb(255, 242, 234); /* Sayfa arka planıyla aynı renk */
  color: #000; /* Buton metni rengi */
  border: none; /* Buton kenarlıklarını kaldır */
}

footer .btn:hover {
  background-color: rgb(255, 242, 234); /* Hover durumunda da aynı renk */
  color: #000; /* Hover metni rengi */
}
/* Başlık renk değişimi */
footer h5, footer h6 {
  font-size: 14px;
  color: #ff6000; /* Başlık rengi */
}

/* Tüm başlıkların hizalanması */
footer .col-md-3 h5, footer .col-md-3 h6 {
  text-align: left; /* Başlıkların sola hizalanması */
}
/* Resimler arasındaki boşluğu azalt */
footer .col-md-3.mb-3.d-flex.justify-content-between img {
  margin-bottom: 0; /* Resimler arasındaki boşluğu sıfırlayın */
  padding: 0; /* Resimler için ekstra padding'i kaldırın */
}

/* Mobil Uygulamalar ve Akılınıza Takılan Bir Soru Var arasında boşluğu azalt */
footer .col-md-3.mb-3.d-flex.justify-content-between div {
  margin-bottom: 0; /* Bu bölümdeki boşluğu sıfırlayın */
  padding-bottom: 0; /* Padding'i sıfırlayın */
}

/* İçerikler arasında daha sıkı bir düzen sağlamak için */
footer .col-md-3.mb-3.d-flex.justify-content-between {
  gap: 15px; /* Aralarındaki boşluğu azalt */
  align-items: flex-start; /* İçeriklerin üst hizalamaya odaklanmasını sağla */
}

/* Hedeflenen alanlarda daha sıkı düzenleme */
footer .col-md-3.mb-3.d-flex.justify-content-between > div {
  margin-bottom: 0;
}

/* Resimlerin boyutları ve hizalaması */
footer .col-md-3.mb-3 img {
  max-width: 80px; /* Resim boyutlarını küçült */
  height: auto;
  display: block;
  margin-bottom: 0; /* Resimler arasındaki boşluğu sıfırla */
}

</style>
