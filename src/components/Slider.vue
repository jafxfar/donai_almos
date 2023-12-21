<template>
    <div class="relative">
        <div class="xl:flex lg:flex hidden slider-container w-full overflow-hidden">
            <transition name="slide-fade" mode="out-in">
                <div class="slider-track w-full flex" :style="sliderStyle" :key="activeIndex">
                    <div v-for="(slide, index) in slides" :key="index" class="slider-item w-full">
                        <div class="flex justify-center">
                            <div v-for="(block, blockIndex) in slide.blocks" :key="blockIndex"
                                class="block w-1/3 px-8 py-16">
                                <div class="bg-white border-2 border-one w-full px-8 pt-16 pb-2.5 rounded-lg relative mx-2">
                                    <div class="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-6">
                                        <div style="border-radius: 50%;"
                                            class="bg-white rounded-full w-auto py-5 px-5 border-2 border-primary">
                                            <img class="w-24 h-20" :src="block.image" :alt="block.title">
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-start items-center">
                                        <h1 class="font-semibold text-center">{{ block.title }}</h1>
                                        <div class="h-4"></div>
                                        <router-link :to="block.link">
                                            <button class="bg-one text-white rounded-lg px-4 py-2 mb-2">Подробнее</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

        <!-- mob  -->
        <div class="xl:hidden lg:hidden flex slider-container justify-center items-center w-full overflow-hidden">
            <transition name="slide-fade" mode="out-in">
                <div class="slider-track w-full flex" :style="sliderStyle" :key="activeIndex">
                    <div v-for="(slide, index) in slides" :key="index" class="slider-item w-full">
                        <div class="flex justify-center">
                            <div v-for="(block, blockIndex) in slide.blocks" :key="blockIndex"
                                class="flex w-1/3 px-4 justify-center items-center py-6 gap-2">
                                <div class="w-full flex flex-col items-center">
                                    <div style="border-radius: 50%;"
                                        class="bg-white rounded-full px-2 flex justify-center items-center py-2 w-20 border-2 border-primary">
                                        <img class="flex justify-start items-center w-12 h-10" :src="block.image"
                                            :alt="block.title">
                                    </div>
                                    <div class="flex flex-col justify-start items-center">
                                        <h1 style="font-size: 9px;font" class="font-normal text-xs text-center mt-3">{{ block.title }}</h1>
                                        <router-link :to="block.link">
                                            <button style="font-size: 14px;" class="bg-one text-white rounded-lg  px-4 py-2 my-2">Подробнее</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>


        <!--  -->


        <div
            class="slider-controls xl:justify-center lg:justify-center justify-start  xl:mx-0 lg:mx-0 mx-4 transform -translate-y-full gap-1 flex">
            <button @click="prevSlide"
                class="slider-button bg-yellow-200 rounded-full w-3 h-3 flex items-center justify-center">
                <span class="sr-only">Предыдущий слайд</span>
                <i class="fas fa-chevron-left text-white"></i>
            </button>
            <button @click="currentSlide"
                class="slider-button bg-primary rounded-full w-5 h-5 -translate-y-1 flex items-center justify-center">
                <span class="sr-only">Текущий слайд</span>
                <i class="fas fa-circle text-white"></i>
            </button>
            <button @click="nextSlide"
                class="slider-button bg-yellow-200 rounded-full w-3 h-3 flex items-center justify-center">
                <span class="sr-only">Следующий слайд</span>
                <i class="fas fa-chevron-right text-white"></i>
            </button>
        </div>
    </div>
</template>
  
<script>
import one from "@/assets/product/one.png"
import two from "@/assets/product/2.png"
import three from "@/assets/product/3.png"
import four from "@/assets/product/4.png"
import five from "@/assets/product/5.png"
import six from "@/assets/product/6.png"
import seven from "@/assets/product/7.png"
import eight from "@/assets/product/8.png"
import nine from "@/assets/product/9.png"

export default {
    name: 'TheSlider',
    data() {
        return {
            activeIndex: 0,
            slides: [
                {
                    blocks: [
                        { title: 'Абрикос свежий', link: '/product-single-one', image: one },
                        { title: 'Урюк', link: '/product-single-two', image: two },
                        { title: 'Курага', link: '/product-single-three', image: three },
                    ],
                },
                {
                    blocks: [
                        { title: 'Абрикосовые косточки', link: '/product-single-four', image: four },
                        { title: 'Виноград', link: '/product-single-five', image: five },
                        { title: 'Изюм', link: '/product-single-six', image: six },
                    ],
                },
                {
                    blocks: [
                        { title: 'Чернослив', link: '/product-single-seven', image: seven },
                        { title: 'Яблоки сушёные', link: '/product-single-eight', image: eight },
                        { title: 'Шелковица сушеная', link: '/product-single-nine', image: nine },
                    ],
                },
                // Добавьте дополнительные слайды с блоками, как необходимо
            ],
        }
    },
    computed: {
        sliderStyle() {
            return {
                transform: `translateX(-${this.activeIndex * 100}%)`,
            };
        },
    },
    methods: {
        nextSlide() {
            // Increment activeIndex or implement logic to change slides
            this.activeIndex = (this.activeIndex + 1) % this.slides.length;
        },
        prevSlide() {
            this.activeIndex = (this.activeIndex - 1 + this.slides.length) % this.slides.length;
        },
        currentSlide() {
            // Optional: Implement logic to handle click on current slide button
        }
    },
};
</script>
  
<style scoped>
.slider-item {
    flex: 0 0 100%;
}

/* Анимация для перехода между слайдами */
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s;
}

.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}
</style>