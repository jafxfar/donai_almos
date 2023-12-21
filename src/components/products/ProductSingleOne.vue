<template>
    <div class="xl:mx-20 lg:mx-20 mx-2">
        <div class="xl:hidden lg:hidden flex">
            <img src="@/assets/product/one.png" alt="">
        </div>
        <h1 class="mx-4 xl:text-4xl lg:text-4xl text-xl text-one font-semibold first-letter:">Абрикос свежий</h1>
        <div class="mx-4 flex xl:flex-row lg:flex-row flex-col xl:my-8 lg:my-8 my-2">
            <h3 class="xl:w-1/2 lg:w-1/2 w-full text-sm font-medium ">Свежие абрикосы считаются одними из самых полезных
                фруктов, ведь в их
                составе присутствуют:
                бета-каротин, холин, витамины А, В3, В2, В5, В6, В9, С, Е, Н и РР, а также минеральные вещества: калий,
                магний, железо, йод, фосфор и натрий, пектины, инулин, пищевые волокна, сахара, крахмал, дубильные вещества
                и кислоты: яблочная, лимонная и винная. Употребление в пищу абрикосов в сезон способствует повышению уровня
                гемоглобина крови, укреплению защитных свойств организма, является профилактикой появления болезней
                щитовидной железы. Наличие магния делает фрукт очень полезным при любых нарушениях деятельности
                сердечно-сосудистой системы за счёт нормализации работы сердечной мышцы.</h3>
            <div class="xl:flex lg:flex hidden border-r-4 rounded-2xl border-one h-11/12 mx-5"></div>
            <div class="xl:hidden lg:hidden flex rounded-2xl bg-one w-full h-1.5 my-2"></div>
            <div class="xl:w-1/2 lg:w-1/2 w-full flex flex-col">
                <h3 class="text-lg">Энергитическая свежость в 100</h3>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-20  text-gray-400">Калорий ккал-44</p>
                    <p class="text-sm text-gray-400">Белки-0.9</p>
                </span>
                <span class="flex flex-row my-1">
                    <p class="text-sm mr-28 text-gray-400">Жиры-0.1</p>
                    <p class="text-sm ml-1 text-gray-400">Углеводы-9.0</p>
                </span>
                <h1 class="text-lg font-medium my-1">HS CODE</h1>
                <p class="text-sm text-gray-400">080910 </p>
            </div>
        </div>
        <div class="xl:flex lg:flex hidden w-11/12 justify-center items-center">
            <img src="@/assets/product/one.png" class="w-1/2" alt="">
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