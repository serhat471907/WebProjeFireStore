<template>
    <div class="reklam-container">
        <div class="reklam-item" v-for="(reklam, index) in reklams" :key="index">
            <a :href="reklam.link" target="_blank">
                <img :src="reklam.image" :alt="'Reklam ' + (index + 1)" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Reklam',
    data() {
        return {
            reklams: [
                { image: 'Reklam/image.png', link: 'https://www.hepsiburada.com/efsane-kasim?trackingId=11027127' },
                { image: 'Reklam/image2.png', link: 'https://www.hepsiburada.com/kampanyalar/secili-bilgisayar-urunlerinde-sepette-5-indirim?trackingId=11001758' },
                { image: 'Reklam/image3.png', link: 'https://www.hepsiburada.com/dv/efsane-kupon?tabId=1978&trackingId=11025450' }, 
            ]
        };
    }
};
</script>

<style scoped>
.reklam-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* Boşlukları eşit şekilde dağıt */
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
    margin-left: 5%;
}

.reklam-item {
    flex: 1 1 calc(33.333% - 20px); /* Her bir reklam genişliği: %33.333, aralıklarla birlikte */
    box-sizing: border-box;
    margin: 10px;
}

.reklam-item img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px; /* Daha hoş bir görünüm için opsiyonel */
}
</style>
