<template>
  <div class="w-64 p-4 bg-white shadow-lg rounded-md bordered">
    <!-- Kategori Başlığı -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Kategori</h3>
      <ul class="space-y-1">
        <li
          v-for="(category, index) in categories"
          :key="index"
          class="hover:underline cursor-pointer"
          @click="selectCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>

    <!-- Marka Başlığı -->
    <div class="mb-4">
      <h3 class="text-lg font-semibold mb-2">Marka</h3>
      <div class="mb-2">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Marka Ara"
          class="w-full border px-2 py-1 rounded-md text-sm focus:outline-none focus:ring"
        />
      </div>
      <ul class="space-y-2 max-h-48 overflow-y-auto">
        <li v-for="(brand, index) in filteredBrands" :key="index">
          <label class="flex items-center">
            <input
              type="checkbox"
              :value="brand"
              v-model="selectedBrands"
              class="mr-2"
            />
            {{ brand }}
          </label>
        </li>
      </ul>
    </div>

    <!-- Avantajlı Fırsatlar -->
    <div class="mt-4">
      <h3 class="text-lg font-semibold mb-2">Avantajlı Fırsatlar</h3>
      <label class="flex items-center">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckChecked"
            checked
            v-model="isAdvantageous"
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            Avantajlı fırsatlar
          </label>
        </div>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from "vue";

export default {
  name: "FilterComponent",
  setup() {
    const categories = ref([
      "Tüm kategoriler",
      "Bilgisayar",
      "Hobi ve Oyun Konsolları",
      "Ev Elektroniği",
      "Telefon",
      "Yapı Market / Bahçe / Oto",
      "Kırtasiye / Ofis",
      "Giyim / Ayakkabı",
      "Spor Outdoor",
      "Foto / Kamera",
      "Kitap Film Müzik",
      "Ev Dekorasyon",
      "Anne / Bebek / Oyuncak",
      "Akıllı Ev & Yaşam",
    ]);

    const brands = ref([
      "MSI",
      "Dell",
      "Apple",
      "Acer",
      "Huawei",
      "Monster",
      "Casper",
      "Game Garaj",
      "Microsoft",
      "Xiaomi",
      "Razer",
      "Icotech",
      "Yasomi",
      "Onda",
      "Gigabyte",
      "Hometech",
      "Samsung",
      "Quadro",
      "Technopc",
      "Toshiba",
      "HONOR",
      "I-Life",
      "Dynabook",
      "Alienware",
      "LG",
      "Msi",
      "Exa",
      "Del",
      "Fujitsu",
      "Ofispc",
      "Mack",
      "Xsay",
      "Tiwox",
      "Aspire",
    ]);

    const searchTerm = ref(""); // Arama terimi
    const selectedBrands = ref<string[]>([]); // Seçilen markalar
    const isAdvantageous = ref(false); // Avantajlı fırsatlar durumu

    // Arama terimi ile filtrelenmiş markalar
    const filteredBrands = computed(() => {
      return brands.value.filter((brand) =>
        brand.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    });

    // Kategori seçme fonksiyonu
    const selectCategory = (category: string) => {
      console.log("Selected Category:", category);
      // Kategori seçildiğinde yapılacak işlemler
    };

    return {
      categories,
      searchTerm,
      filteredBrands,
      selectedBrands,
      isAdvantageous,
      selectCategory,
    };
  },
};
</script>

<style scoped>
/* Remove list style and adjust list items */
ul, li {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

h3 {
  color: #333;
  font-size: 14px;
}

/* Ensure the brands list is scrollable */
ul {
  max-height: 300px; /* Set max height */
  overflow-y: auto; /* Enable vertical scrolling */
  font-size: 12px;
}
.bordered {
  border: 1px solid black;
  display: inline-block;
}
</style>
