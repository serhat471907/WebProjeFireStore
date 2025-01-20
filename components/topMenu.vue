<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(menuItem, index) in menuItems"
        :key="index"
        class="menu-item"
      >
        <v-menu
          open-on-hover
          transition="scale-transition"
          offset-y
          max-width="250"
        >
          <template #activator="{ props }">
            <span v-bind="props" class="menu-text">{{ menuItem.title }}</span>
          </template>

          <v-list>
            <v-list-item
              v-for="(subItem, subIndex) in menuItem.subMenu"
              :key="subIndex"
            >
              <!-- Alt menü kontrolü -->
              <v-menu v-if="typeof subItem === 'object' && subItem.subMenu" open-on-hover offset-x>
                <template #activator="{ props }">
                  <v-list-item-title v-bind="props">{{ subItem.title }}</v-list-item-title>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(subSubItem, subSubIndex) in subItem.subMenu"
                    :key="subSubIndex"
                  >
                    <v-list-item-title>{{ subSubItem }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <!-- Alt menü yoksa sadece bir başlık göster -->
              <v-list-item-title v-else>{{ subItem }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Alt menü türü
interface SubMenu {
  title: string;
  subMenu?: (string | SubMenu)[];
}

// Menü öğesi türü
interface MenuItem {
  title: string;
  subMenu?: (string | SubMenu)[];
}

// Menü öğeleri
const menuItems = ref<MenuItem[]>([
  {
    title: "Elektronik",
    subMenu: [
      {
        title: "Bilgisayar/Tablet",
        subMenu: [
          "Dizüstü Bilgisayar",
          "Masaüstü Bilgisayar",
          {
            title: "Tablet",
            subMenu: ["Apple", "Samsung", "Huawei"], // Yeni alt menü
          },
        ],
      },
      "Yazıcılar & Projeksiyon",
      "Telefon & Telefon Aksesuarları",
    ],
  },
  {
    title: "Moda",
    subMenu: ["Kadın Giyim", "Erkek Giyim", "Çocuk Giyim", "Aksesuar"],
  },
  {
    title: "Ev, Yaşam, Kırtasiye, Ofis",
    subMenu: ["Mobilya", "Dekorasyon", "Ofis Malzemeleri", "Kırtasiye", "Aydınlatma"],
  },
  {
    title: "Oto, Bahçe, Yapı Market",
    subMenu: ["Bahçe Malzemeleri", "Oto Yedek Parçaları", "El Aletleri"],
  },
  {
    title: "Anne, Bebek, Oyuncak",
    subMenu: ["Bebek Arabaları", "Oyuncaklar", "Bebek Bakımı"],
  },
  {
    title: "Spor, Outdoor",
    subMenu: ["Outdoor Giyim", "Spor Ekipmanları", "Kamp Malzemeleri"],
  },
  {
    title: "Kozmetik, Kişisel Bakım",
    subMenu: ["Makyaj", "Cilt Bakımı", "Parfüm"],
  },
  {
    title: "Süpermarket, Pet Shop",
    subMenu: ["Evcil Hayvan Ürünleri", "Temel Gıda", "İçecekler"],
  },
  {
    title: "Kitap, Müzik, Film, Hobi",
    subMenu: ["Kitaplar", "Filmler", "Enstrümanlar"],
  },
]);
</script>


<style scoped>
.menu-item {
  position: relative;
  padding: 16px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-text {
  font-weight: bold;
  font-size: 12px;
  color: #333;
  transition: color 0.3s;
}

.menu-text:hover {
  color: #ff5722;
}

.v-list-item {
  padding: 8px;
  font-size: 14px;
}

.v-list-item-title {
  color: #555;
  transition: color 0.3s;
}

.v-list-item-title:hover {
  color: #ff5722;
}

.v-menu__content {
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
