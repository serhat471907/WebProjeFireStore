<template>
    <div class="slider-controls"></div>
    <div class="slider-container wid">
        <div class="slider">
            <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div class="slide" v-for="(slide, index) in slides" :key="index">
                    <a :href="slide.link" target="_blank">
                        <img :src="slide.image" :alt="`Slide ${index + 1}`">
                    </a>
                    <!-- Slide indicator -->
                    <div class="slider-indicator">
                        {{ currentIndex + 1 }} / {{ slides.length }}
                    </div>
                </div>
            </div>
            <!-- Left Arrow -->
            <button class="slider-arrow left" @click="prevSlide">
                &#10094;
            </button>
            <!-- Right Arrow -->
            <button class="slider-arrow right" @click="nextSlide">
                &#10095;
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                { image: 'images/slide1.png', link: 'https://www.hepsiburada.com/' },
                { image: 'images/slide2.png', link: 'https://www.hepsiburada.com/' },
                { image: 'images/slide3.png', link: 'https://www.hepsiburada.com/' },
                { image: 'images/last_slide.png', link: 'https://www.hepsiburada.com/' },
            ],
        };
    },
    mounted() {
        this.startSlider();
    },
    methods: {
        startSlider() {
            setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            }, 3000); // Change slide every 3 seconds
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
    },
};
</script>

<style scoped>
.slider-container {
    position: relative;
    width: 100%;
    max-width: 819px;
    margin: 0 auto;
    margin-left: 6%;
}

.slider {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 357px;
}

.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    min-width: 100%;
    box-sizing: border-box;
    position: relative;
}

.slide img {
    width: 100%;
    display: block;
}

.slider-indicator {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 14px;
    border-radius: 5px;
    font-weight: bold;
}

.slider-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 238, 238, 0.5);
    border-radius: 55%;
    color: white;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    z-index: 1;
}

.left {
    left: 10px;
}

.right {
    right: 10px;
}
</style>
