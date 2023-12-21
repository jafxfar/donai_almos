<template>
    <div class="xl:mx-20 lg:mx-20 mx-2">
        <div class="xl:hidden lg:hidden flex">
            <img src="@/assets/product/6.png" alt="">
        </div>
        <h1 class="mx-4 xl:text-4xl lg:text-4xl text-xl text-one font-semibold first-letter:">Изюм</h1>
        <div class="mx-4 flex xl:flex-row lg:flex-row flex-col xl:my-8 lg:my-8 my-2">
            <h3 class="xl:w-1/2 lg:w-1/2 w-full text-sm font-medium ">Изюм – один из самых распространённых и полезных видов
                сухофруктов. Изюм чёрный произведён из сортов винограда, собранных в Средней Азии, имеет синеватый налёт,
                поэтому его часто называют не тёмным или чёрным, а синим изюмом. Чёрный изюм обладает терпко-сладким вкусом,
                насыщенным ароматом.
                Изюм рекомендуют употреблять при нервных расстройствах, истощении организма, при нехватке железа и
                пониженном уровне гемоглобина крови. При регулярном употреблении изюма нормализуется деятельность
                желудочно-кишечного тракта.
            </h3>
            <div class="xl:flex lg:flex hidden border-r-4 rounded-2xl border-one h-11/12 mx-5"></div>
            <div class="xl:hidden lg:hidden flex rounded-2xl bg-one w-full h-1.5 my-2"></div>
            <div class="xl:w-1/2 lg:w-1/2 w-full flex flex-col">
                <h1 class="text-lg font-medium">Энергитическая свежость в 100 гр</h1>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-20  text-gray-400">Калорий ккал-291</p>
                    <p class="text-sm text-gray-400">Белки-1.8</p>
                </span>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-28 text-gray-400">Жиры-0.0</p>
                    <p class="text-sm ml-1 text-gray-400">Углеводы-70.9</p>
                </span>
                <h1 class="text-lg font-medium my-1">HS CODE</h1>
                <p class="text-sm text-gray-400">080620 </p>
            </div>
        </div>
        <div class="xl:flex lg:flex hidden w-11/12 justify-center items-center">
            <img src="@/assets/product/6.png" class="w-1/2" alt="">
        </div>
        <Slider />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
export default {
    name: 'single-slider',
    data() {
        return {

        }
    },
    components: {
        Slider
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>


<style scoped>
p {
    color: #7E7E7E;
    font-size: 12px;
    font-family: Montserrat;
    font-weight: 500;
    line-height: 20px;
    word-wrap: break-word
}
</style>